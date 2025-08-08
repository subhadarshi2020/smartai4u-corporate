# SmartAI4u Website

Professional AI consulting and training website for SmartAI4u, built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design optimized for global audiences
- Professional AI consulting service showcase
- Contact forms with multiple touchpoints
- Performance optimized for fast loading
- SEO friendly structure
- Accessible design following WCAG guidelines

## Technology Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui components
- **Icons:** Phosphor Icons
- **Build:** Vite
- **Hosting:** Azure Static Web Apps (recommended)

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

See `AZURE_HOSTING_GUIDE.md` for complete step-by-step Azure deployment instructions including:
- GitHub repository setup
- Azure Static Web Apps configuration
- Custom domain (SmartAi4u.com) configuration
- SSL certificate setup
- Email configuration (admin@SmartAi4u.com)
- Performance optimization
- Cost optimization

## Content Structure

- **Hero Section:** Clear value proposition and call-to-action
- **Services:** AI Strategy, Custom Solutions, Training, Global Implementation
- **About:** Company expertise and team credentials
- **Testimonials:** Client success stories
- **Contact:** Multiple contact methods and consultation forms

## Customization

### Colors
The website uses a professional blue and orange color scheme defined in `src/index.css`:
- Primary: Deep Blue (oklch(0.25 0.15 240))
- Accent: Warm Orange (oklch(0.70 0.15 45))

### Content Updates
- Service descriptions: Update in `src/App.tsx`
- Company information: Modify the about section
- Contact details: Update email and contact information
- Testimonials: Replace with real client feedback

### Performance
- Images are optimized for web delivery
- Components are lazy-loaded where appropriate
- CSS is minimized and optimized
- Fonts are preloaded for faster rendering

## SEO Optimization

- Meta tags configured in `index.html`
- Semantic HTML structure
- Fast loading times
- Mobile-responsive design
- Clean URL structure

## Browser Support

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Support

For technical support or customization requests, contact admin@SmartAi4u.com

## License

© 2024 SmartAI4u. All rights reserved.