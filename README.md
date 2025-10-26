# Portfolio Website

A modern, dynamic Next.js portfolio website with internationalization (i18n) support and admin panel capabilities.

## Features

- 🌍 **Internationalization**: Support for multiple languages (English/French)
- 📱 **Responsive Design**: Fully responsive with Tailwind CSS
- 🚀 **Modern Stack**: Built with Next.js 15, TypeScript, and App Router
- 🎨 **UI Components**: Custom UI components with consistent design
- 📝 **Dynamic Content**: API routes for managing projects and portfolio data
- 🔍 **SEO Optimized**: Server-side rendering and meta tags
- 📊 **Admin Ready**: API endpoints for content management

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **UI Components**: Custom components with Tailwind
- **Icons**: Lucide React

## Project Structure

```
portfolio/
├── app/
│   ├── _components/          # Page-specific components
│   ├── [lang]/              # i18n dynamic routes
│   │   ├── (main)/          # Main pages (home, about)
│   │   ├── projects/        # Project pages
│   │   │   └── [slug]/      # Dynamic project pages
│   │   ├── layout.tsx       # Root layout
│   │   └── not-found.tsx    # 404 page
│   └── api/                 # API routes
│       └── projects/        # Project management APIs
├── components/              # Reusable UI components
│   ├── ui/                 # Base UI components
│   └── icons/              # SVG icon components
├── content/                # Static content (MDX files)
├── hooks/                  # Custom React hooks
├── i18n/                   # Translation files
├── lib/                    # Utilities and configurations
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Visit the application**
   - English: http://localhost:3000/en
   - French: http://localhost:3000/fr

## API Endpoints

### Projects API

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `GET /api/projects/[id]` - Get project by ID
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

## Development

### Adding New Languages

1. Add the locale to `lib/i18n.ts`
2. Create a new translation file in `i18n/`
3. Update the middleware configuration

### Creating New Pages

Pages should be created inside the `app/[lang]/` directory to support internationalization.

### Adding New API Routes

Create new API routes in the `app/api/` directory following RESTful conventions.

## Deployment

The application can be deployed on any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Self-hosted**

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
# DATABASE_URL=your_database_url
# NEXTAUTH_SECRET=your_secret_key
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
