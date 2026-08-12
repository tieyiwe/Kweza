import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Register a new farmer or seller
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      res.json({ success: true, registration });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all registrations
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.json({ success: true, registrations });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Get a specific registration by ID
  app.get("/api/registrations/:id", async (req, res) => {
    try {
      const registration = await storage.getRegistrationById(req.params.id);
      if (!registration) {
        res.status(404).json({ 
          success: false, 
          message: "Registration not found" 
        });
        return;
      }
      res.json({ success: true, registration });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Export registrations as CSV
  app.get("/api/registrations/export/csv", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      
      const escapeCSV = (value: any): string => {
        if (value === null || value === undefined) return '';
        const str = String(value);
        if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
          return `"${str.replace(/"/g, '""').replace(/\r?\n/g, ' ')}"`;
        }
        return str;
      };

      const csvHeader = [
        'ID',
        'Role',
        'Full Name',
        'Phone',
        'Email',
        'Region',
        'Address',
        'Farm Size (ha)',
        'Crops',
        'Farming Experience (years)',
        'Average Yield (tons)',
        'Business Name',
        'Business Type',
        'Products',
        'Monthly Volume (tons)',
        'Years in Business',
        'Credit Needs',
        'Comments',
        'Terms Accepted'
      ].join(',');

      const csvRows = registrations.map(reg => {
        return [
          escapeCSV(reg.id),
          escapeCSV(reg.role),
          escapeCSV(reg.fullName),
          escapeCSV(reg.phone),
          escapeCSV(reg.email),
          escapeCSV(reg.region),
          escapeCSV(reg.address),
          escapeCSV(reg.farmSize),
          escapeCSV(reg.crops ? reg.crops.join('; ') : ''),
          escapeCSV(reg.farmingExperience),
          escapeCSV(reg.averageYield),
          escapeCSV(reg.businessName),
          escapeCSV(reg.businessType),
          escapeCSV(reg.products ? reg.products.join('; ') : ''),
          escapeCSV(reg.monthlyVolume),
          escapeCSV(reg.yearsInBusiness),
          escapeCSV(reg.creditNeeds),
          escapeCSV(reg.comments),
          escapeCSV(reg.termsAccepted)
        ].join(',');
      });

      const csv = [csvHeader, ...csvRows].join('\n');

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=kuwezaa-registrations.csv');
      res.send(csv);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
