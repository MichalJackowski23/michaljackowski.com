# Information Architecture — michaljackowski.com

## 1. Sitemap

### Visual Sitemap (Five Pillars Structure)

```
michaljackowski.com
│
├── / (Homepage)
│   └── [Hero + Bio + Five Pillars + Featured + Contact CTA]
│
├── /about
│   └── [Full biography, CV summary, photo]
│
├── /practice (PILLAR 1)
│   ├── /dsk
│   │   └── [DSK Kancelaria partnership, firm description, role]
│   └── /ai-projects
│       └── [Implemented AI projects, case studies]
│
├── /governance (PILLAR 2)
│   ├── /eu-ai-office
│   │   └── [Advisory role, Code of Practice, GPAI work]
│   ├── /grai
│   │   └── [Government AI Council, Ministry of Digital Affairs]
│   ├── /itechlaw
│   │   └── [Legal Technology Committee, international network]
│   ├── /piit
│   │   └── [Polish Chamber of IT and Telecommunications]
│   └── /cen-cenelec
│       └── [European standardization, AI regulation standards]
│
├── /academia (PILLAR 3)
│   ├── /research
│   │   └── [Research areas, Cambridge affiliation, ongoing work]
│   ├── /publications
│   │   └── [Books, articles, reports]
│   ├── /global-report
│   │   └── [Global Report on AI in Legal Practice — link to globalailawreport.com]
│   ├── /oup-expert-essentials
│   │   └── [Oxford University Press Expert Essentials affiliation]
│   └── /teaching
│       └── [AI & Law programme, Koźmiński, educational initiatives]
│
├── /media (PILLAR 4)
│   ├── /monday-bagel
│   │   └── [Podcast overview, episodes by topic, subscribe links]
│   └── /mentions
│       └── [Press mentions, interviews, external publications]
│
├── /startup (PILLAR 5)
│   └── /anylawyer
│       └── [Co-founder role, product description, LegalTech vision]
│
├── /speaking
│   └── [Conference list, upcoming events, booking info]
│
└── /contact
    └── [Contact form, social links, booking inquiry]
```

### URL Structure (Bilingual)

| English | Polish |
|---------|--------|
| `/en/` | `/pl/` |
| `/en/about` | `/pl/o-mnie` |
| **Practice** | |
| `/en/practice/dsk` | `/pl/praktyka/dsk` |
| `/en/practice/ai-projects` | `/pl/praktyka/projekty-ai` |
| **Governance** | |
| `/en/governance/eu-ai-office` | `/pl/governance/eu-ai-office` |
| `/en/governance/grai` | `/pl/governance/grai` |
| `/en/governance/itechlaw` | `/pl/governance/itechlaw` |
| `/en/governance/piit` | `/pl/governance/piit` |
| `/en/governance/cen-cenelec` | `/pl/governance/cen-cenelec` |
| **Academia** | |
| `/en/academia` | `/pl/nauka` |
| `/en/academia/publications` | `/pl/nauka/publikacje` |
| `/en/academia/global-report` | `/pl/nauka/raport-globalny` |
| `/en/academia/oup-expert-essentials` | `/pl/nauka/oup-expert-essentials` |
| `/en/academia/teaching` | `/pl/nauka/dydaktyka` |
| **Media** | |
| `/en/media/monday-bagel` | `/pl/media/monday-bagel` |
| `/en/media/mentions` | `/pl/media/wzmianki` |
| **Startup** | |
| `/en/startup/anylawyer` | `/pl/startup/anylawyer` |
| **Other** | |
| `/en/speaking` | `/pl/wystapienia` |
| `/en/contact` | `/pl/kontakt` |

---

## 2. Page Hierarchy (Five Pillars)

### Level 0 — Root
- Homepage (primary entry point)

### Level 1 — Main Sections (Five Pillars + Supporting)
- About
- **Practice** (Pillar 1)
- **Governance** (Pillar 2)
- **Academia** (Pillar 3)
- **Media** (Pillar 4)
- **Startup** (Pillar 5)
- Speaking
- Contact

### Level 2 — Subsections
- Practice → DSK, AI Projects
- Governance → EU AI Office, GRAI, ITechLaw, PIIT, CEN-CENELEC
- Academia → Research, Publications, Global Report, OUP Expert Essentials, Teaching
- Media → Monday Bagel, Mentions
- Startup → AnyLawyer

### Level 3 — Content Items
- Publications → Individual publication pages (optional)
- Speaking → Individual event pages (optional)
- Monday Bagel → Episodes organized by topic

---

## 3. Navigation Structure (Five Pillars)

