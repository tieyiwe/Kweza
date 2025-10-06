import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "wouter";
import { insertRegistrationSchema, type InsertRegistration } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sprout, Tractor, Store, CheckCircle } from "lucide-react";

const CONGO_PROVINCES = [
  { value: "kinshasa", label: "Kinshasa" },
  { value: "kongo-central", label: "Kongo Central" },
  { value: "kwilu", label: "Kwilu" },
  { value: "kwango", label: "Kwango" },
  { value: "mai-ndombe", label: "Mai-Ndombe" },
  { value: "kasai", label: "Kasaï" },
  { value: "kasai-central", label: "Kasaï-Central" },
  { value: "kasai-oriental", label: "Kasaï-Oriental" },
  { value: "sankuru", label: "Sankuru" },
  { value: "maniema", label: "Maniema" },
  { value: "south-kivu", label: "South Kivu" },
  { value: "north-kivu", label: "North Kivu" },
  { value: "ituri", label: "Ituri" },
  { value: "haut-uele", label: "Haut-Uélé" },
  { value: "bas-uele", label: "Bas-Uélé" },
  { value: "tshopo", label: "Tshopo" },
  { value: "equateur", label: "Équateur" },
  { value: "mongala", label: "Mongala" },
  { value: "nord-ubangi", label: "Nord-Ubangi" },
  { value: "sud-ubangi", label: "Sud-Ubangi" },
  { value: "tshuapa", label: "Tshuapa" },
  { value: "tanganyika", label: "Tanganyika" },
  { value: "haut-lomami", label: "Haut-Lomami" },
  { value: "lualaba", label: "Lualaba" },
  { value: "haut-katanga", label: "Haut-Katanga" },
  { value: "lomami", label: "Lomami" },
];

const AGRICULTURAL_PRODUCTS = [
  "cassava", "maize", "plantains", "rice", "palm-oil", "coffee", 
  "cocoa", "beans", "peanuts", "sweet-potato", "vegetables", "fruits"
];

const BUSINESS_TYPES = [
  { value: "individual", label: "Individual Trader" },
  { value: "small-business", label: "Small Business (1-10 employees)" },
  { value: "medium-business", label: "Medium Business (11-50 employees)" },
  { value: "large-business", label: "Large Business (50+ employees)" },
  { value: "cooperative", label: "Cooperative" },
];

const CREDIT_RANGES = [
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-5000", label: "$1,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "10000-25000", label: "$10,000 - $25,000" },
  { value: "25000+", label: "$25,000+" },
];

interface MultiSelectProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  error?: boolean;
}

