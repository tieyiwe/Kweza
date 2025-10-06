# Overview

This is a full-stack web application built for agricultural registration and management, specifically designed for the Democratic Republic of Congo (Kweza platform). The application allows farmers and sellers to register their information, including details about their agricultural products, business operations, and credit needs. It features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data persistence.

The application includes:
- **Public Registration Form** (/) - Dual-purpose form for farmers and sellers with role-specific fields
- **Admin Dashboard** (/admin) - View, search, filter, and export all registrations
- **Database Persistence** - PostgreSQL with Drizzle ORM for permanent data storage
- **CSV Export** - Download all registration data with proper formatting

Last updated: October 6, 2025

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
- GET `/api/registrations/:id` - Retrieve specific registration by ID
- GET `/api/registrations/export/csv` - Export all registrations as CSV file

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

**Database Connection**: The application uses Drizzle ORM with the Neon serverless PostgreSQL driver. Database connection is configured in `server/db.ts` using the DATABASE_URL environment variable. Schema is automatically synced using `npm run db:push`.

**Rationale**: This hybrid approach (nullable role-specific columns) was chosen over separate tables to simplify queries and reduce joins, as the use cases for farmers and sellers share significant overlap. Drizzle provides compile-time type safety without the overhead of heavier ORMs.

## Application Features

### Registration Form (/)
- **Role Selection**: Users choose between Farmer or Seller roles
- **Personal Information**: Name, phone, email, region (Congo province), optional address
- **Farmer Fields**: Farm size (hectares), crops grown (multi-select), farming experience, average yield
- **Seller Fields**: Business name, business type, products sold (multi-select), monthly volume, years in business
- **Additional Info**: Estimated credit line needed, comments, terms acceptance
- **Validation**: Real-time form validation with Zod schema
- **Success Feedback**: Modal confirmation with form reset after successful submission

### Admin Dashboard (/admin)
- **Statistics Cards**: Total registrations, farmers count, sellers count
- **Search Functionality**: Search across name, email, phone, business name, and region (case-insensitive, trimmed)
- **Region Filter**: Dropdown filter to view registrations from specific Congo provinces
- **Role Tabs**: Filter view by All / Farmers / Sellers
- **Registration Table**: Displays full details including contact info, location, and role-specific data
- **CSV Export**: Download all registration data as properly formatted CSV file with RFC 4180 escaping
- **Responsive Design**: Works seamlessly on mobile and desktop devices

### CSV Export Feature
- **Comprehensive Data**: Exports all fields including role-specific information
- **Proper Escaping**: Handles special characters (quotes, commas, newlines) correctly per RFC 4180
- **Array Formatting**: Crops and products displayed with semicolon separators
- **Download**: Sets proper Content-Type and Content-Disposition headers
- **Filename**: kweza-registrations.csv

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