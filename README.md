# Whitebrd - Professional Services Website

A modern, responsive website for Whitebrd professional services built with React, TypeScript, and Express.

## Features

- Modern, responsive design with smooth animations
- Service showcases with video backgrounds
- Contact form integration
- Mobile-optimized navigation
- Dark mode support
- Fast performance with Vite

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite
- **UI Components**: Radix UI, Framer Motion
- **Styling**: Tailwind CSS with custom animations

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Jakobthompson15/whitebrd.git
cd whitebrd
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Building for Production

Build the application:

```bash
npm run build
```

This creates optimized production builds:
- Frontend assets in `dist/public/`
- Server bundle in `dist/`

## Production Deployment

### Running Locally in Production Mode

```bash
npm run start
```

### Deploying to Render

This project is configured for deployment on Render with automatic deploys from GitHub.

1. Connect your GitHub repository to Render
2. Configure the following settings:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start`
   - **Environment Variables**: Set `NODE_ENV=production`

The server automatically binds to `0.0.0.0` in production mode for compatibility with Render and other cloud platforms.

### Environment Variables

- `PORT`: Server port (default: 5000, Render provides 10000)
- `NODE_ENV`: Set to `production` for production deployments

## Project Structure

```
whitebrd/
├── client/           # React frontend application
│   ├── src/         
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities
│   └── public/           # Static assets
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API routes
│   └── vite.ts       # Vite integration
├── shared/           # Shared types and schemas
└── dist/            # Production build output
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production server
- `npm run check` - TypeScript type checking

## License

MIT