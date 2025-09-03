# Whitebrd Co. - Digital Marketing Agency Website

A modern, full-featured digital marketing agency website built with React, TypeScript, and Express. Features comprehensive SEO optimization, interactive whiteboard experience, and industry-specific landing pages.

## ✨ Key Features

### 🎨 Interactive Experience
- **Whiteboard Mode**: Toggleable grid background for authentic whiteboard feel
- **Interactive Marker Cursor**: Custom cursor with drawing trails that fade over time
- **Smooth Animations**: Framer Motion powered interactions throughout
- **Custom Typography**: Google Fonts (Permanent Marker + Patrick Hand) for handwritten aesthetic

### 🔍 Enterprise SEO
- **Comprehensive Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data**: Schema.org markup for organization, services, articles, and FAQs
- **XML Sitemap**: Auto-generated sitemap for all pages with proper priorities
- **robots.txt**: Optimized for search engine crawling
- **Rich Snippets**: FAQ and service schemas for enhanced search results
- **Industry-Specific Optimization**: Tailored SEO for each service vertical

### 📱 Content Management
- **Industry Landing Pages**: 13 specialized industry pages (HVAC, Plumbing, Legal, etc.)
- **Blog System**: Full-featured blog with categories, search, and article schema
- **Custom Images**: Industry-specific hero images for each landing page
- **Dynamic Content**: Data-driven pages with comprehensive service information

### 🛠️ Technical Excellence
- **TypeScript**: Full type safety across frontend and backend
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Vite build system with code splitting
- **SEO Component System**: Reusable SEO components with automatic meta management

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite with custom configuration
- **UI Components**: Radix UI, Framer Motion
- **Styling**: Tailwind CSS with custom animations and Google Fonts
- **SEO**: Custom SEO component with structured data
- **Analytics**: Google Analytics 4 ready, Search Console integration
- **Canvas**: HTML5 Canvas for interactive drawing effects

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

## 🎯 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/Jakobthompson15/whitebrd.git
cd whitebrd
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🎨 Interactive Features

### Whiteboard Mode Toggle
Click the whiteboard icon in the bottom-right corner to enable/disable the grid background for an authentic whiteboard experience.

### Marker Cursor Effect
Click the marker icon to enable an interactive cursor that draws fading ink trails as you move around the page. Perfect for demonstrations and presentations!

### Industry Navigation
Explore 13 different industry-specific landing pages, each with custom imagery and tailored content:
- HVAC, Plumbing, Electrical, Roofing
- Landscaping, Pest Control, Cleaning Services
- Dental, Legal, Real Estate
- SaaS, E-commerce, Tours & Excursions

## 📊 SEO Setup

### Google Analytics (Optional)
Replace `YOUR_GA_MEASUREMENT_ID` in `client/index.html` with your Google Analytics 4 tracking ID.

### Search Console (Optional)
Replace `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` in `client/index.html` with your verification code.

### Structured Data
The site automatically includes:
- Organization schema for knowledge panels
- Service schemas for rich snippets
- Article schemas for blog posts
- FAQ schemas for enhanced search results

### Sitemap & Robots
- XML Sitemap: Available at `/sitemap.xml`
- Robots.txt: Available at `/robots.txt`

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

## 📁 Project Structure

```
whitebrd/
├── client/                    # React frontend application
│   ├── src/         
│   │   ├── components/        # UI components
│   │   │   ├── seo.tsx       # SEO component with structured data
│   │   │   ├── marker-cursor.tsx # Interactive cursor effect
│   │   │   └── whiteboard-toggle.tsx # Toggle controls
│   │   ├── pages/            # Page components
│   │   │   ├── home.tsx      # Homepage with organization schema
│   │   │   ├── industries.tsx # Industry landing pages
│   │   │   ├── industry.tsx  # Individual industry pages
│   │   │   └── blog.tsx      # Blog with article schema
│   │   ├── hooks/            # Custom React hooks
│   │   │   └── use-marker-cursor.ts # Cursor state management
│   │   ├── data/             # Static data
│   │   │   ├── industries.ts # Industry page content
│   │   │   └── blog-posts.ts # Blog content
│   │   └── lib/              # Utilities
│   └── public/               # Static assets
│       ├── images/           # Image assets
│       │   ├── industries/   # Industry-specific images
│       │   └── marker.png    # Cursor marker image
│       ├── sitemap.xml       # SEO sitemap
│       └── robots.txt        # Search engine directives
├── server/                   # Express backend
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   └── vite.ts              # Vite integration
├── shared/                  # Shared types and schemas
└── dist/                   # Production build output
```

## 📜 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (frontend + backend)
- `npm run start` - Run production server
- `npm run check` - TypeScript type checking

## 🌟 Key Pages & Routes

- `/` - Homepage with company overview and services
- `/industries` - Industry selection page
- `/industries/[slug]` - Individual industry landing pages
- `/blog` - Blog listing with search and filtering
- `/sitemap.xml` - SEO sitemap
- `/robots.txt` - Search engine directives

## 🎨 Design Features

- **Handwritten Aesthetic**: Permanent Marker for headings, Patrick Hand for body text
- **Whiteboard Theme**: Grid backgrounds and marker elements throughout
- **Interactive Elements**: Hover animations, smooth transitions, drawing effects
- **Mobile Responsive**: Tailored experience across all device sizes
- **Accessibility**: Proper ARIA labels, keyboard navigation, screen reader support

## 🔧 Customization

### Adding New Industries
1. Add industry data to `client/src/data/industries.ts`
2. Add corresponding image to `client/public/images/industries/`
3. Update sitemap.xml with new route

### Modifying SEO
- Edit meta tags in the SEO component (`client/src/components/seo.tsx`)
- Update structured data schemas for different content types
- Customize robots.txt for crawling preferences

### Styling Changes
- Modify Tailwind config in `tailwind.config.ts`
- Update CSS variables in `client/src/index.css`
- Customize component styles while maintaining the whiteboard theme

## 📈 Performance & SEO

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Core Web Vitals**: LCP, FID, CLS optimized
- **SEO Ready**: Comprehensive meta tags, structured data, sitemap
- **Mobile First**: Responsive design with mobile-optimized interactions

## 🚀 Deployment

Configured for deployment on Render, Vercel, or any Node.js hosting platform. The application automatically adapts to production environments with proper port binding and static file serving.

## 📄 License

MIT