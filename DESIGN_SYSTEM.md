# Kinetic Geometry Design System - Quick Reference

## 🎨 Design Tokens Reference

### Color Palette
```css
--background: #FAFAFA     /* Light canvas */
--foreground: #000000     /* Pure black text */
--marea-onyx: #09090B     /* Dark sections */
--accent: #0052FF         /* Electric Blue */
--accent-deep: #0039B3    /* Dark accent */
--muted: #F1F5F9          /* Secondary bg */
```

### Typography Scale
```
Hero Title:      text-7xl / text-8xl (font-display, font-extrabold)
Section Title:   text-5xl / text-6xl (font-display, font-bold)
Body Text:       text-base / text-xl (font-sans, default)
Section Labels:  text-[10px] (font-mono, uppercase, tracking-ultrawide)
```

### Motion System
```css
Tidal Curve:     cubic-bezier(0.16, 1, 0.3, 1)
Enter Duration:  0.8s
Stagger Delay:   0.1s - 0.15s
Hover Scale:     1.02 - 1.05
```

## 📦 Component Usage

### TidalButton
```tsx
import TidalButton from "@/components/TidalButton";

<TidalButton variant="primary" size="large">
  Click Me
</TidalButton>

// Variants: "primary" | "secondary"
// Sizes: "default" | "large"
```

### MonoBadge
```tsx
import MonoBadge from "@/components/MonoBadge";

<MonoBadge showLine={true}>
  Engineering Excellence
</MonoBadge>
```

### TidalWrapper (Animation)
```tsx
import TidalWrapper from "@/components/TidalWrapper";

<TidalWrapper staggerChildren={0.15}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</TidalWrapper>
```

### GeometricBackground
```tsx
import GeometricBackground from "@/components/GeometricBackground";

<section className="relative">
  <GeometricBackground />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</section>
```

## 🎯 Layout Patterns

### High-Contrast Section Rhythm
```tsx
<section className="bg-background">     {/* Light section */}
  {/* Content */}
</section>

<section className="bg-marea-onyx text-white">  {/* Dark section */}
  {/* Content */}
</section>

<section className="bg-muted">         {/* Soft section */}
  {/* Content */}
</section>
```

### Grid Patterns
```tsx
// Two-column responsive
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// Three-column responsive  
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

// Asymmetric 60/40
<div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
  <div className="lg:col-span-3">{/* 60% */}</div>
  <div className="lg:col-span-2">{/* 40% */}</div>
</div>
```

### Card Styles
```tsx
// Flat Card with Border
<div className="bg-muted border-2 border-transparent hover:border-accent p-8">

// Hard Shadow Card
<div className="bg-white border-4 border-foreground shadow-hard p-8">

// Onyx Block
<div className="bg-marea-onyx text-white p-6 border-2 border-accent">
```

## ✨ Utility Classes

### Custom Utilities (in globals.css)
```css
.animate-tidal-enter   /* Tidal entrance animation */
.shadow-hard           /* Hard black shadow */
.shadow-hard-blue      /* Hard blue shadow */
.dot-grid              /* Dot pattern background */
.geometric-blob        /* Abstract blob shape */
```

### Common Patterns
```tsx
// Monospace uppercase label
className="font-mono text-[10px] tracking-ultrawide uppercase"

// Display heading
className="font-display font-bold text-5xl tracking-tight"

// Accent border left
className="border-l-4 border-accent pl-8"

// Hover state with tidal curve
className="transition-all duration-300 ease-tidal hover:scale-105"
```

## 🚀 Page Structure

### Standard Page Template
```tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PageName() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Page content */}
      </main>
      <Footer />
    </>
  );
}
```

## 🎨 Animation Recipes

### Count-Up Metric
```tsx
const [count, setCount] = useState(0);
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

useEffect(() => {
  if (!isInView) return;
  // Animate from 0 to target
}, [isInView]);
```

### Rotating Element
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
>
```

### Floating/Bobbing Element
```tsx
<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
>
```

### Hover Scale with Shadow
```tsx
<motion.div
  whileHover={{
    scale: 1.05,
    boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 1)"
  }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
>
```

## 📱 Responsive Breakpoints

```tsx
className="
  text-base              // Mobile
  md:text-lg             // Tablet (768px+)
  lg:text-xl             // Desktop (1024px+)
"

className="
  grid-cols-1           // Mobile: 1 column
  md:grid-cols-2        // Tablet: 2 columns
  lg:grid-cols-3        // Desktop: 3 columns
"
```

## 🎯 Best Practices

1. **Always use TidalWrapper** for sections with multiple animated elements
2. **Maintain rhythm**: Alternate between light and dark sections
3. **Use MonoBadge** before every major heading for consistency
4. **Hard shadows** only on hover states or key CTAs
5. **Monospace font** for technical details, dates, and metrics
6. **Electric Blue accent** sparingly - for CTAs and highlights only
7. **No middle-ground grays** - use #FAFAFA, #F1F5F9, or #09090B
8. **Spring animations** everywhere - never use linear timing

## 🔧 Common Modifications

### Change Accent Color
Edit `tailwind.config.ts`:
```ts
accent: "#YOUR_COLOR",
"accent-deep": "#YOUR_DARKER_COLOR",
```

### Adjust Animation Speed
```tsx
// Faster
transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}

// Slower
transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
```

### Add New Font
1. Import in `app/layout.tsx`
2. Add to `tailwind.config.ts` fontFamily
3. Use via `font-yourfont` class

---

**Remember**: Rigor in Form, Fluidity in Motion.
