# Logo Integration Guide

## Current Logo

The project currently uses a simplified SVG logo placeholder at `public/jalvira-logo.svg`.

## How to Add Your Actual Logo

### Option 1: PNG Logo (Recommended for complex logos)

1. **Prepare your logo:**
   - Save your Jalvira logo as `jalvira-logo.png`
   - Recommended size: 200x50px or 400x100px (for retina displays)
   - Transparent background (PNG format)

2. **Add to project:**
   ```
   public/jalvira-logo.png
   ```

3. **Update Navbar component:**
   Open `src/components/Navbar.jsx` and change:
   ```jsx
   <img src="/jalvira-logo.svg" alt="Jalvira" className="logo-img" />
   ```
   to:
   ```jsx
   <img src="/jalvira-logo.png" alt="Jalvira" className="logo-img" />
   ```

### Option 2: SVG Logo (Best for scalability)

1. **Convert your logo to SVG:**
   - Use a tool like Adobe Illustrator, Figma, or online converters
   - Optimize the SVG with SVGOMG (https://jakearchibald.github.io/svgomg/)

2. **Replace the placeholder:**
   - Save your SVG as `public/jalvira-logo.svg`
   - This will automatically replace the current placeholder

### Option 3: Inline SVG Component

For maximum control and animation possibilities:

1. **Create a Logo component:**
   ```jsx
   // src/components/Logo.jsx
   const Logo = () => {
     return (
       <svg width="200" height="50" viewBox="0 0 1024 410">
         {/* Your SVG paths here */}
       </svg>
     )
   }
   export default Logo
   ```

2. **Use in Navbar:**
   ```jsx
   import Logo from './Logo'
   
   // Replace the img tag with:
   <Logo />
   ```

## Logo Styling

The logo size is controlled in `src/components/Navbar.css`:

```css
.logo-img {
  height: 40px;  /* Adjust this value */
  width: auto;
}
```

### Responsive Logo Sizes

```css
/* Desktop */
.logo-img {
  height: 40px;
}

/* Tablet */
@media (max-width: 968px) {
  .logo-img {
    height: 35px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .logo-img {
    height: 30px;
  }
}
```

## Logo Based on Current Design

Based on the Jalvira logo you provided (dolphin with pixels), here's how to properly integrate it:

### Specifications:
- **Colors:**
  - Dolphin body: Blue gradient (#3b82f6 to #8b5cf6)
  - Dolphin outline: Red (#ef4444)
  - Pixels: Red squares (#ef4444)
  - Text: White or gradient

### Recommended Format:
- **File:** PNG with transparent background
- **Size:** 400x100px (2x for retina)
- **DPI:** 144 or higher for crisp display

### Export Settings:
- Remove any whitespace/padding
- Center the dolphin and text
- Ensure the red pixels are visible but subtle

## Testing Your Logo

After adding your logo:

1. **Check appearance:**
   - View on different screen sizes
   - Check on both light and dark backgrounds
   - Verify hover animations work smoothly

2. **Performance:**
   - Keep file size under 50KB
   - Use image optimization tools like TinyPNG

3. **Accessibility:**
   - Ensure alt text is descriptive: `alt="Jalvira - ITOps & Cyber Intelligence Platform"`

## Need Help?

If you need assistance with logo integration or have a specific format requirement, consult with your design team or developer.
