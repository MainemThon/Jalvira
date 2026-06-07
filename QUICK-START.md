# ⚡ Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: `http://localhost:5173` (or port shown in terminal)

---

## 📝 Essential Commands

```bash
# Development
npm run dev              # Start dev server with hot reload

# Build
npm run build            # Create production build
npm run preview          # Preview production build locally

# Deploy
npm run deploy           # Deploy to Vercel (production)
npm run deploy:preview   # Deploy preview to Vercel

# Lint
npm run lint             # Check code quality
```

---

## 🎨 First Customizations

### 1. Add Your Logo
```bash
# Place your logo here:
public/jalvira-logo.png
```

### 2. Change Colors
Edit `src/App.css`:
```css
:root {
  --primary-color: #3b82f6;    /* Change this */
  --secondary-color: #8b5cf6;  /* And this */
  --accent-red: #ef4444;        /* And this */
}
```

### 3. Update Content
Edit component files in `src/components/`:
- Hero text: `Hero.jsx`
- Features: `Features.jsx`
- Pricing: `Pricing.jsx`
- Contact: `Contact.jsx`

---

## 🌐 Deploy to Vercel

### Method 1: CLI (Fastest)
```bash
npm i -g vercel
vercel login
npm run deploy
```

### Method 2: GitHub
1. Push to GitHub
2. Connect repo on vercel.com
3. Auto-deploy on push

### Method 3: Drag & Drop
1. `npm run build`
2. Upload `dist/` folder to vercel.com

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Vite will automatically try the next port
# Or manually specify: vite --port 3000
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Vercel Deploy Fails
```bash
vercel --debug
# Check output for specific errors
```

---

## 📚 Documentation

- **README.md** - Full project overview
- **DEPLOYMENT.md** - Detailed deployment guide
- **ANIMATION-GUIDE.md** - Customize animations
- **LOGO-GUIDE.md** - Logo integration help
- **PROJECT-SUMMARY.md** - Complete project details

---

## ✅ Pre-Deployment Checklist

- [ ] Logo added
- [ ] Content reviewed
- [ ] Colors customized (if needed)
- [ ] Test on mobile
- [ ] Build succeeds: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] Forms tested

---

## 🆘 Quick Help

**Server won't start?**
```bash
npm install
npm run dev
```

**Can't find command?**
```bash
npm install
# Make sure you're in project directory
```

**Build failed?**
```bash
node --version  # Must be 18+
npm ci
npm run build
```

---

## 🎯 Project Structure

```
jalvira-landing/
├── public/          # Static files (logo, images)
├── src/
│   ├── components/  # React components
│   ├── App.jsx      # Main app
│   └── main.jsx     # Entry point
└── package.json     # Dependencies
```

---

## 💡 Tips

1. **Hot Reload:** Edit any file, see changes instantly
2. **Components:** Each section is in `src/components/`
3. **Styles:** Each component has its own CSS file
4. **Icons:** Using React Icons - import from `react-icons/fa`
5. **Animations:** Framer Motion & GSAP - see ANIMATION-GUIDE.md

---

## 🚀 Ready to Go!

Run `npm run dev` and start building your amazing landing page!

**Development:** `http://localhost:5173`
**Documentation:** Check the `*.md` files
**Support:** Read the guides or check the code comments

**Happy coding! 🐬**
