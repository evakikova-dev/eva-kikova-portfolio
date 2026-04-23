# Eva Kikova - Portfolio Website

## Overview
A modern, responsive portfolio website for Eva Kikova, a UI/UX Designer and Product Designer. The site showcases real projects with detailed case studies, aiming for a professional 2026 aesthetic. It highlights Eva's expertise in UI/UX design, product design, and prompt engineering, built to attract potential clients and employers.

## User Preferences
- Dark mode as default (modern 2026 aesthetic)
- Modern, minimalist design aesthetic
- Blue (#5C63C8) accent color for CTAs and highlights
- Clean typography with generous whitespace
- Mobile-first responsive design
- Professional UI/UX designer portfolio from 2026
- Elegant, structured layout with good spacing and hierarchy
- Clean, minimalist visual style with subtle animations and glow effects
- Glassmorphism and gradient orbs for depth
- Consistent button spacing across all pages
- English language for main content

## System Architecture
The portfolio is built with React, TypeScript, Tailwind CSS, and Express.js, featuring a clean design with a white, very dark grey, and blue (#5C63C8) color palette.

**UI/UX Decisions & Design System:**
- **Theme**: Dark mode as default (`#0a0a0b` background, `#1a1a1b` card background)
- **Primary Color**: Blue `#5C63C8`
- **Typography**: Space Grotesk for headings, Inter for body text
- **Components**: shadcn/ui library
- **Aesthetic**: Modern 2026 design with glassmorphism (backdrop-blur-md, bg-card/80), glow effects (primary color icons with drop-shadow), animated gradient orbs (blur-[128px]), and interactive hover states.
- **Accessibility**: WCAG AAA compliant with prefers-reduced-motion support, enhanced focus states, and improved color contrast.
- **Spacing Standards**: `pt-32` for page top padding, `gap-12 md:gap-16` for grids, `py-20 md:py-32` for section spacing, and `pt-2` above all buttons.

**Technical Implementations:**
- **Frontend**: React with TypeScript, Wouter for routing, TanStack Query for data fetching.
- **Backend**: Express.js with in-memory storage for project and contact data.
- **Animations**: IntersectionObserver for scroll-based fade-ins, smooth transitions (300ms-1000ms), and interactive animations for buttons, icons, and text (e.g., footer wave animation, 3D skill card hover).
- **Loading States**: Skeleton loaders (`ProjectCardSkeleton`, `ProjectDetailSkeleton`) for improved UX during data fetching.
- **Cursor Effects**: Subtle `CursorGlow` component for desktop users.

**Navigation & Branding:**
- **Logo**: Kinetic typography "Eva KIKOVA" with simplified modern design
  - Typography: Mixed case - "Eva" (normal weight, lowercase except E) + "KIKOVA" (bold condensed, all caps)
  - Gradient: Clean blue-to-white (#5C63C8 → #FFFFFF)
  - Kinetic effect: Letter-lift animation on hover (sequential lift with 50ms stagger)
  - Letter spacing expands on hover (0em → 0.02em)
  - NO glassmorphism, glow, or complex effects - clean and minimal

**Feature Specifications:**
- **Pages**: Home (`/`), About (`/about`), Projects (`/projects`), Individual Project Detail (`/projects/:id`), Contact (`/contact`).
- **Home Page**:
    - **Hero Section**: 60/40 layout with professional title, description, "View Projects" CTA, and a puzzle-like Bento Grid of 6 key skills.
    - **About Me Section**: English summary with a "Learn More" button and an info card.
    - **Featured Projects**: Grid display of 4 real projects.
    - **Contact Section**: Left column (60%): Contact form with Resume card below (space-y-6 gap). Right column (40%): Square-shaped Bento Grid with 5 cards (gap-3, auto-rows-80px): Follow Me (2x2 rows with h-6 w-6/24px social icons), Email (2x1 horizontal), Phone & Location (1x1 compact side by side), Response Time (2x1 wide). Resume positioned under form creates balanced square composition with Bento Grid. Subtitle: "Have an idea in mind? I create *beautiful* experiences - let's build one together." IDENTICAL layout on both Home and Contact pages.
- **Contact Form**: Validated fields for name, email, message with toast notifications for submission status.
- **Footer**: Glassmorphism background, motto with interactive wave animation, clickable social links, and copyright.
- **Back to Top Button**: Floating, glassmorphism-styled button appearing after scrolling.

**System Design Choices:**
- Responsive design for optimal viewing across devices.
- Consistent UI elements and spacing throughout the site for a cohesive user experience.
- Emphasis on performance and smooth animations.

## External Dependencies
- **Wouter**: For client-side routing.
- **TanStack Query**: For efficient data fetching and state management.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: Component library for pre-built, accessible UI components.
- **Express.js**: Backend framework for API endpoints.
- **pCloud**: Hosted storage for Eva's CV (linked via "Download CV" button).