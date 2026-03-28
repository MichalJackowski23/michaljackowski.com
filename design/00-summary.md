# Design Phase Summary — michaljackowski.com

## Status: COMPLETE — Ready for Review

The design phase for michaljackowski.com is complete. This document summarizes all deliverables for approval before implementation.

---

## Deliverables

| Document | File | Status |
|----------|------|--------|
| Website Strategy | `01-strategy.md` | Complete |
| Sitemap & Information Architecture | `02-sitemap.md` | Complete |
| Design Direction | `03-design-direction.md` | Complete |
| Content Model & Bilingual Strategy | `04-content-model.md` | Complete |
| Homepage Composition | `05-homepage-composition.md` | Complete |

---

## Key Decisions Summary

### 1. Positioning

**Core identity:** Prof. Michał Jackowski as a legal scholar and attorney shaping AI governance at the European level — combining academic research, practical legal experience, and public engagement.

**Five pillars:**
- **Practice** — DSK, AI Projects
- **Governance** — EU AI Office, GRAI, ITechLaw, PIIT, CEN-CENELEC
- **Academia** — Cambridge, Global Report, Publications, Teaching, OUP Expert Essentials
- **Media** — Monday Bagel, Press mentions
- **Startup** — AnyLawyer (LegalTech innovation)

### 2. Target Audiences (Priority Order)

1. Policy makers & regulators (EU-level)
2. Conference organizers
3. Academic peers
4. Legal professionals
5. Media & journalists
6. International organizations

### 3. Visual Direction

**Reference:** AnyLawyer.com aesthetic, adapted for personal academic profile

**Color palette:**
- Primary: Navy #1a2b4a (text, headers)
- Accent: Blue #2563eb (links, CTAs)
- Background: White + Gray 50 alternating sections
- Footer: Gray 800 #1e293b

**Typography:**
- Font: Inter (primary), Source Serif Pro (accent)
- Clear hierarchy with 1.25 scale ratio

**Design principles:**
- Premium but understated
- Professional, not corporate
- Academic authority with modern LegalTech sensibility

### 4. Site Structure

**12 main sections:**
1. Homepage
2. About
3. DSK
4. AnyLawyer
5. AI Projects
6. EU AI Office
7. GRAI
8. ITechLaw
9. PIIT
10. Academia (with Publications, Global Report, Teaching, Oxford University Press Expert Essentials affiliation)
11. Speaking
12. Monday Bagel
13. Media
14. Contact

**Navigation:** 7-item primary nav with dropdowns for Practice, Governance, Academia, Media, Startup

### 5. Bilingual Strategy

- **Languages:** English (primary), Polish
- **URL pattern:** Subdirectory (`/en/`, `/pl/`)
- **Content storage:** Mirrored directory structure per language
- **UI strings:** Centralized i18n files

### 6. Content Model

**Collections:**
- Affiliations (8 items)
- Publications (unlimited)
- Speaking engagements (unlimited)
- Podcast episodes (unlimited)
- AI Projects (unlimited)
- Media mentions (unlimited)

**Format:** YAML + Markdown files for easy editing without code changes

### 7. Homepage Structure

7 sections in order:
1. Hero (photo, name, tagline, CTAs)
2. Introduction (summary, key affiliations)
3. Five Pillars (Row 1: Practice/Governance/Academia, Row 2: Media/Startup)
4. Featured/Recent (speaking, publication, podcast with 3-sentence descriptions)
5. Affiliations logo strip (8 logos)
6. Contact CTA
7. Footer (six columns)

**Note:** Monday Bagel is now part of Media pillar, no separate highlight section.

### 8. Podcast Topic Organization

Episodes organized by primary topic for easy navigation:
- AI Governance & Regulation
- LegalTech & Innovation
- Future of Legal Profession
- AI Ethics & Society
- Digital Rights & Data
- Expert Interviews

Each episode includes 3-sentence description for homepage/cards.

---

## Technical Stack Recommendation

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Framework | **Astro** | Static-first, fast, excellent i18n support |
| Styling | **Tailwind CSS** | Utility-first, matches design tokens |
| Content | **YAML + Markdown** | Easy editing, Git-friendly |
| Deployment | **Vercel** or **Netlify** | Simple, fast, free tier |

---

## Open Questions for Review

1. **Default language:** English recommended (international audience). Confirm? yes

2. **Monday Bagel integration:** Embed player vs. link only? Links with short descriptions (3 sentences)

3. **Global Report:** Dedicated page confirmed. Should it have downloadable PDF? Link to globalailawreport.com 

4. **AI Projects:** Should projects show client names (anonymized) or remain generic? Generic

5. **Photo:** Current professional photo available? Or new photography needed? available

6. **Logos:** Do we have SVG logos for all affiliations (Cambridge, EU AI Office, DSK, ITechLaw, PIIT, CEN-CENELEC, OUP, AnyLawyer)? Download it from the websites

7. **Podcast episodes:** How many to migrate initially? All or recent subset? All but suggest some order to avoid overwhelming the user and mess. I suggest arranging them by topics. Please suggest the best way to do it.

---

## Next Steps After Approval

### Implementation Phase 1: Foundation
- Initialize Astro project
- Configure Tailwind with design tokens
- Build base layout components (Header, Footer, Navigation)
- Set up bilingual routing

### Implementation Phase 2: Core Pages
- Homepage
- About page
- Contact page

### Implementation Phase 3: Section Pages
- All affiliation pages (DSK, AnyLawyer, EU AI Office, etc.)
- Academia section with publications
- Speaking page
- Monday Bagel page

### Implementation Phase 4: Content
- Migrate/create content files
- Add images and logos
- Polish language versions

### Implementation Phase 5: Polish & Deploy
- Responsive testing
- Accessibility audit
- Performance optimization
- Deploy to production

---

## Files in This Design Package

```
/design
├── 00-summary.md          ← This file
├── 01-strategy.md         ← Website strategy & positioning
├── 02-sitemap.md          ← Information architecture & navigation
├── 03-design-direction.md ← Visual design system
├── 04-content-model.md    ← Content schemas & bilingual strategy
└── 05-homepage-composition.md ← Homepage wireframe & sections
```

---

## Approval Request

Please review all design documents and confirm:

- [ ] Strategy and positioning approved
- [ ] Sitemap and navigation structure approved
- [ ] Visual design direction approved
- [ ] Content model approved
- [ ] Homepage composition approved
- [ ] Technical stack approved

Once approved, implementation phase will begin.
