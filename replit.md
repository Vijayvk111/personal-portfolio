# Portfolio Application

## Overview

This is a modern, futuristic-themed portfolio application built with React, Express, and TypeScript. The application features a sleek design with neon colors, animations, and a space-age aesthetic. It serves as a showcase for a developer's skills, projects, and contact information, with a working contact form that stores submissions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom futuristic theme and animations
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: Configured for PostgreSQL sessions (connect-pg-simple)

### Design System
- **Theme**: Futuristic/cyberpunk aesthetic with neon colors
- **Colors**: Neon cyan, electric purple, neon pink, neon green on dark backgrounds
- **Typography**: Orbitron (headers), Rajdhani (subheaders), Inter (body text)
- **Animations**: Custom CSS animations including particles background, typing effects, and hover transitions

## Key Components

### Frontend Components
1. **Navigation**: Responsive navigation with smooth scrolling and mobile menu
2. **Hero Section**: Animated typing effect and glowing buttons
3. **About Section**: Developer introduction with animated statistics
4. **Skills Section**: Animated progress bars for different technologies
5. **Projects Section**: 3D flip cards showcasing projects
6. **Contact Section**: Working contact form with validation and submission
7. **Particles Background**: Animated particle system for visual enhancement

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Routes**: RESTful API endpoints for contact form submissions
3. **Storage Layer**: Abstracted storage interface with in-memory implementation
4. **Schema Definitions**: Shared TypeScript types and Zod validation schemas

### Database Schema
```typescript
// Contact form submissions
contacts {
  id: serial (primary key)
  name: text (required)
  email: text (required)
  subject: text (required)
  message: text (required)
  createdAt: timestamp (auto-generated)
}
```

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data is validated using Zod schema
   - React Query mutation sends POST request to `/api/contact`
   - Backend validates data and stores in PostgreSQL database
   - Success/error response triggers toast notification

2. **Contact Retrieval**:
   - Admin can fetch all contacts via GET `/api/contacts`
   - Data is retrieved from PostgreSQL database and returned as JSON

3. **Frontend Rendering**:
   - Static portfolio content is rendered from components
   - Dynamic animations and interactions are handled by React hooks
   - Responsive design adapts to different screen sizes

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, ReactDOM
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack React Query
- **Forms**: React Hook Form, @hookform/resolvers
- **Routing**: Wouter
- **Icons**: Lucide React, React Icons
- **Animations**: Embla Carousel, particles.js
- **Date Handling**: date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, drizzle-zod
- **Session**: connect-pg-simple
- **Development**: tsx, esbuild

### Development Tools
- **Build**: Vite, TypeScript
- **CSS**: PostCSS, Autoprefixer
- **Development**: Replit plugins for error handling and cartographer

## Deployment Strategy

### Development
- Uses Vite dev server with HMR (Hot Module Replacement)
- Express server runs concurrently with custom middleware
- Environment variables loaded from `.env` file
- Replit-specific optimizations for cloud development

### Production Build
1. **Frontend Build**: `vite build` creates optimized static assets
2. **Backend Build**: `esbuild` bundles server code for Node.js
3. **Static Serving**: Express serves built frontend from `/dist/public`
4. **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Database Migration
- Drizzle migrations configured in `/migrations` directory
- Push schema changes with `npm run db:push`
- Production requires PostgreSQL database provisioning

### Environment Requirements
- **NODE_ENV**: Set to 'production' for optimized builds
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **Port**: Configurable server port (defaults to process.env.PORT)

## Changelog
- July 08, 2025. Initial setup
- July 08, 2025. Renamed portfolio to "Vijay Portfolio" throughout the application
- July 08, 2025. Added PostgreSQL database with Drizzle ORM, migrated from in-memory storage
- July 08, 2025. Updated portfolio focus to AI Engineer/Data Analyst with relevant skills and projects
- July 08, 2025. Updated contact info with real details, revised About section for entry-level position

## User Preferences

Preferred communication style: Simple, everyday language.
Portfolio name: Vijay Portfolio