# Design Guidelines: Modern Portfolio Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from leading portfolio platforms like Dribbble, Behance, and contemporary designer portfolios (awwwards.com winners). Focus on work-first presentation with bold typography and strategic use of the specified color palette.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (Default):
- Background: `222 15% 8%` (Very Dark Grey - almost black)
- Surface: `222 12% 12%` (Dark Grey - cards/sections)
- Primary: `270 60% 45%` (Dark Purple - CTAs, links, accents)
- Primary Hover: `270 65% 55%` (Lighter Purple)
- Text Primary: `0 0% 98%` (Off-white)
- Text Secondary: `0 0% 70%` (Medium grey)
- Border: `222 10% 18%` (Subtle borders)

**Light Mode**:
- Background: `0 0% 100%` (Pure white)
- Surface: `0 0% 97%` (Light grey)
- Primary: `270 70% 35%` (Vibrant dark purple)
- Text Primary: `222 15% 8%` (Very dark grey)
- Text Secondary: `0 0% 35%`

### B. Typography

**Font Stack**:
- Headings: 'Space Grotesk' (Google Fonts) - modern, geometric sans-serif
- Body: 'Inter' (Google Fonts) - excellent readability

**Type Scale**:
- Hero Title: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- Section Heading: text-4xl md:text-5xl, font-bold
- Project Title: text-2xl md:text-3xl, font-semibold
- Body: text-base md:text-lg, font-normal, leading-relaxed
- Caption: text-sm, text-secondary

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 consistently throughout (e.g., p-8, gap-6, mb-12)

**Container Strategy**:
- Max width: max-w-7xl for content sections
- Section padding: py-20 md:py-32 (generous vertical rhythm)
- Grid columns: grid-cols-1 md:grid-cols-2 for projects
- Mobile spacing: Reduce to py-12 on mobile

### D. Component Library

**Navigation**:
- Fixed header with blur backdrop (backdrop-blur-lg bg-background/80)
- Logo left, navigation links center/right
- Smooth underline animation on hover for nav links
- Mobile: Hamburger menu with full-screen overlay

**Project Cards**:
- Large thumbnail images (aspect-ratio-16/9)
- Overlay gradient on hover revealing project details
- Title, tech stack tags, brief description
- Subtle scale transform on hover (hover:scale-[1.02])

**Hero Section (Home)**:
- Split layout: Left side - bold typography introduction, Right side - Featured project preview or professional headshot
- Large display name with purple gradient text effect
- Subtitle describing expertise/role
- Primary CTA button "View Projects" + Secondary "Contact Me"

**About Section**:
- Two-column layout (desktop): Photo on left, bio on right
- Skills grid showcasing technical abilities with icons from Heroicons
- Timeline or highlight cards for experience/education

**Project Detail Pages**:
- Full-width hero with project banner image
- Project metadata bar (Role, Duration, Tools, Client if applicable)
- Figma iframe embed sections with clean 16:9 aspect ratio containers
- "Next Project" navigation at bottom

**Contact Form**:
- Clean, centered form (max-w-2xl)
- Input fields: Name, Email, Message (textarea)
- Styled inputs with focus rings in purple
- Submit button with loading state
- Success/error message toast notifications

**Footer**:
- Social media links (GitHub, LinkedIn, Dribbble, etc.) with Heroicons
- Copyright notice
- Quick navigation links
- Optional newsletter signup

### E. Interaction & Animation

Use animations very sparingly:
- Smooth page transitions (fade-in content on route change)
- Subtle hover effects on cards (scale, overlay reveal)
- Focus states for accessibility (ring-2 ring-primary)
- Scroll-triggered fade-ins for project cards (intersection observer)

**No complex scroll animations or parallax effects** - keep performance optimal.

## Images

### Hero Section
**Large hero image**: Yes - Professional headshot or workspace photo
- Position: Right side of split hero layout on desktop, above text on mobile
- Treatment: Subtle purple tint overlay or border-l-4 border-primary accent
- Size: aspect-square on mobile, aspect-[4/5] on desktop

### Project Thumbnails
- 4 high-quality project screenshots (one per project)
- Consistent aspect ratio: 16:9
- Position: Featured on home page (2x2 grid), full project page on Projects

### About Page
- Professional headshot: aspect-square, rounded-2xl
- Position: Left column on desktop

### Project Detail Pages
- Multiple project images embedded via Figma iframes
- Full-width banner image for each project hero

All images should have purple-tinted overlays on hover for brand consistency.

## Key Design Principles

1. **Work-First Philosophy**: Projects are the hero - make them immediately visible and engaging
2. **Bold Typography**: Large, confident headings with generous whitespace
3. **Purple Accent Discipline**: Use dark purple strategically for CTAs, links, and key highlights only
4. **Performance**: Fast load times, optimized images, minimal animations
5. **Accessibility**: WCAG AA contrast ratios, keyboard navigation, focus states

## Page-Specific Notes

**Home**: Feature 4 projects in grid immediately below hero (no need to scroll for portfolio)

**Projects Page**: Filterable/sortable grid if implementing categories, otherwise clean 2-column grid

**Individual Project Pages**: Case study narrative flow - problem → solution → results with Figma embeds

**Contact**: Form + alternative contact methods (email, social links) in side-by-side layout on desktop