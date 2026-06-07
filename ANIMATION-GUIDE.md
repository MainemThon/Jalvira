# Animation Guide

This guide explains all the interactive and playful animations in the Jalvira landing page.

## Animation Libraries Used

- **Framer Motion** - Declarative React animations
- **GSAP** - Professional-grade animations for complex sequences
- **CSS Animations** - Lightweight effects and transitions

## Hero Section Animations

### Animated Dolphin

Located in `src/components/Hero.jsx`:

```javascript
// Dolphin floating animation
gsap.to(dolphinRef.current, {
  y: -15,              // Float up 15px
  duration: 2,         // 2 seconds
  repeat: -1,          // Infinite loop
  yoyo: true,          // Reverse direction
  ease: 'power1.inOut' // Smooth easing
})
```

**Customize:**
- Change `y` value for different float height
- Adjust `duration` for speed
- Modify `ease` for animation feel

### Pixel Effects

Animated red pixels that reference the logo design:

```javascript
// Individual pixel animations
gsap.to(pixel, {
  opacity: Math.random(),           // Random opacity
  scale: Math.random() * 0.5 + 0.5, // Random scale (0.5-1.0)
  duration: Math.random() * 2 + 1,  // Random duration (1-3s)
  repeat: -1,                        // Loop forever
  yoyo: true,                        // Reverse
  delay: index * 0.1                 // Stagger effect
})
```

**Customize:**
- Change number of pixels in array `[...Array(12)]`
- Adjust position in `style` prop
- Modify color in CSS `.pixel` class

## Component Entrance Animations

### Framer Motion Fade-In

Used throughout all sections:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**Parameters:**
- `opacity: 0` → `1` - Fade in
- `y: 30` → `0` - Slide up 30px
- `duration: 0.6` - Animation time

### Scroll-Triggered Animations

Using `useInView` hook:

```jsx
const ref = useRef(null)
const isInView = useInView(ref, { 
  once: true,        // Animate only once
  margin: "-100px"   // Trigger 100px before visible
})
```

**Customize:**
- Set `once: false` to animate every time
- Adjust `margin` for earlier/later trigger

## Interactive Hover Effects

### Card Hover

```jsx
<motion.div
  whileHover={{ 
    y: -10,                                    // Lift up
    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)' 
  }}
>
```

### Button Hover

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}  // Grow 5%
  whileTap={{ scale: 0.95 }}    // Shrink on click
>
```

**Customize:**
- Change `scale` values
- Add rotation: `rotate: 5`
- Add color changes in CSS

## Staggered Animations

For lists and grids:

```jsx
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6,
      delay: index * 0.2  // Stagger by 0.2s each
    }}
  >
))}
```

## Continuous Animations

### Pulse Ring (Why Section)

```jsx
<motion.div
  animate={{ 
    scale: [0.8, 1.2],   // Scale from 0.8 to 1.2
    opacity: [1, 0]      // Fade from 1 to 0
  }}
  transition={{
    duration: 2,
    repeat: Infinity,    // Loop forever
    ease: "easeOut"
  }}
/>
```

### Rotating Shield

```jsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear"      // Constant speed
  }}
/>
```

## Form Animations

### Input Focus

```jsx
<motion.input
  whileFocus={{ 
    scale: 1.02,
    borderColor: 'var(--primary-color)'
  }}
/>
```

### Button Submit

```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  type="submit"
/>
```

## Performance Optimization

### Best Practices

1. **Use CSS for simple animations:**
   ```css
   .element {
     transition: transform 0.3s ease;
   }
   .element:hover {
     transform: translateY(-5px);
   }
   ```

2. **Limit simultaneous animations:**
   - Max 3-4 complex animations at once
   - Use `will-change` sparingly

3. **Optimize GSAP:**
   ```javascript
   // Good - animates transform (GPU accelerated)
   gsap.to(element, { y: 100 })
   
   // Avoid - animates position (CPU intensive)
   gsap.to(element, { top: '100px' })
   ```

### Performance Monitoring

Check animation performance:

```javascript
// In DevTools
Performance → Record → Perform actions → Analyze
```

Look for:
- 60fps (16.67ms per frame)
- Low CPU usage
- No layout thrashing

## Customizing Animations

### Speed

Global animation speed modifier:

```javascript
// Faster animations (multiply by 0.5)
transition={{ duration: 0.3 }}

// Slower animations (multiply by 2)
transition={{ duration: 1.2 }}
```

### Easing

Different animation feels:

```javascript
// Smooth ease
ease: "easeInOut"

// Bouncy
ease: "anticipate"

// Spring physics
type: "spring"
stiffness: 100
damping: 10
```

### Disable Animations

For accessibility or performance:

```javascript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Disable in components
animate={!prefersReducedMotion ? { opacity: 1 } : {}}
```

## Advanced Techniques

### Sequential Animations

```javascript
const controls = useAnimation()

useEffect(() => {
  const sequence = async () => {
    await controls.start({ opacity: 1 })
    await controls.start({ y: 0 })
    await controls.start({ scale: 1.2 })
  }
  sequence()
}, [])
```

### Gesture Animations

```jsx
<motion.div
  drag                      // Enable dragging
  dragConstraints={{ 
    left: -100, 
    right: 100 
  }}
  whileDrag={{ scale: 1.1 }}
/>
```

### Scroll-Linked Animations

```javascript
import { useScroll, useTransform } from 'framer-motion'

const { scrollYProgress } = useScroll()
const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
```

## Animation Timeline

Page load sequence:

1. **0ms** - Navbar slides down
2. **200ms** - Hero badge fades in
3. **300ms** - Hero title fades in
4. **400ms** - Hero subtitle fades in
5. **500ms** - Hero buttons fade in
6. **700ms** - Stats fade in (staggered)
7. **Scroll** - Sections animate on scroll

## Troubleshooting

### Animations Not Working

1. **Check imports:**
   ```javascript
   import { motion } from 'framer-motion'
   ```

2. **Verify Framer Motion installed:**
   ```bash
   npm install framer-motion
   ```

3. **Check browser support:**
   - Most animations need modern browsers
   - Test in Chrome/Firefox/Safari latest

### Performance Issues

1. **Reduce simultaneous animations**
2. **Use `will-change` CSS property**
3. **Disable on low-end devices:**
   ```javascript
   const isLowEnd = navigator.hardwareConcurrency < 4
   ```

### Animations Too Fast/Slow

Adjust global timing:

```javascript
// src/App.css
:root {
  --animation-speed: 1; /* Multiplier */
}

// In components
duration: 0.6 * var(--animation-speed)
```

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

---

**💫 Experiment and have fun with animations! Make Jalvira truly interactive and playful.**
