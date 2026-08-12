import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { type Registration } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sprout, Users, Store, Tractor, Mail, Phone, MapPin, Download, Search, X } from "lucide-react";

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState<string>("all");

  const { data, isLoading } = useQuery<{ success: boolean; registrations: Registration[] }>({
    queryKey: ["/api/registrations"],
  });

  const registrations = data?.registrations || [];

  const filteredRegistrations = useMemo(() => {
    let filtered = registrations;

    if (searchQuery) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(r => 
        r.fullName.toLowerCase().includes(query) ||
        r.email.toLowerCase().includes(query) ||
        r.phone.includes(query) ||
        (r.businessName && r.businessName.toLowerCase().includes(query)) ||
        (r.region && r.region.toLowerCase().includes(query))
      );
    }

    if (regionFilter !== "all") {
      filtered = filtered.filter(r => r.region === regionFilter);
    }

    return filtered;
  }, [registrations, searchQuery, regionFilter]);

  const farmers = filteredRegistrations.filter(r => r.role === 'farmer');
  const sellers = filteredRegistrations.filter(r => r.role === 'seller');

  const uniqueRegions = useMemo(() => {
    const regions = new Set(registrations.map(r => r.region));
    return Array.from(regions).sort();
  }, [registrations]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading registrations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Sprout className="text-2xl text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Kuwezaa Admin</h1>
                <p className="text-sm text-muted-foreground">Registration Dashboard</p>
              </div>
            </div>
            <Link 
              href="/" 
              data-testid="link-home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Registration Form
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                data-testid="input-search"
                placeholder="Search by name, email, phone, or business..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  data-testid="button-clear-search"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger data-testid="select-region-filter" className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {uniqueRegions.map(region => (
                  <SelectItem key={region} value={region}>
                    {region ? region.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Unknown'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            data-testid="button-export-csv"
            onClick={() => window.location.href = '/api/registrations/export/csv'}
            variant="outline"
          >
            <Download className="h-4 w-4 mr-2" />
            Export to CSV
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-total-count">{filteredRegistrations.length}</div>
              <p className="text-xs text-muted-foreground">
                {searchQuery || regionFilter !== "all" ? `Filtered from ${registrations.length} total` : 'All farmers and sellers'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Farmers</CardTitle>
              <Tractor className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-farmers-count">{farmers.length}</div>
              <p className="text-xs text-muted-foreground">
                {searchQuery || regionFilter !== "all" ? 'In filtered results' : 'Registered farmers'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sellers</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-sellers-count">{sellers.length}</div>
              <p className="text-xs text-muted-foreground">
                {searchQuery || regionFilter !== "all" ? 'In filtered results' : 'Registered sellers'}
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3">
            <TabsTrigger value="all" data-testid="tab-all">All ({filteredRegistrations.length})</TabsTrigger>
            <TabsTrigger value="farmers" data-testid="tab-farmers">Farmers ({farmers.length})</TabsTrigger>
            <TabsTrigger value="sellers" data-testid="tab-sellers">Sellers ({sellers.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <RegistrationTable registrations={filteredRegistrations} />
          </TabsContent>

          <TabsContent value="farmers">
            <RegistrationTable registrations={farmers} />
          </TabsContent>

          <TabsContent value="sellers">
            <RegistrationTable registrations={sellers} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function RegistrationTable({ registrations }: { registrations: Registration[] }) {
  if (registrations.length === 0) {
    return (
      <Card>
        <CardContent className="py-12">
          <div className="text-center text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No registrations found</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.map((reg) => (
                <TableRow key={reg.id} data-testid={`row-registration-${reg.id}`}>
                  <TableCell className="font-medium">
                    <div>
                      <div className="font-semibold" data-testid={`text-name-${reg.id}`}>{reg.fullName}</div>
                      {reg.role === 'seller' && reg.businessName && (
                        <div className="text-sm text-muted-foreground">{reg.businessName}</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={reg.role === 'farmer' ? 'default' : 'secondary'} data-testid={`badge-role-${reg.id}`}>
                      {reg.role === 'farmer' ? <Tractor className="h-3 w-3 mr-1" /> : <Store className="h-3 w-3 mr-1" />}
                      {reg.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        <span data-testid={`text-phone-${reg.id}`}>{reg.phone}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground" data-testid={`text-email-${reg.id}`}>{reg.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="capitalize" data-testid={`text-region-${reg.id}`}>{reg.region.replace('-', ' ')}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {reg.role === 'farmer' ? (
                      <div className="text-sm space-y-1">
                        {reg.farmSize && <div>Farm: {reg.farmSize} ha</div>}
                        {reg.crops && reg.crops.length > 0 && (
                          <div className="text-muted-foreground">
                            Crops: {reg.crops.slice(0, 3).join(', ')}
                            {reg.crops.length > 3 && ` +${reg.crops.length - 3}`}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-sm space-y-1">
                        {reg.businessType && (
                          <div className="capitalize">{reg.businessType.replace('-', ' ')}</div>
                        )}
                        {reg.products && reg.products.length > 0 && (
                          <div className="text-muted-foreground">
                            Products: {reg.products.slice(0, 3).join(', ')}
                            {reg.products.length > 3 && ` +${reg.products.length - 3}`}
                          </div>
                        )}
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
