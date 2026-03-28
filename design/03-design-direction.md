# Design Direction — michaljackowski.com

## 1. Design Philosophy

### Core Principles

| Principle | Expression |
|-----------|------------|
| **Authority** | Clean, confident layouts that convey expertise |
| **Clarity** | Information hierarchy that guides without overwhelming |
| **Restraint** | Premium feel through what is *not* shown |
| **Accessibility** | Readable, navigable, inclusive |
| **Timelessness** | Classic design that ages well |

### Translating AnyLawyer to Personal Profile

AnyLawyer is a **product website** — it sells software.
michaljackowski.com is a **personal authority site** — it presents expertise.

| AnyLawyer Element | Personal Site Adaptation |
|-------------------|--------------------------|
| Product screenshots | Professional photography, publication covers |
| Feature cards | Role/affiliation cards |
| Metrics ("100,000+") | Credentials, affiliations list |
| Comparison tables | Not applicable — remove |
| CTA buttons ("Try now") | Softer CTAs ("Learn more", "Get in touch") |
| Demo booking | Speaking/contact inquiry |
| FAQ accordion | Could use for "Areas of expertise" |

### Visual Identity Statement

> A scholarly presence with modern LegalTech sensibility — authoritative but approachable, international but rooted, accomplished but understated.

---

## 2. Typography System

### Font Selection

**Primary recommendation: Inter + Source Serif Pro**

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | Inter | 600 (Semibold) | H1, H2, navigation |
| Subheadings | Inter | 500 (Medium) | H3, H4, labels |
| Body | Inter | 400 (Regular) | Paragraphs, lists |
| Accent/Quotes | Source Serif Pro | 400 (Regular) | Pull quotes, emphasis |

**Alternative option: Söhne / Söhne Breit** (if licensing allows — premium feel)

**Fallback system fonts:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale

Based on 1.25 ratio (Major Third) for harmony:

| Element | Size (Desktop) | Size (Mobile) | Line Height | Weight |
|---------|----------------|---------------|-------------|--------|
| H1 | 48px / 3rem | 36px / 2.25rem | 1.1 | 600 |
| H2 | 36px / 2.25rem | 28px / 1.75rem | 1.2 | 600 |
| H3 | 24px / 1.5rem | 20px / 1.25rem | 1.3 | 500 |
| H4 | 18px / 1.125rem | 16px / 1rem | 1.4 | 500 |
| Body | 16px / 1rem | 16px / 1rem | 1.6 | 400 |
| Small | 14px / 0.875rem | 14px / 0.875rem | 1.5 | 400 |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 1.4 | 400 |

### Typography Rules

1. **Maximum line length:** 65-75 characters for readability
2. **Paragraph spacing:** 1.5em between paragraphs
3. **Heading spacing:** 2em above, 0.5em below
4. **No orphans:** Prevent single words on last line (CSS `text-wrap: balance`)
5. **Letter spacing:** Slight tracking on all-caps labels (+0.05em)

---

## 3. Color Palette

### Primary Palette (Inspired by AnyLawyer)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  PRIMARY                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │   Navy       │  │   Slate      │  │   White      │                  │
│  │   #1a2b4a    │  │   #64748b    │  │   #ffffff    │                  │
│  │   (Text,     │  │   (Secondary │  │   (Background│                  │
│  │    Headers)  │  │    text)     │  │    Primary)  │                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  ACCENT                                                                 │
│  ┌──────────────┐  ┌──────────────┐                                    │
│  │   Blue       │  │   Light Blue │                                    │
│  │   #2563eb    │  │   #3b82f6    │                                    │
│  │   (Links,    │  │   (Hover,    │                                    │
│  │    CTAs)     │  │    Active)   │                                    │
│  └──────────────┘  └──────────────┘                                    │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  NEUTRALS                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │   Gray 50    │  │   Gray 100   │  │   Gray 200   │  │  Gray 800  │  │
│  │   #f8fafc    │  │   #f1f5f9    │  │   #e2e8f0    │  │  #1e293b   │  │
│  │   (Background│  │   (Cards,    │  │   (Borders,  │  │  (Footer   │  │
│  │    subtle)   │  │    sections) │  │    dividers) │  │   bg)      │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Color Usage Rules

