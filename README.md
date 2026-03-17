# Marea Proto | Kinetic Geometry Design System

A boutique software agency website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Implementing the "Kinetic Geometry" design language—a hybrid of bold flat color-blocking and fluid tidal motion.

## 🎨 Design Philosophy: Kinetic Geometry

**Core Principle**: Rigor in Form, Fluidity in Motion

This design system rejects static flat design in favor of:
- **Onyx Pillar Contrast**: Pure #09090B backgrounds with electric blue accents
- **Tidal Staggering**: Spring physics animations with cubic-bezier(0.16, 1, 0.3, 1)
- **Geometric Textures**: Abstract engineering graphics with dot grids and rotating blobs
- **Typography Authority**: Outfit (display), Inter (body), JetBrains Mono (technical)

## 🚀 Tech Stack

- **Framework**: Next.js 15.1.3 (App Router)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 11.0
- **Icons**: Lucide React 0.460
- **Fonts**: Google Fonts (Outfit, Inter, JetBrains Mono)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`.

## 🏗️ Project Structure

```
marea-proto/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── globals.css         # Global styles and Tailwind utilities
│   ├── page.tsx            # Index page
│   ├── projects/
│   │   └── page.tsx        # Projects/Case Studies page
│   └── reviews/
│       └── page.tsx        # Client Reviews page
├── components/
│   ├── Navigation.tsx      # Main navigation header
│   ├── Footer.tsx          # Site footer
│   ├── TidalButton.tsx     # Signature button component
│   ├── MonoBadge.tsx       # Section label component
│   ├── TidalWrapper.tsx    # Staggered animation wrapper
│   ├── GeometricBackground.tsx  # Abstract background graphics
│   └── sections/
│       ├── HeroSection.tsx      # Homepage hero
│       ├── StatsSection.tsx     # Animated metrics
│       └── ServicesSection.tsx  # Services grid
├── tailwind.config.ts      # Tailwind configuration with design tokens
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `background` | #FAFAFA | Primary light canvas |
| `foreground` | #000000 | Primary text |
| `marea-onyx` | #09090B | Inverted sections, headers |
| `accent` | #0052FF | Electric Blue - CTAs, highlights |
| `accent-deep` | #0039B3 | Hover states |
| `muted` | #F1F5F9 | Secondary backgrounds |

### Typography

- **Display**: Outfit (Geometric, bold, modern)
- **Body/UI**: Inter (Industry standard for clarity)
- **Technical**: JetBrains Mono (Section labels, dates, metrics)

### Motion

- **Tidal Curve**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Stagger Delay**: 0.1s - 0.15s between elements
- **Spring Duration**: 0.8s for enter animations

## 📄 Pages

### 1. Index (/)
- **Hero Section**: Asymmetric 60/40 grid with rotating rings and floating cards
- **Stats Section**: Animated metrics with count-up effects
- **Services Section**: Kinetic grid cards with hover state transitions

### 2. Projects (/projects)
- Large-format case study cards
- Technical specs in monospace font
- Metrics and stack information
- Hard shadow hover effects

### 3. Reviews (/reviews)
- Masonry grid layout
- Verified testimonials with timestamps
- 8px blue accent border
- Hash verification system

## 🎯 Key Components

### TidalButton
Signature button with hard shadow on hover:
```tsx
<TidalButton variant="primary" size="large">
  View Our Work
</TidalButton>
```

### MonoBadge
Section labels with animated line:
```tsx
<MonoBadge>Engineering Excellence</MonoBadge>
```

### TidalWrapper
Staggered animation container:
```tsx
<TidalWrapper staggerChildren={0.15}>
  {/* Children animate sequentially */}
</TidalWrapper>
```

### GeometricBackground
Abstract engineering graphics:
- Dot grid pattern (3% opacity)
- Rotating geometric blobs
- Pulse node indicator

## 🔧 Customization

### Modify Design Tokens
Edit `tailwind.config.ts` to adjust colors, fonts, and animations.

### Add New Sections
Create components in `components/sections/` and import into page files.

### Animation Timing
Adjust the tidal curve in `tailwind.config.ts`:
```ts
transitionTimingFunction: {
  "tidal": "cubic-bezier(0.16, 1, 0.3, 1)",
}
```

## 🌟 Features

- ✅ Fully responsive design
- ✅ Type-safe TypeScript throughout
- ✅ Optimized for performance (Next.js 15 App Router)
- ✅ Spring physics animations
- ✅ SEO-friendly metadata
- ✅ Accessible navigation and components
- ✅ Dark/Light section rhythm
- ✅ Hard shadow UI elements
- ✅ Verified review system

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are built mobile-first with Tailwind's responsive utilities.

## 🚢 Deployment

This project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel

# Or connect via GitHub integration
# Push to main branch for automatic deployment
```

## 📝 License

© 2026 Marea. All rights reserved.

---

**Built with Engineering Excellence from Mendoza** 🏔️