function MultiSelect({ options, value, onChange, placeholder, error }: MultiSelectProps) {
  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option];
    onChange(newValue);
  };

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-2 ${error ? 'border-destructive' : ''}`}>
      {options.map((option) => (
        <div
          key={option}
          data-testid={`option-${option}`}
          onClick={() => toggleOption(option)}
          className={`cursor-pointer border rounded-md px-3 py-2 text-sm transition-all ${
            value.includes(option)
              ? 'bg-primary text-primary-foreground border-primary'
              : 'border-input hover:bg-muted'
          }`}
        >
          <CheckCircle className={`inline w-4 h-4 mr-2 ${value.includes(option) ? 'block' : 'hidden'}`} />
          {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
        </div>
      ))}
    </div>
  );
}

export default function Registration() {
  const [selectedRole, setSelectedRole] = useState<'farmer' | 'seller' | null>(null);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertRegistration>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      role: undefined,
      fullName: "",
      phone: "",
      email: "",
      region: "",
      address: "",
      termsAccepted: false,
    },
  });

  const createRegistrationMutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      return await apiRequest("POST", "/api/registrations", data);
    },
    onSuccess: () => {
      setShowSuccessModal(true);
      form.reset();
      setSelectedRole(null);
      setSelectedCrops([]);
      setSelectedProducts([]);
      queryClient.invalidateQueries({ queryKey: ['/api/registrations'] });
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRegistration) => {
    // Add selected crops/products to the data
    if (selectedRole === 'farmer') {
      data.crops = selectedCrops;
    } else if (selectedRole === 'seller') {
      data.products = selectedProducts;
    }
    
    createRegistrationMutation.mutate(data);
  };

  const selectRole = (role: 'farmer' | 'seller') => {
    setSelectedRole(role);
    form.setValue('role', role);
    form.clearErrors('role');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Sprout className="text-2xl text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Kweza</h1>
                <p className="text-sm text-muted-foreground">Connecting Farmers & Sellers in Congo</p>
              </div>
            </div>
            <Link 
              href="/admin" 
              data-testid="link-admin"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold text-foreground mb-3">Join Kweza Today</h2>
            <p className="text-muted-foreground text-lg">
              Register as a farmer or seller to access credit lines and connect with the agricultural community across Congo. Complete the form below to get started.
            </p>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Role Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Your Role</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card 
                  data-testid="role-farmer"
                  className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                    selectedRole === 'farmer' ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                  onClick={() => selectRole('farmer')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Tractor className="text-2xl text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">Farmer</h4>
                        <p className="text-sm text-muted-foreground">I grow and sell agricultural products</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  data-testid="role-seller"
                  className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                    selectedRole === 'seller' ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                  onClick={() => selectRole('seller')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Store className="text-2xl text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">Seller</h4>
                        <p className="text-sm text-muted-foreground">I purchase and resell agricultural products</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {form.formState.errors.role && (
                <p className="text-sm text-destructive mt-2">Please select a role to continue</p>
              )}
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    data-testid="input-fullName"
                    placeholder="Enter your full name"
                    {...form.register('fullName')}
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    data-testid="input-phone"
                    type="tel"
                    placeholder="+243 XXX XXX XXX"
                    {...form.register('phone')}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    data-testid="input-email"
                    type="email"
                    placeholder="your@email.com"
                    {...form.register('email')}
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="region">
                    Province/Region in Congo <span className="text-destructive">*</span>
                  </Label>
                  <Select onValueChange={(value) => form.setValue('region', value)}>
                    <SelectTrigger data-testid="select-region">
                      <SelectValue placeholder="Select your province" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONGO_PROVINCES.map((province) => (
                        <SelectItem key={province.value} value={province.value}>
                          {province.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.region && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.region.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="address">Specific Location/Address</Label>
                  <Input
                    id="address"
                    data-testid="input-address"
                    placeholder="Street, neighborhood, or landmark"
                    {...form.register('address')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Farmer-specific fields */}
          {selectedRole === 'farmer' && (
            <Card>
              <CardHeader>
                <CardTitle>Farm Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="farmSize">
                    Farm Size (Hectares) <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="farmSize"
                    data-testid="input-farmSize"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g., 5.5"
                    {...form.register('farmSize')}
                  />
                  {form.formState.errors.farmSize && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.farmSize.message}</p>
                  )}
                </div>

                <div>
                  <Label>
                    Crops/Produce Grown <span className="text-destructive">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">Select all that apply</p>
                  <MultiSelect
                    options={AGRICULTURAL_PRODUCTS}
                    value={selectedCrops}
                    onChange={setSelectedCrops}
                    error={!!form.formState.errors.crops}
                  />
                  {selectedCrops.length === 0 && form.formState.errors.crops && (
                    <p className="text-sm text-destructive mt-2">Please select at least one crop</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="farmingExperience">Years of Farming Experience</Label>
                  <Input
                    id="farmingExperience"
                    data-testid="input-farmingExperience"
                    type="number"
                    min="0"
                    placeholder="e.g., 10"
                    {...form.register('farmingExperience', { valueAsNumber: true })}
                  />
                </div>

                <div>
                  <Label htmlFor="averageYield">Average Annual Yield (Tons)</Label>
                  <Input
                    id="averageYield"
                    data-testid="input-averageYield"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g., 20"
                    {...form.register('averageYield')}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Seller-specific fields */}
          {selectedRole === 'seller' && (
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="businessName">
                    Business Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="businessName"
                    data-testid="input-businessName"
                    placeholder="Enter your business name"
                    {...form.register('businessName')}
                  />
                  {form.formState.errors.businessName && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.businessName.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="businessType">
                    Business Type <span className="text-destructive">*</span>
                  </Label>
                  <Select onValueChange={(value) => form.setValue('businessType', value)}>
                    <SelectTrigger data-testid="select-businessType">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUSINESS_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.businessType && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.businessType.message}</p>
                  )}
                </div>

                <div>
                  <Label>
                    Products You Sell <span className="text-destructive">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">Select all that apply</p>
                  <MultiSelect
                    options={AGRICULTURAL_PRODUCTS}
                    value={selectedProducts}
                    onChange={setSelectedProducts}
                    error={!!form.formState.errors.products}
                  />
                  {selectedProducts.length === 0 && form.formState.errors.products && (
                    <p className="text-sm text-destructive mt-2">Please select at least one product</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="monthlyVolume">Estimated Monthly Purchase Volume (Tons)</Label>
                  <Input
                    id="monthlyVolume"
                    data-testid="input-monthlyVolume"
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g., 50"
                    {...form.register('monthlyVolume')}
                  />
                </div>

                <div>
                  <Label htmlFor="yearsInBusiness">Years in Business</Label>
                  <Input
                    id="yearsInBusiness"
                    data-testid="input-yearsInBusiness"
                    type="number"
                    min="0"
                    placeholder="e.g., 5"
                    {...form.register('yearsInBusiness', { valueAsNumber: true })}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="creditNeeds">Estimated Credit Line Needed (USD)</Label>
                <Select onValueChange={(value) => form.setValue('creditNeeds', value)}>
                  <SelectTrigger data-testid="select-creditNeeds">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    {CREDIT_RANGES.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="comments">Additional Comments or Questions</Label>
                <Textarea
                  id="comments"
                  data-testid="textarea-comments"
                  rows={4}
                  placeholder="Tell us more about your needs or ask any questions..."
                  {...form.register('comments')}
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  data-testid="checkbox-terms"
                  checked={form.watch('termsAccepted')}
                  onCheckedChange={(checked) => form.setValue('termsAccepted', !!checked)}
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a> and consent to being contacted by Kweza regarding my registration. <span className="text-destructive">*</span>
                </Label>
              </div>
              {form.formState.errors.termsAccepted && (
                <p className="text-sm text-destructive">{form.formState.errors.termsAccepted.message}</p>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              data-testid="button-submit"
              size="lg"
              className="px-12 py-4 text-lg font-semibold"
              disabled={createRegistrationMutation.isPending}
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              {createRegistrationMutation.isPending ? 'Submitting...' : 'Submit Registration'}
            </Button>
          </div>
        </form>
      </main>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-5xl text-primary" />
              </div>
              Registration Successful!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Thank you for registering with Kweza. We have received your information and will contact you shortly to discuss the next steps.
            </p>
            <Button
              data-testid="button-close-modal"
              onClick={() => setShowSuccessModal(false)}
              className="px-8"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; 2024 Kweza. Empowering agriculture in Congo.</p>
            <div className="mt-2 flex items-center justify-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
