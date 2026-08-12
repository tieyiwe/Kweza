import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { useRegistrationIntent } from "@/contexts/registration-intent-context";
import { SECTION_IDS } from "@/lib/sections";
import { CONGO_PROVINCES, CREDIT_RANGES, PRODUCT_VALUES, BUSINESS_TYPE_VALUES } from "@/lib/constants";
import { CheckCircle, Sprout, Store } from "lucide-react";

interface MultiSelectProps {
  options: readonly string[];
  labels: Record<string, string>;
  value: string[];
  onChange: (value: string[]) => void;
  error?: boolean;
}

function MultiSelect({ options, labels, value, onChange, error }: MultiSelectProps) {
  const toggleOption = (option: string) => {
    const newValue = value.includes(option) ? value.filter((v) => v !== option) : [...value, option];
    onChange(newValue);
  };

  return (
    <div className={`grid grid-cols-2 gap-2 md:grid-cols-3 ${error ? "border-destructive" : ""}`}>
      {options.map((option) => (
        <div
          key={option}
          data-testid={`option-${option}`}
          onClick={() => toggleOption(option)}
          className={`cursor-pointer rounded-lg border px-3 py-2 text-sm transition-all ${
            value.includes(option)
              ? "border-primary bg-primary text-primary-foreground"
              : "border-input hover:border-primary/40 hover:bg-muted"
          }`}
        >
          <CheckCircle className={`mr-2 inline h-4 w-4 ${value.includes(option) ? "inline" : "hidden"}`} />
          {labels[option]}
        </div>
      ))}
    </div>
  );
}

