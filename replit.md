# Whitebrd Co. - Digital Marketing Agency Website

## Overview

This is a full-stack web application for Whitebrd Co., a digital marketing agency specializing in HVAC, plumbing, roofing, and pest control contractors. The application features a modern React frontend with a Node.js/Express backend, PostgreSQL database integration via Drizzle ORM, and comprehensive UI components built with shadcn/ui and Tailwind CSS.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon serverless PostgreSQL
- **Session Storage**: PostgreSQL-based sessions with connect-pg-simple
- **API Design**: RESTful API endpoints for contact forms and newsletter subscriptions

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, message, created_at)
- **Newsletters Table**: Newsletter subscriptions (id, email, created_at) with unique email constraint

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation and mobile-responsive menu
2. **Hero Section**: Landing area with call-to-action buttons and animated elements
3. **Services Section**: Display of marketing services with feature lists
4. **Work Section**: Company beliefs and founder information
5. **Connect Section**: Contact form and newsletter subscription with form validation
6. **Footer**: Company information and navigation links

### Backend Services
1. **Contact Service**: Handles form submissions with validation and database storage
2. **Newsletter Service**: Manages email subscriptions with duplicate prevention
3. **Database Service**: Centralized database connection and query management
4. **Storage Interface**: Abstracted data access layer for future extensibility

### Shared Components
- **Schema Definitions**: Zod schemas for data validation shared between frontend and backend
- **Type Definitions**: TypeScript interfaces for type safety across the application

## Data Flow

1. **User Interaction**: Users interact with forms on the frontend (contact or newsletter)
2. **Form Validation**: Client-side validation using react-hook-form with Zod resolvers
3. **API Request**: Validated data sent to backend REST endpoints
4. **Server Validation**: Backend re-validates data using shared Zod schemas
5. **Database Operation**: Data persisted to PostgreSQL via Drizzle ORM
6. **Response Handling**: Success/error responses with toast notifications
7. **UI Updates**: Form reset and user feedback via toast messages

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: WebSocket-based connection for serverless compatibility
- **Migration**: Drizzle Kit for database schema management

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Deployment Strategy

### Development
- **Environment**: Node.js development server with Vite HMR
- **Database**: Neon development database with environment variable configuration
- **Hot Reload**: Vite middleware integrated with Express for seamless development

### Production
- **Build Process**: 
  1. Vite builds React frontend to `dist/public`
  2. ESBuild bundles Express server to `dist/index.js`
- **Static Assets**: Frontend served as static files from Express
- **Database**: Production Neon database with connection pooling
- **Environment Variables**: DATABASE_URL required for database connection

### Architecture Decisions

1. **Monorepo Structure**: Single repository with shared types and schemas for consistency
2. **Serverless Database**: Neon chosen for easy scaling and minimal maintenance
3. **Type Safety**: End-to-end TypeScript with shared validation schemas
4. **Component Library**: shadcn/ui for consistent, accessible UI components
5. **Form Handling**: react-hook-form with Zod for robust form validation
6. **Animation Strategy**: Framer Motion for professional user experience
7. **Database ORM**: Drizzle chosen for type safety and serverless compatibility

## Changelog
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.