### Primary Navigation (Header)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  [Logo/Name]   About  Practice▾  Governance▾  Academia▾  Media▾  Startup▾       │
│                                                        Speaking  Contact  [EN|PL]│
└──────────────────────────────────────────────────────────────────────────────────┘
```

**Desktop — 8 items:**
1. About
2. Practice (dropdown)
3. Governance (dropdown)
4. Academia (dropdown)
5. Media (dropdown)
6. Startup (dropdown)
7. Speaking
8. Contact

**Mobile — Hamburger menu with expandable sections**

### Dropdown Menus

**Practice:**
- DSK Kancelaria
- AI Projects

**Governance:**
- EU AI Office
- GRAI
- ITechLaw
- PIIT
- CEN-CENELEC

**Academia:**
- Research
- Publications
- Global Report
- OUP Expert Essentials
- Teaching

**Media:**
- Monday Bagel
- Press & Mentions

**Startup:**
- AnyLawyer

### Secondary Navigation (Footer)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  PRACTICE      GOVERNANCE       ACADEMIA         MEDIA         STARTUP    CONNECT  │
│  DSK           EU AI Office     Research         Monday Bagel  AnyLawyer  Contact  │
│  AI Projects   GRAI             Publications     Mentions                 LinkedIn │
│                ITechLaw         Global Report                             Email    │
│                PIIT             OUP Essentials                                     │
│                CEN-CENELEC      Teaching                                           │
│─────────────────────────────────────────────────────────────────────────────────────│
│  © 2024 Michał Jackowski                                               [EN] [PL]   │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### Breadcrumbs

Display on Level 2+ pages:

```
Home > Academia > Publications
Home > Governance > EU AI Office
Home > Practice > AI Projects
```

---

## 4. Homepage Structure (Five Pillars)

### Section Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│  1. HERO                                                                │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  [Photo]  Prof. Michał Jackowski                                   │ │
│  │           Legal Scholar · AI Governance Expert · Attorney          │ │
│  │           [Brief tagline — 1-2 sentences]                          │ │
│  │           [CTA: Learn more] [CTA: Contact]                         │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  2. INTRO / BIO SUMMARY                                                 │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  2-3 paragraph overview of expertise and positioning               │ │
│  │  Key affiliations listed: Cambridge, EU AI Office, DSK, etc.       │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  3. FIVE ACTIVITY PILLARS                                               │
│                                                                         │
│  Row 1 (3 columns):                                                     │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐        │
│  │    PRACTICE      │ │   GOVERNANCE     │ │    ACADEMIA      │        │
│  │                  │ │                  │ │                  │        │
│  │  DSK             │ │  EU AI Office    │ │  Cambridge       │        │
│  │  AI Projects     │ │  GRAI · ITechLaw │ │  Global Report   │        │
│  │                  │ │  PIIT·CEN-CENEL. │ │  OUP · Teaching  │        │
│  │  [Explore →]     │ │  [Explore →]     │ │  [Explore →]     │        │
│  └──────────────────┘ └──────────────────┘ └──────────────────┘        │
│                                                                         │
│  Row 2 (2 columns, centered):                                           │
│           ┌──────────────────┐ ┌──────────────────┐                    │
│           │      MEDIA       │ │     STARTUP      │                    │
│           │                  │ │                  │                    │
│           │  Monday Bagel    │ │  AnyLawyer       │                    │
│           │  Press mentions  │ │  LegalTech       │                    │
│           │                  │ │  Innovation      │                    │
│           │  [Explore →]     │ │  [Explore →]     │                    │
│           └──────────────────┘ └──────────────────┘                    │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  4. FEATURED CONTENT                                                    │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  Latest / Featured items (auto-updating or manually curated):      │ │
│  │  • Recent publication                                              │ │
│  │  • Upcoming speaking engagement                                    │ │
│  │  • Latest Monday Bagel episode (3-sentence description)            │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  5. AFFILIATIONS / LOGOS                                                │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  [Cambridge] [EU AI Office] [DSK] [ITechLaw] [PIIT] [AnyLawyer]   │ │
│  │  [CEN-CENELEC] [OUP]                                              │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  6. CONTACT CTA                                                         │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  Speaking inquiries · Media requests · Collaboration               │ │
│  │  [Get in touch →]                                                  │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  7. FOOTER                                                              │
└─────────────────────────────────────────────────────────────────────────┘
```

**Note:** Monday Bagel highlight section removed from homepage — podcast now integrated into Media pillar and Featured Content section with 3-sentence episode descriptions.

---

## 5. Section Page Templates

### Template A: Role/Affiliation Page

Used for: DSK, AnyLawyer, EU AI Office, GRAI, ITechLaw, PIIT

```
┌─────────────────────────────────────────────────────────────────────────┐
│  HEADER + BREADCRUMB                                                    │
├─────────────────────────────────────────────────────────────────────────┤
│  PAGE TITLE                                                             │
│  [Organization name]                                                    │
│  Role: [Position held]                                                  │
│  Period: [Dates if relevant]                                            │
├─────────────────────────────────────────────────────────────────────────┤
│  MAIN CONTENT                                                           │
│  • Description of involvement                                           │
│  • Key activities and contributions                                     │
│  • Notable outcomes                                                     │
├─────────────────────────────────────────────────────────────────────────┤
│  RELATED LINKS                                                          │
│  • External website                                                     │
│  • Related publications                                                 │
│  • Related speaking engagements                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                 │
└─────────────────────────────────────────────────────────────────────────┘
```

