# RangeLeap Design System Guidelines

## 1. Brand Identity

### Core Brand Elements
- **Logo**: "RangeLeap" - Use the company name as the primary logo
- **Tagline**: "Turn Ideas Into Brands | China Manufacturing Partner"
- **Brand Voice**: Professional, innovative, reliable, and premium

### Brand Values
- Premium quality and craftsmanship
- Innovation and forward-thinking
- Reliability and transparency
- Global perspective with local expertise

## 2. Color Palette

### Primary Colors
- **Success (Teal)**: `oklch(0.6 0.15 190)` (light mode), `oklch(0.65 0.16 190)` (dark mode)
  - Usage: Primary CTAs, accents, and success states
  - Button hover: `bg-success/90`
- **Primary (Black/White)**: `oklch(0.15 0 0)` (light mode), `oklch(0.95 0 0)` (dark mode)
  - Usage: Text, icons, and default buttons

### Secondary Colors
- **Secondary**: `oklch(0.96 0 0)` (light mode), `oklch(0.22 0 0)` (dark mode)
- **Muted**: `oklch(0.97 0 0)` (light mode), `oklch(0.22 0 0)` (dark mode)
- **Accent**: `oklch(0.55 0.12 200)` (light mode), `oklch(0.65 0.14 200)` (dark mode)
- **Destructive**: `oklch(0.577 0.245 27.325)` (light mode), `oklch(0.396 0.141 25.723)` (dark mode)

### Background & Surface Colors
- **Background**: `oklch(1 0 0)` (light mode), `oklch(0.13 0 0)` (dark mode)
- **Card**: `oklch(0.99 0 0)` (light mode), `oklch(0.16 0 0)` (dark mode)
- **Border**: `oklch(0.92 0 0)` (light mode), `oklch(0.22 0 0)` (dark mode)

### Gradients
- **Text Gradient**: `linear-gradient(135deg, oklch(0.58 0.14 195) 0%, oklch(0.48 0.12 205) 100%)`
  - Usage: Highlight key phrases in headings

## 3. Typography

### Font Family
- **Primary Font**: Inter (sans-serif)
- **Mono Font**: Geist Mono (for code and technical elements)

### Font Sizes & Weights
| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 (Hero) | 5xl-8xl | Bold | 1.05 | Main hero headings |
| H2 | 4xl-6xl | Bold | 1.1 | Section headings |
| H3 | 2xl-3xl | Bold | 1.2 | Sub-section headings |
| H4 | sm | Semibold | 1.3 | Footer and card titles |
| Body | lg-xl | Regular | 1.6 | Main content |
| Small | sm | Regular | 1.4 | Auxiliary text, labels |

### Text Classes
- **Text Balance**: Use `text-balance` for headings
- **Text Pretty**: Use `text-pretty` for paragraphs
- **Text Gradient**: Use `text-gradient` for accent text

## 4. Layout Structure

### Page Layout
- **Header**: Fixed navigation with logo, menu links, and CTA button
- **Main Content**: Full-width sections with centered content
- **Footer**: Multi-column layout with brand info, links, and legal sections
- **Cookie Banner**: Fixed at bottom of page

### Section Structure
1. **Hero Section**: Large heading, subheading, and primary CTA
2. **Trust Signals**: Logos or badges of trusted partners
3. **Services Section**: Card-based service offerings
4. **Process Section**: Step-by-step workflow visualization
5. **CTA Section**: Final call-to-action
6. **Footer**: Company information and links

### Container Sizes
- **Maximum Content Width**: `max-w-7xl` (1280px)
- **Hero Content Width**: `max-w-5xl` (1040px)
- **Padding**: `px-4 sm:px-6 lg:px-8` for all sections

## 5. Component Guidelines

### Navigation
- **Fixed Position**: `fixed top-0 left-0 right-0 z-50`
- **Background**: `bg-background/95 backdrop-blur-md`
- **Border**: `border-b border-border/40`
- **Height**: `h-16 md:h-20`
- **Desktop Menu**: Horizontal links with hover state
- **Mobile Menu**: Collapsible hamburger menu

### Buttons
| Variant | Usage | Classes |
|---------|-------|---------|
| Default | Primary actions | `bg-primary text-primary-foreground hover:bg-primary/90` |
| Success | Key CTAs (Primary) | `bg-success text-white hover:bg-success/90 rounded-lg text-base px-8 h-12 md:h-14 font-semibold shadow-sm` |
| Ghost | Secondary actions | `hover:bg-accent hover:text-accent-foreground` |
| Outline | Tertiary actions | `border bg-background hover:bg-accent` |
| White (On Gradient) | CTA on colored backgrounds | `bg-white text-foreground hover:bg-white/90 rounded-lg text-base px-8 h-12 md:h-14 font-semibold shadow-lg` |

### Cards
- **Base Classes**: `bg-card border-border overflow-hidden`
- **Hover Effect**: `hover:shadow-xl transition-all duration-300`
- **Padding**: `p-8 md:p-12` for content areas
- **Image**: Full-width with `object-cover`

### Badges
- **Style**: `inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30`
- **Text**: `text-sm text-muted-foreground font-medium`

### Lists
- **Bullet Style**: Custom dot - `w-1.5 h-1.5 rounded-full bg-success`
- **Spacing**: `space-y-3` for list items

## 6. Spacing & Grid

### Section Spacing
- **Small Section**: `py-16`
- **Medium Section**: `py-20 md:py-32`
- **Large Section (Hero)**: `pt-24 pb-16 md:pt-32 md:pb-20`