export function RegistrationSection() {
  const { t } = useLanguage();
  const { presetRole, clearPresetRole } = useRegistrationIntent();
  const [selectedRole, setSelectedRole] = useState<"farmer" | "seller" | null>(null);
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

  const selectRole = (role: "farmer" | "seller") => {
    setSelectedRole(role);
    form.setValue("role", role);
    form.clearErrors("role");
  };

  useEffect(() => {
    if (presetRole) {
      selectRole(presetRole);
      clearPresetRole();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetRole]);

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
      queryClient.invalidateQueries({ queryKey: ["/api/registrations"] });
    },
    onError: (error: any) => {
      toast({
        title: t.form.errors.generic,
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRegistration) => {
    if (selectedRole === "farmer") {
      data.crops = selectedCrops;
    } else if (selectedRole === "seller") {
      data.products = selectedProducts;
    }
    createRegistrationMutation.mutate(data);
  };

  return (
    <section id={SECTION_IDS.registration} className="scroll-mt-16 bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t.form.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.form.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.form.subtitle}</p>
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>{t.form.role.sectionTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card
                    data-testid="role-farmer"
                    className={`cursor-pointer rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                      selectedRole === "farmer" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => selectRole("farmer")}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Sprout className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-lg font-semibold text-foreground">{t.form.role.farmerTitle}</h4>
                          <p className="text-sm text-muted-foreground">{t.form.role.farmerBody}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    data-testid="role-seller"
                    className={`cursor-pointer rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                      selectedRole === "seller" ? "border-terracotta bg-terracotta/5" : "border-border"
                    }`}
                    onClick={() => selectRole("seller")}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-terracotta/10">
                          <Store className="h-6 w-6 text-terracotta" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-lg font-semibold text-foreground">{t.form.role.sellerTitle}</h4>
                          <p className="text-sm text-muted-foreground">{t.form.role.sellerBody}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {form.formState.errors.role && (
                  <p className="mt-2 text-sm text-destructive">{t.form.role.requiredError}</p>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>{t.form.personal.sectionTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <Label htmlFor="fullName">
                      {t.form.personal.fullName} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      data-testid="input-fullName"
                      placeholder={t.form.personal.fullNamePlaceholder}
                      {...form.register("fullName")}
                    />
                    {form.formState.errors.fullName && (
                      <p className="mt-1 text-sm text-destructive">{t.form.errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">
                      {t.form.personal.phone} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      data-testid="input-phone"
                      type="tel"
                      placeholder="+243 XXX XXX XXX"
                      {...form.register("phone")}
                    />
                    {form.formState.errors.phone && (
                      <p className="mt-1 text-sm text-destructive">{t.form.errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">
                      {t.form.personal.email} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      data-testid="input-email"
                      type="email"
                      placeholder="votre@email.com"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-sm text-destructive">{t.form.errors.email}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="region">
                      {t.form.personal.region} <span className="text-destructive">*</span>
                    </Label>
                    <Select onValueChange={(value) => form.setValue("region", value)}>
                      <SelectTrigger data-testid="select-region">
                        <SelectValue placeholder={t.form.personal.regionPlaceholder} />
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
                      <p className="mt-1 text-sm text-destructive">{t.form.errors.region}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="address">{t.form.personal.address}</Label>
                    <Input
                      id="address"
                      data-testid="input-address"
                      placeholder={t.form.personal.addressPlaceholder}
                      {...form.register("address")}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {selectedRole === "farmer" && (
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>{t.form.farmer.sectionTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="farmSize">
                      {t.form.farmer.farmSize} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="farmSize"
                      data-testid="input-farmSize"
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder={t.form.farmer.farmSizePlaceholder}
                      {...form.register("farmSize")}
                    />
                    {form.formState.errors.farmSize && (
                      <p className="mt-1 text-sm text-destructive">{form.formState.errors.farmSize.message}</p>
                    )}
                  </div>

                  <div>
                    <Label>
                      {t.form.farmer.crops} <span className="text-destructive">*</span>
                    </Label>
                    <p className="mb-3 text-sm text-muted-foreground">{t.form.farmer.cropsHint}</p>
                    <MultiSelect
                      options={PRODUCT_VALUES}
                      labels={t.products}
                      value={selectedCrops}
                      onChange={setSelectedCrops}
                      error={!!form.formState.errors.crops}
                    />
                    {selectedCrops.length === 0 && form.formState.errors.crops && (
                      <p className="mt-2 text-sm text-destructive">{t.form.farmer.cropsError}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="farmingExperience">{t.form.farmer.experience}</Label>
                    <Input
                      id="farmingExperience"
                      data-testid="input-farmingExperience"
                      type="number"
                      min="0"
                      placeholder={t.form.farmer.experiencePlaceholder}
                      {...form.register("farmingExperience", { valueAsNumber: true })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="averageYield">{t.form.farmer.yield}</Label>
                    <Input
                      id="averageYield"
                      data-testid="input-averageYield"
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder={t.form.farmer.yieldPlaceholder}
                      {...form.register("averageYield")}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedRole === "seller" && (
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>{t.form.seller.sectionTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="businessName">
                      {t.form.seller.businessName} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="businessName"
                      data-testid="input-businessName"
                      placeholder={t.form.seller.businessNamePlaceholder}
                      {...form.register("businessName")}
                    />
                    {form.formState.errors.businessName && (
                      <p className="mt-1 text-sm text-destructive">{form.formState.errors.businessName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="businessType">
                      {t.form.seller.businessType} <span className="text-destructive">*</span>
                    </Label>
                    <Select onValueChange={(value) => form.setValue("businessType", value)}>
                      <SelectTrigger data-testid="select-businessType">
                        <SelectValue placeholder={t.form.seller.businessTypePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {BUSINESS_TYPE_VALUES.map((value) => (
                          <SelectItem key={value} value={value}>
                            {t.businessTypes[value]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.businessType && (
                      <p className="mt-1 text-sm text-destructive">{form.formState.errors.businessType.message}</p>
                    )}
                  </div>

                  <div>
                    <Label>
                      {t.form.seller.products} <span className="text-destructive">*</span>
                    </Label>
                    <p className="mb-3 text-sm text-muted-foreground">{t.form.seller.productsHint}</p>
                    <MultiSelect
                      options={PRODUCT_VALUES}
                      labels={t.products}
                      value={selectedProducts}
                      onChange={setSelectedProducts}
                      error={!!form.formState.errors.products}
                    />
                    {selectedProducts.length === 0 && form.formState.errors.products && (
                      <p className="mt-2 text-sm text-destructive">{t.form.seller.productsError}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="monthlyVolume">{t.form.seller.monthlyVolume}</Label>
                    <Input
                      id="monthlyVolume"
                      data-testid="input-monthlyVolume"
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder={t.form.seller.monthlyVolumePlaceholder}
                      {...form.register("monthlyVolume")}
                    />
                  </div>

                  <div>
                    <Label htmlFor="yearsInBusiness">{t.form.seller.yearsInBusiness}</Label>
                    <Input
                      id="yearsInBusiness"
                      data-testid="input-yearsInBusiness"
                      type="number"
                      min="0"
                      placeholder={t.form.seller.yearsInBusinessPlaceholder}
                      {...form.register("yearsInBusiness", { valueAsNumber: true })}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>{t.form.additional.sectionTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="creditNeeds">{t.form.additional.creditNeeds}</Label>
                  <Select onValueChange={(value) => form.setValue("creditNeeds", value)}>
                    <SelectTrigger data-testid="select-creditNeeds">
                      <SelectValue placeholder={t.form.additional.creditNeedsPlaceholder} />
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
                  <Label htmlFor="comments">{t.form.additional.comments}</Label>
                  <Textarea
                    id="comments"
                    data-testid="textarea-comments"
                    rows={4}
                    placeholder={t.form.additional.commentsPlaceholder}
                    {...form.register("comments")}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    data-testid="checkbox-terms"
                    checked={form.watch("termsAccepted")}
                    onCheckedChange={(checked) => form.setValue("termsAccepted", !!checked)}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    {t.form.additional.terms}{" "}
                    <a href="#" className="text-primary hover:underline">
                      {t.form.additional.termsLinkText}
                    </a>
                    . <span className="text-destructive">*</span>
                  </Label>
                </div>
                {form.formState.errors.termsAccepted && (
                  <p className="text-sm text-destructive">{t.form.additional.termsError}</p>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button
                type="submit"
                data-testid="button-submit"
                size="lg"
                className="bg-primary px-12 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
                disabled={createRegistrationMutation.isPending}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                {createRegistrationMutation.isPending ? t.form.submit.submitting : t.form.submit.button}
              </Button>
            </div>
          </form>
        </Reveal>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              {t.form.success.title}
            </DialogTitle>
          </DialogHeader>
          <div className="text-center">
            <p className="mb-6 text-muted-foreground">{t.form.success.body}</p>
            <Button
              data-testid="button-close-modal"
              onClick={() => setShowSuccessModal(false)}
              className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              {t.form.success.close}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