### Template B: List Page

Used for: Publications, Speaking, Media, AI Projects

```
┌─────────────────────────────────────────────────────────────────────────┐
│  HEADER + BREADCRUMB                                                    │
├─────────────────────────────────────────────────────────────────────────┤
│  PAGE TITLE + INTRO                                                     │
│  [Section description]                                                  │
├─────────────────────────────────────────────────────────────────────────┤
│  FILTER/SORT (optional)                                                 │
│  [By year] [By type] [By topic]                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  LIST OF ITEMS                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ [Item 1] — Title, date, type, brief description, link          │   │
│  ├─────────────────────────────────────────────────────────────────┤   │
│  │ [Item 2]                                                        │   │
│  ├─────────────────────────────────────────────────────────────────┤   │
│  │ [Item 3]                                                        │   │
│  └─────────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                 │
└─────────────────────────────────────────────────────────────────────────┘
```

### Template C: Feature Page

Used for: Global Report, Monday Bagel

```
┌─────────────────────────────────────────────────────────────────────────┐
│  HEADER + BREADCRUMB                                                    │
├─────────────────────────────────────────────────────────────────────────┤
│  HERO SECTION                                                           │
│  [Feature image/artwork]                                                │
│  [Title]                                                                │
│  [Tagline]                                                              │
├─────────────────────────────────────────────────────────────────────────┤
│  MAIN CONTENT                                                           │
│  • Full description                                                     │
│  • Key highlights                                                       │
│  • Statistics/impact (if applicable)                                    │
├─────────────────────────────────────────────────────────────────────────┤
│  CONTENT LIST (if applicable)                                           │
│  • Episodes (Monday Bagel)                                              │
│  • Chapters/findings (Global Report)                                    │
├─────────────────────────────────────────────────────────────────────────┤
│  CALL TO ACTION                                                         │
│  • Download report / Listen to podcast                                  │
│  • External links                                                       │
├─────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                 │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Content Priority Matrix

| Page | Priority | Update Frequency |
|------|----------|------------------|
| Homepage | Critical | Monthly |
| About | High | Quarterly |
| DSK | Medium | Yearly |
| AnyLawyer | Medium | Quarterly |
| AI Projects | High | Monthly |
| EU AI Office | High | Quarterly |
| GRAI | Medium | Quarterly |
| ITechLaw | Medium | Yearly |
| PIIT | Medium | Yearly |
| Publications | High | Monthly |
| Global Report | High | On release |
| Teaching | Medium | Yearly |
| Speaking | Critical | Weekly/Monthly |
| Monday Bagel | Critical | Weekly |
| Media | Medium | Monthly |
| Contact | Low | Rarely |

---

## 7. Cross-Linking Strategy

### Automatic Cross-Links

- Publications tagged with "AI governance" → link to EU AI Office page
- Speaking events at ITechLaw → link to ITechLaw page
- Podcast episodes featuring DSK work → link to DSK page

### Manual Cross-Links

- Global Report page → links to co-sponsoring organizations
- Academia page → links to relevant publications
- AI Projects → links to AnyLawyer and DSK context

### External Links

Each affiliation page should link to:
- Official organization website
- Author's profile on that platform (if exists)
- Related external publications

---

## 8. Mobile Navigation (Five Pillars)

### Mobile Menu Structure

```
┌─────────────────────────────────┐
│  [Logo]              [☰ Menu]  │
└─────────────────────────────────┘

Expanded:
┌─────────────────────────────────┐
│  About                          │
│  Practice                    ▼  │
│    ├── DSK                      │
│    └── AI Projects              │
│  Governance                  ▼  │
│    ├── EU AI Office             │
│    ├── GRAI                     │
│    ├── ITechLaw                 │
│    ├── PIIT                     │
│    └── CEN-CENELEC              │
│  Academia                    ▼  │
│    ├── Research                 │
│    ├── Publications             │
│    ├── Global Report            │
│    ├── OUP Expert Essentials    │
│    └── Teaching                 │
│  Media                       ▼  │
│    ├── Monday Bagel             │
│    └── Press & Mentions         │
│  Startup                     ▼  │
│    └── AnyLawyer                │
│  Speaking                       │
│  Contact                        │
│─────────────────────────────────│
│  [EN] [PL]                      │
└─────────────────────────────────┘
```

---

## 9. Language Switching Logic

### Behavior

1. Language toggle visible in header (desktop) and menu (mobile)
2. Switching language preserves current page context
3. If translated page exists → navigate to translated version
4. If no translation → fallback to homepage in target language
5. Language preference stored in localStorage
6. Default language: English (international audience priority)

### URL Examples

```
/en/academia/publications → [switch to PL] → /pl/nauka/publikacje
/en/governance/eu-ai-office → [switch to PL] → /pl/governance/eu-ai-office
```

---

## Next Steps

1. Define visual design direction
2. Create component specifications
3. Finalize content model for each page type
4. Begin implementation planning