### Component Spacing
- **Button Gap**: `gap-4` for button groups
- **Card Gap**: `space-y-8` for card collections
- **Text Gap**: `space-y-8` for heading + paragraph combinations

### Grid System
- **Base Grid**: Use Tailwind's built-in grid system
- **Responsive Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 7. Visual Elements

### Images
- **Format**: Use high-quality JPG or PNG
- **Placeholder**: `/placeholder.jpg` or `/placeholder.svg`
- **Icon Size**: `h-6 w-6` for standard icons, `h-7 w-7` for feature icons

### Icons
- **Icon Library**: Lucide React
- **Primary Icon Color**: `text-foreground`
- **Accent Icon Color**: `text-success`
- **Muted Icon Color**: `text-muted-foreground`

### Decorative Elements
- **Background Blobs**: Use `bg-success/5 rounded-full blur-3xl` for subtle background accents
- **Animated Elements**: Use `animate-ping` for status indicators

## 8. Interaction Patterns

### Hover States
- **Buttons**: Reduce opacity to 90% - `hover:bg-success/90`
- **Links**: Change color to `text-foreground` - `hover:text-foreground transition-colors`
- **Cards**: Add shadow - `hover:shadow-xl transition-all duration-300`

### Transitions
- **Duration**: `transition-all duration-300` for smooth animations
- **Easing**: Use Tailwind's default easing (ease-in-out)

### Loading States
- **Spinner**: Use the `Spinner` component from `@/components/ui/spinner`
- **Button Loading**: Show spinner with text change

## 9. Accessibility

### WCAG Compliance
- **Level**: Aim for WCAG 2.1 AA compliance
- **Color Contrast**: Ensure minimum 4.5:1 contrast for text
- **Keyboard Navigation**: All interactive elements must be keyboard accessible

### Semantic HTML
- Use appropriate heading levels (`h1`-`h6`)
- Use semantic elements (`header`, `nav`, `section`, `footer`)
- Add proper `alt` text for images

### ARIA Attributes
- Use ARIA labels for non-descriptive interactive elements
- Ensure screen reader compatibility for all components

## 10. Implementation Notes

### Component Structure
- **File Organization**: Use the existing component structure
- **Naming Convention**: PascalCase for components, kebab-case for files
- **Imports**: Use absolute imports with `@/` alias

### Styling
- **CSS Approach**: Tailwind CSS with custom variables
- **Custom Classes**: Add to `globals.css` for reusable styles
- **Utility First**: Prefer Tailwind utilities over custom CSS

### Performance
- **Image Optimization**: Use appropriate image sizes and formats
- **Code Splitting**: Implement lazy loading for heavy components
- **Bundle Size**: Keep third-party dependencies minimal

### Testing
- **Responsive Testing**: Test across all breakpoints
- **Browser Compatibility**: Ensure support for modern browsers
- **Dark Mode**: Verify all components work in both light and dark modes

## 11. Example Component Usage

### Hero Section
```tsx
<section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="max-w-5xl mx-auto text-center">
    <div className="space-y-8">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
        </span>
        <span className="text-sm text-muted-foreground font-medium">Turn idea into brands, sell globally</span>
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05] px-4">
        {"Be the next "}
        <span className="text-gradient">big thing</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed px-4">
        {"We're your premium supply chain partner in China, helping founders bring exceptional products to market—from rapid prototyping to global export."}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button
          size="lg"
          className="bg-success text-white hover:bg-success/90 rounded-lg text-base px-8 h-12 md:h-14 font-semibold shadow-sm"
        >
          Get in touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>

  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-success/5 rounded-full blur-3xl -z-10"></div>
</section>
```

### CTA Section
```tsx
<section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
  <div className="max-w-4xl mx-auto">
    <div className="relative overflow-hidden bg-gradient-accent rounded-3xl p-12 md:p-16 lg:p-20 text-center">
      <div className="relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-white">
          {"Ready to build something "}
          <span className="block">amazing?</span>
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
          {"Schedule a free consultation with our team. We'll discuss your project and provide a detailed roadmap and quote within 24 hours."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 rounded-lg text-base px-8 h-12 md:h-14 font-semibold shadow-lg"
          >
            Get in touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  </div>
</section>
```

### Service Card
```tsx
<Card className="p-0 bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300">
  <div className="grid lg:grid-cols-2 gap-0">
    {/* Content */}
    <div className="p-8 md:p-12 flex flex-col justify-center">
      <div className="space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center">
          <Icon className="h-7 w-7 text-success" />
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Service Title</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">Service description goes here.</p>
        </div>

        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-base text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Button size="lg" className="bg-success text-white hover:bg-success/90 rounded-lg text-base px-8 h-12 md:h-14 font-semibold shadow-sm">
            Get in touch
          </Button>
        </div>
      </div>
    </div>

    {/* Image */}
    <div className="relative h-[300px] lg:h-full">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  </div>
</Card>
```

## 12. Design System Maintenance

### Adding New Components
1. Follow the existing component structure in `/components`
2. Use the same naming conventions and patterns
3. Add new components to the appropriate subdirectory
4. Update these guidelines if new patterns emerge

### Updating the Design System
1. Document all changes to the design system
2. Communicate changes to the development team
3. Update existing components to reflect new guidelines
4. Test changes across all breakpoints and modes

### Version Control
- **Version**: 1.0 (based on rl-v0-teal)
- **Last Updated**: January 21, 2026
- **Maintainer**: Development Team

By following these guidelines, you'll ensure that all new pages and components maintain the consistent, premium look and feel of the RangeLeap brand.
