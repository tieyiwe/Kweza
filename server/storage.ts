import { type Registration, type InsertRegistration } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(user: any): Promise<any>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
  getRegistrationById(id: string): Promise<Registration | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, any>;
  private registrations: Map<string, Registration>;

  constructor() {
    this.users = new Map();
    this.registrations = new Map();
  }

  async getUser(id: string): Promise<any | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = randomUUID();
    const user: any = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = {
      ...insertRegistration,
      id,
      address: insertRegistration.address || null,
      farmSize: insertRegistration.farmSize || null,
      crops: insertRegistration.crops || null,
      farmingExperience: insertRegistration.farmingExperience || null,
      averageYield: insertRegistration.averageYield || null,
      businessName: insertRegistration.businessName || null,
      businessType: insertRegistration.businessType || null,
      products: insertRegistration.products || null,
      monthlyVolume: insertRegistration.monthlyVolume || null,
      yearsInBusiness: insertRegistration.yearsInBusiness || null,
      creditNeeds: insertRegistration.creditNeeds || null,
      comments: insertRegistration.comments || null,
    };
    this.registrations.set(id, registration);
    return registration;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async getRegistrationById(id: string): Promise<Registration | undefined> {
    return this.registrations.get(id);
  }
}

export const storage = new MemStorage();