| Element | Color | Notes |
|---------|-------|-------|
| Body text | Navy #1a2b4a | High contrast on white |
| Secondary text | Slate #64748b | Dates, captions, meta |
| Links | Blue #2563eb | Underline on hover |
| Link hover | Light Blue #3b82f6 | Slight lift |
| Primary buttons | Blue #2563eb | White text |
| Secondary buttons | White | Navy border, navy text |
| Section backgrounds | Alternating white / Gray 50 | Creates rhythm |
| Cards | White | Subtle shadow or border |
| Footer | Gray 800 #1e293b | White/light text |

### Accessibility

- All text combinations meet WCAG AA contrast requirements
- Primary navy on white: 12.6:1 (AAA)
- Slate on white: 4.5:1 (AA)
- Blue on white: 4.5:1 (AA)

---

## 4. Layout System

### Grid

**12-column grid** with responsive breakpoints:

| Breakpoint | Name | Columns | Gutter | Margin |
|------------|------|---------|--------|--------|
| 0-639px | Mobile | 4 | 16px | 16px |
| 640-1023px | Tablet | 8 | 24px | 32px |
| 1024-1279px | Desktop | 12 | 24px | 48px |
| 1280px+ | Wide | 12 | 32px | auto (max 1280px) |

### Content Width

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Browser Window                                │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                     Max Width: 1280px                             │ │
│  │  ┌─────────────────────────────────────────────────────────────┐  │ │
│  │  │               Content Width: 768px (prose)                  │  │ │
│  │  │                                                             │  │ │
│  │  │   For long-form text, publications, bio                    │  │ │
│  │  │                                                             │  │ │
│  │  └─────────────────────────────────────────────────────────────┘  │ │
│  │                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────┐  │ │
│  │  │               Full Width: 1280px (grids)                    │  │ │
│  │  │                                                             │  │ │
│  │  │   For card grids, affiliations, navigation                 │  │ │
│  │  │                                                             │  │ │
│  │  └─────────────────────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Spacing Scale

Based on 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight spacing, inline elements |
| space-2 | 8px | Small gaps, icon padding |
| space-3 | 12px | List item spacing |
| space-4 | 16px | Card padding, button padding |
| space-6 | 24px | Section internal padding |
| space-8 | 32px | Between components |
| space-12 | 48px | Between sections (mobile) |
| space-16 | 64px | Between sections (desktop) |
| space-24 | 96px | Major section breaks |

### Section Rhythm

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              96px                                       │
├─────────────────────────────────────────────────────────────────────────┤
│  SECTION CONTENT                                                        │
│  (Internal padding: 48px top/bottom on desktop, 32px on mobile)        │
├─────────────────────────────────────────────────────────────────────────┤
│                              96px                                       │
├─────────────────────────────────────────────────────────────────────────┤
│  SECTION CONTENT (alternate background)                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                              96px                                       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Component Design

### Navigation Bar

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Height: 72px (desktop), 64px (mobile)                                  │
│  Background: White with subtle shadow on scroll                         │
│  Position: Sticky top                                                   │
│                                                                         │
│  ┌──────────┐                              ┌─────────────────────────┐  │
│  │ MJ Logo  │  About  Practice▾  ...       │ Contact    [EN│PL]     │  │
│  └──────────┘                              └─────────────────────────┘  │
│                                                                         │
│  Logo: Initials "MJ" or full name in navy                              │
│  Links: Navy, 500 weight, hover underline                              │
│  Dropdown: White card, subtle shadow, 8px radius                       │
│  Language toggle: Outlined buttons, active state filled                │
└─────────────────────────────────────────────────────────────────────────┘
```

### Buttons

**Primary Button:**
```
┌─────────────────────────────────────┐
│  Background: Blue #2563eb           │
│  Text: White, 500 weight            │
│  Padding: 12px 24px                 │
│  Border-radius: 6px                 │
│  Hover: Blue #3b82f6, slight lift   │
│  Transition: 150ms ease             │
└─────────────────────────────────────┘
```

**Secondary Button:**
```
┌─────────────────────────────────────┐
│  Background: Transparent            │
│  Border: 1px Navy #1a2b4a           │
│  Text: Navy, 500 weight             │
│  Padding: 12px 24px                 │
│  Border-radius: 6px                 │
│  Hover: Navy bg, white text         │
└─────────────────────────────────────┘
```

**Text Link Button:**
```
┌─────────────────────────────────────┐
│  Text: Blue #2563eb                 │
│  Arrow: → after text                │
│  Hover: Underline, arrow shifts 4px │
└─────────────────────────────────────┘
```

### Cards

**Affiliation/Role Card:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  [Logo]                                                           │ │
│  │                                                                   │ │
│  │  Organization Name                                                │ │
│  │  Role Title                                                       │ │
│  │                                                                   │ │
│  │  Brief description of involvement...                             │ │
│  │                                                                   │ │
│  │  Learn more →                                                     │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  Background: White                                                      │
│  Border: 1px Gray 200 #e2e8f0                                          │
│  Border-radius: 8px                                                     │
│  Padding: 24px                                                          │
│  Hover: Subtle shadow, border color darkens                            │
└─────────────────────────────────────────────────────────────────────────┘
```

