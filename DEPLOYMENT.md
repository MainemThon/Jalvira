# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel account (free tier is sufficient)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` (or the port shown in terminal)

## Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` directory.

## Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N` (first time)
   - Project name: `jalvira` (or your preference)
   - Directory: `./` (press Enter)
   - Override settings: `N`

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration (Automatic Deployments)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Jalvira landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/jalvira.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch triggers a production deployment
   - Pull requests create preview deployments

### Method 3: Manual Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the `dist/` folder
   - Your site will be live instantly!

## Environment Variables

If you need environment variables:

1. **Create `.env` file:**
   ```env
   VITE_API_URL=https://api.jalvira.com
   VITE_CONTACT_EMAIL=contact@jalvira.com
   ```

2. **Add to Vercel:**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add each variable
   - Redeploy

3. **Use in code:**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## Custom Domain

1. **Add domain in Vercel:**
   - Go to Project Settings → Domains
   - Add your domain (e.g., `jalvira.com`)

2. **Update DNS:**
   - Add Vercel's DNS records to your domain provider
   - Vercel will provide the exact records needed

3. **SSL Certificate:**
   - Automatically provisioned by Vercel
   - HTTPS enabled by default

## Performance Optimization

### Already Implemented:
- ✅ Vite's optimized build with code splitting
- ✅ Tree-shaking for minimal bundle size
- ✅ CSS optimization
- ✅ Image lazy loading (if implemented)

### Additional Optimizations:

1. **Enable Compression:**
   Vercel automatically enables gzip/brotli compression

2. **CDN:**
   Vercel Edge Network provides global CDN

3. **Analytics:**
   ```bash
   npm install @vercel/analytics
   ```
   
   Add to `main.jsx`:
   ```javascript
   import { inject } from '@vercel/analytics'
   inject()
   ```

## Monitoring

### Vercel Analytics

Enable in project settings for:
- Page views
- Unique visitors
- Top pages
- Referrers

### Performance Monitoring

```bash
npm install web-vitals
```

## Troubleshooting

### Build Fails

1. **Check Node version:**
   ```bash
   node --version  # Should be 18+
   ```

2. **Clear cache:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Verify build locally:**
   ```bash
   npm run build
   npm run preview
   ```

### Deployment Issues

1. **Vercel CLI not found:**
   ```bash
   npm i -g vercel
   ```

2. **Git authentication:**
   Use SSH keys or personal access tokens

3. **Environment variables:**
   Ensure all required vars are set in Vercel dashboard

### Runtime Errors

1. **Check browser console** for JavaScript errors
2. **Verify API endpoints** if using backend
3. **Check CORS settings** for external APIs

## Post-Deployment Checklist

- [ ] Logo displays correctly
- [ ] All sections render properly
- [ ] Forms submit successfully
- [ ] Links navigate correctly
- [ ] Mobile responsiveness works
- [ ] Animations perform smoothly
- [ ] Contact form integrates with backend (if applicable)
- [ ] Analytics tracking works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active

## Rollback

If something goes wrong:

1. **Via Vercel Dashboard:**
   - Go to Deployments
   - Find working deployment
   - Click "..." → "Promote to Production"

2. **Via CLI:**
   ```bash
   vercel rollback
   ```

## Continuous Integration

### GitHub Actions (Optional)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - run: npm ci
    - run: npm run build
    - run: npm run test (if tests exist)
```

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- GitHub Issues: Create an issue in your repository

## Cost

- **Vercel Free Tier:**
  - Sufficient for most landing pages
  - 100GB bandwidth/month
  - Unlimited deployments
  - Free SSL
  
- **Pro Tier** ($20/month):
  - Advanced analytics
  - More bandwidth
  - Priority support

---

**🎉 Your Jalvira landing page is now ready to deploy!**

Run `npm run dev` locally, then `vercel --prod` to go live.
