# Overview

This is a full-stack web application built for agricultural registration and management, specifically designed for the Democratic Republic of Congo. The application allows farmers and sellers to register their information, including details about their agricultural products, business operations, and credit needs. It features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data persistence.

The application is built as a single-page application (SPA) with a registration form that adapts based on the user's role (farmer or seller), collecting role-specific information while maintaining a clean, user-friendly interface.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build Tool**: The frontend uses React with Vite as the build tool and development server. TypeScript is used throughout for type safety.

**UI Component System**: Built with shadcn/ui (Radix UI primitives) following the "New York" style variant. This provides a comprehensive set of accessible, customizable components with Tailwind CSS for styling.

**Design Rationale**: shadcn/ui was chosen for its flexibility, accessibility compliance, and seamless Tailwind integration. The component-based architecture allows for consistent UI patterns while maintaining customization capabilities.

**State Management**: Uses React Query (@tanstack/react-query) for server state management, providing caching, synchronization, and optimistic updates. Local state is managed with React hooks.

**Form Handling**: React Hook Form with Zod for schema validation provides type-safe form management with minimal re-renders and excellent developer experience.

**Routing**: Wouter is used as a lightweight routing solution instead of React Router, chosen for its minimal footprint while providing essential routing capabilities.

## Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript for the API layer.

**Development Setup**: The application uses tsx for development (TypeScript execution) and esbuild for production builds, providing fast compilation and bundling.

**API Design**: RESTful API endpoints for registration management:
- POST `/api/registrations` - Create new registration
- GET `/api/registrations` - Retrieve all registrations  
- GET `/api/registrations/:id` - Retrieve specific registration

**Error Handling**: Centralized error handling with Zod validation errors returning structured 400 responses, and generic errors returning 500 responses.

**Rationale**: Express was chosen for its simplicity and extensive ecosystem. The RESTful design provides clear, predictable endpoints that align with standard HTTP semantics.

## Data Storage

**Database**: PostgreSQL is the chosen database system, accessed through the Neon serverless driver (@neondatabase/serverless).

**ORM**: Drizzle ORM provides type-safe database operations with excellent TypeScript integration. The schema is defined in `shared/schema.ts` and shared between client and server.

**Schema Design**: Single `registrations` table with columns for:
- Common fields: id, role, fullName, phone, email, region, address
- Farmer-specific: farmSize, crops, farmingExperience, averageYield
- Seller-specific: businessName, businessType, products, monthlyVolume, yearsInBusiness
- Additional: creditNeeds, comments, termsAccepted

**Development Storage**: In-memory storage implementation (MemStorage) allows development without database connection, with the same interface as the production storage layer.

**Rationale**: This hybrid approach (nullable role-specific columns) was chosen over separate tables to simplify queries and reduce joins, as the use cases for farmers and sellers share significant overlap. Drizzle provides compile-time type safety without the overhead of heavier ORMs.

## External Dependencies

**Database Service**: Neon PostgreSQL serverless database accessed via DATABASE_URL environment variable. The application uses `@neondatabase/serverless` driver for connection pooling and serverless optimization.

**UI Component Library**: Radix UI primitives (@radix-ui/*) provide unstyled, accessible component foundations. These are wrapped with Tailwind CSS styling through shadcn/ui conventions.

**Styling Framework**: Tailwind CSS with custom design tokens defined in CSS variables. The theme uses a neutral base color with custom primary (green) and accent (yellow/gold) colors suitable for an agricultural context.

**Form Validation**: Zod provides runtime schema validation, with drizzle-zod creating Zod schemas from Drizzle table definitions to ensure database and validation schemas stay in sync.

**Development Tools**: 
- Replit-specific plugins for development experience (cartographer, dev-banner, runtime-error-modal)
- Vite plugins for React and development tooling
- PostCSS with Autoprefixer for CSS processing

**Geographic Data**: Hardcoded list of 26 Congolese provinces and common agricultural products for dropdown selections, avoiding external API dependencies for static reference data.