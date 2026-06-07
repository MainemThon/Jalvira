# Jalvira Landing Page

Modern, interactive, and playful landing page for Jalvira - Revolutionary ITOps & Cyber Intelligence Convergence Platform.

Built with React + Vite for maximum interactivity and performance.

## ✨ Features

- 🎨 Modern, professional design with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Lightning-fast with Vite
- 🎭 Smooth animations with Framer Motion & GSAP
- 🐬 Playful interactive elements (animated dolphin, pixel effects)
- 🚀 Ready to deploy on Vercel
- ⚛️ Built with React for component reusability

## 🛠 Technology Stack

- **React 19** - Modern UI library
- **Vite 8** - Next-generation build tool
- **Framer Motion** - Production-ready animation library
- **GSAP** - Professional-grade animation
- **React Icons** - Popular icon library
- **CSS3** - Modern styling with custom properties
- **Google Fonts (Inter)** - Clean typography

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🚀 Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗 Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
jalvira-landing/
├── public/
│   └── jalvira-logo.png          # Logo file (add your logo here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar with scroll effects
│   │   ├── Hero.jsx               # Hero section with animated dolphin
│   │   ├── Problem.jsx            # Problem statement section
│   │   ├── Features.jsx           # Features showcase with icons
│   │   ├── Benefits.jsx           # Benefits grid
│   │   ├── WhySection.jsx         # Why Jalvira section
│   │   ├── Pricing.jsx            # Pricing card
│   │   ├── Contact.jsx            # Contact form
│   │   ├── Footer.jsx             # Footer with links
│   │   └── *.css                  # Component styles
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global app styles
│   ├── index.css                  # Base styles
│   └── main.jsx                   # Entry point
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── vercel.json                    # Vercel configuration
└── package.json                   # Dependencies

```

## 🎨 Customization

### Colors

Edit CSS variables in `src/App.css`:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --accent-red: #ef4444;
    --dark-bg: #0f172a;
    --dark-card: #1e293b;
}
```

### Logo

1. Add your logo as `public/jalvira-logo.png`
2. Update `src/components/Navbar.jsx` if you need a different format

### Content

All content can be edited in the respective component files in `src/components/`

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy

### Option 3: Drag & Drop

1. Build the project: `npm run build`
2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `dist` folder

## 🎭 Interactive Features

### Animated Dolphin
- Floating animation using GSAP
- Gradient colors matching brand
- Responsive positioning

### Pixel Effects
- Animated pixels with random opacity/scale
- Playful reference to logo design
- Performance-optimized animations

### Smooth Scrolling
- Animated section transitions
- Scroll-triggered animations with Framer Motion
- Hover effects on cards and buttons

### Form Interactions
- Focus animations
- Smooth submit handling
- Responsive validation

## 🔧 Form Integration

The contact form currently shows an alert. To integrate with a backend:

1. Update `src/components/Contact.jsx`
2. Add your API endpoint
3. Handle form data submission

Example:

```javascript
const handleSubmit = async (e) => {
    e.preventDefault()
    
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    
    // Handle response
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- Vite's instant HMR for fast development
- Optimized production build with code splitting
- Lazy-loaded animations for smooth performance
- CSS-in-JS avoided for better performance
- Minimal bundle size with tree-shaking

## 📄 License

© 2026 Jalvira. All rights reserved.

## 🤝 Support

For support or questions, contact your development team.

---

**Note:** Don't forget to add your `jalvira-logo.png` to the `public/` folder!