**Publication Card:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  [Type badge: Article / Book / Report]              2024          │ │
│  │                                                                   │ │
│  │  Publication Title                                                │ │
│  │  Publication venue or publisher                                   │ │
│  │                                                                   │ │
│  │  [Read →]  [PDF ↓]                                               │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  Type badge: Small pill, colored by type                               │
│  Links: Inline text buttons                                            │
└─────────────────────────────────────────────────────────────────────────┘
```

**Speaking Event Card:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  June 2026 │ Dublin, Ireland                                      │ │
│  │                                                                   │ │
│  │  ICON•S Annual Conference                                        │ │
│  │  "Human Oversight as a Constitutional Safeguard"                 │ │
│  │                                                                   │ │
│  │  [Keynote]                                                        │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  Date prominent, event name bold, talk title regular                   │
│  Badge for event type: Keynote / Panel / Lecture                       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Hero Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│       ┌─────────────┐    Prof. Michał Jackowski                        │
│       │             │                                                   │
│       │   Photo     │    Legal Scholar · AI Governance Expert ·        │
│       │             │    Attorney at Law                                │
│       │             │                                                   │
│       └─────────────┘    Shaping the governance of artificial          │
│                          intelligence at the intersection of            │
│                          law, policy, and practice.                     │
│                                                                         │
│                          [About me]  [Get in touch]                     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Photo: Professional headshot, circular or rounded square crop
       Size: 200px desktop, 150px mobile
       Position: Left on desktop, centered above on mobile
```

### Footer (Five Pillars)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Background: Gray 800 #1e293b                                                │
│  Text: Gray 300 (body), White (headings)                                     │
│  Padding: 64px top, 32px bottom                                              │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ PRACTICE    GOVERNANCE     ACADEMIA      MEDIA     STARTUP   CONNECT  │  │
│  │ DSK         EU AI Office   Research      Monday    AnyLawyer LinkedIn │  │
│  │ AI Projects GRAI           Publications  Bagel               Email    │  │
│  │             ITechLaw       Global Report Mentions            Speaking │  │
│  │             PIIT           OUP Essent.                                │  │
│  │             CEN-CENELEC    Teaching                                   │  │
│  ├────────────────────────────────────────────────────────────────────────┤  │
│  │  © 2024 Prof. Michał Jackowski                           [EN] [PL]    │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Imagery Guidelines

### Photography Style

- **Professional headshot:** Formal but approachable, neutral background
- **Event photography:** Speaking engagements, conference panels
- **Institutional:** Partner organization logos, event logos

### Image Treatment

- Consistent aspect ratios (16:9 for banners, 1:1 for profile)
- Subtle desaturation for consistency (optional)
- No heavy filters or effects

### Logo Display

- Partner/affiliation logos in grayscale on homepage
- Color logos on dedicated pages
- Consistent height (40-60px) in logo strips
- Adequate spacing between logos

---

## 7. Motion & Interaction

### Principles

- Subtle, purposeful animations
- No decorative motion
- Respect `prefers-reduced-motion`

### Transitions

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Links | color, text-decoration | 150ms | ease |
| Buttons | background, transform | 150ms | ease |
| Cards | box-shadow, border-color | 200ms | ease |
| Navigation dropdown | opacity, transform | 200ms | ease-out |
| Page transitions | opacity | 300ms | ease |

