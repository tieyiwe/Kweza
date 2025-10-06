import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const registrations = pgTable("registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  role: text("role").notNull(), // 'farmer' or 'seller'
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  region: text("region").notNull(),
  address: text("address"),
  
  // Farmer-specific fields
  farmSize: decimal("farm_size"),
  crops: text("crops").array(),
  farmingExperience: integer("farming_experience"),
  averageYield: decimal("average_yield"),
  
  // Seller-specific fields
  businessName: text("business_name"),
  businessType: text("business_type"),
  products: text("products").array(),
  monthlyVolume: decimal("monthly_volume"),
  yearsInBusiness: integer("years_in_business"),
  
  // Additional information
  creditNeeds: text("credit_needs"),
  comments: text("comments"),
  termsAccepted: boolean("terms_accepted").notNull().default(false),
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
}).extend({
  role: z.enum(['farmer', 'seller']),
  fullName: z.string().min(1, 'Full name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Valid email is required'),
  region: z.string().min(1, 'Region is required'),
  farmSize: z.string().optional(),
  crops: z.array(z.string()).optional(),
  farmingExperience: z.number().optional(),
  averageYield: z.string().optional(),
  businessName: z.string().optional(),
  businessType: z.string().optional(),
  products: z.array(z.string()).optional(),
  monthlyVolume: z.string().optional(),
  yearsInBusiness: z.number().optional(),
  creditNeeds: z.string().optional(),
  comments: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;