### Hover States

- Links: Underline appears
- Buttons: Slight lift (transform: translateY(-1px))
- Cards: Shadow deepens, border darkens
- Navigation items: Background highlight

---

## 8. Responsive Behavior

### Breakpoint Strategy

| Breakpoint | Layout Changes |
|------------|----------------|
| Mobile (< 640px) | Single column, stacked layout, hamburger menu |
| Tablet (640-1023px) | 2-column grids, condensed nav |
| Desktop (1024px+) | Full layout, dropdown navigation |

### Component Adaptations

**Hero:**
- Desktop: Photo left, text right
- Mobile: Photo top (centered), text below

**Card Grids:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column (stacked)

**Navigation:**
- Desktop: Horizontal with dropdowns
- Mobile: Hamburger with slide-out menu

---

## 9. Accessibility Requirements

### Standards

- WCAG 2.1 AA compliance minimum
- Semantic HTML structure
- Keyboard navigable
- Screen reader compatible

### Specific Requirements

- [ ] Skip to content link
- [ ] Focus visible states on all interactive elements
- [ ] Alt text for all images
- [ ] ARIA labels for icon-only buttons
- [ ] Language attribute on `<html>` tag
- [ ] Proper heading hierarchy (no skipped levels)
- [ ] Form labels associated with inputs
- [ ] Error messages linked to form fields
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Touch targets minimum 44x44px

---

## 10. Visual Unification of Roles (Five Pillars)

### The Challenge

Site must present multiple professional identities without feeling fragmented:
1. Professor / Scholar
2. Attorney at Law
3. AI Governance Expert
4. Entrepreneur / Startup Founder
5. Educator
6. Speaker
7. Podcast Host / Media Presence

### Five-Pillar Architecture

The site organizes all roles into five cohesive pillars:

| Pillar | Roles Covered | Key Affiliations |
|--------|---------------|------------------|
| **Practice** | Attorney, Practitioner | DSK, AI Projects |
| **Governance** | Policy Advisor, Standards Expert | EU AI Office, GRAI, ITechLaw, PIIT, CEN-CENELEC |
| **Academia** | Professor, Scholar, Educator | Cambridge, OUP, Global Report, Teaching |
| **Media** | Podcast Host, Public Voice | Monday Bagel, Press Mentions |
| **Startup** | Entrepreneur, Innovator | AnyLawyer |

### Visual Unification Strategy

**1. Consistent Card Design**
All affiliations use the same card component — DSK, Cambridge, EU AI Office, AnyLawyer all look visually equivalent, suggesting equal importance.

**2. Color Neutrality**
No pillar-specific colors. All sections use the same navy/blue/white palette. This prevents visual hierarchy between pillars.

**3. Typography Consistency**
Same type system everywhere. Academic publications and podcast episodes use identical styling patterns.

**4. Layout Repetition**
Pillar pages follow identical templates. Whether viewing ITechLaw or AnyLawyer, the structure is familiar.

**5. Cross-referencing**
Visual links between sections (e.g., "Related speaking engagements" on publication pages) show interconnection across pillars.

**6. Unified Homepage**
Homepage presents all roles in equal visual weight through the five-pillar structure:
- Row 1: Practice | Governance | Academia (3 columns)
- Row 2: Media | Startup (2 columns, centered)

**7. Single Voice**
Bio and all content written in consistent third-person professional voice.

---

## Summary: Design Tokens

```css
:root {
  /* Colors */
  --color-navy: #1a2b4a;
  --color-slate: #64748b;
  --color-blue: #2563eb;
  --color-blue-light: #3b82f6;
  --color-white: #ffffff;
  --color-gray-50: #f8fafc;
  --color-gray-100: #f1f5f9;
  --color-gray-200: #e2e8f0;
  --color-gray-800: #1e293b;

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Source Serif Pro', Georgia, serif;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Sizing */
  --max-width: 1280px;
  --prose-width: 768px;

  /* Borders */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
}
```

---

## Next Steps

1. Create detailed homepage wireframe
2. Define content model schemas
3. Finalize bilingual content strategy
4. Begin implementation planning
