# CLAUDE.md — Personal Website for Michał Jackowski

## Project Overview

This repository contains the personal website for **michaljackowski.com**.

**Purpose:** Present Michał Jackowski as a legal scholar, AI governance expert, legal innovator, entrepreneur, attorney at law, educator, and public intellectual.

**Key attributes:** Elegant, modern, professional, easy to update, bilingual (Polish/English), expandable.

---

## Workflow Stages

### Stage 1: Design Phase (REQUIRED FIRST)

Complete these deliverables before any implementation:

1. **Website Strategy Summary**
   - Target audiences
   - Positioning logic
   - Narrative structure
   - Identity balance across roles

2. **Information Architecture**
   - Sitemap
   - Page hierarchy
   - Navigation structure
   - Homepage structure

3. **Design Direction**
   - Typography system
   - Layout structure
   - Spacing rules
   - Color palette (inspired by anylawyer.com)
   - Visual identity logic
   - Section templates

4. **Content Model**
   - Structured content types
   - Bilingual storage strategy
   - Metadata schema

5. **Bilingual Strategy**
   - Mirrored content structure
   - Language switching logic
   - Translation workflow

### Stage 2: Implementation Phase

Only after design approval:

1. File structure
2. Routing logic
3. Component library
4. Content integration
5. Deployment setup

---

## Author Biography

**Prof. Michał Jackowski** is a professor of law specializing in artificial intelligence and law, legal innovation, and digital regulation. He is affiliated with the University of Cambridge Faculty of Law as a Visiting Scholar and actively contributes to international work on AI governance and standards.

He serves as an advisor cooperating with the EU AI Office on implementation frameworks for general-purpose AI systems and is a member of expert groups working on the Code of Practice for large language models under the EU AI Act. He is also engaged in international regulatory dialogue through his role in the AI Working Group of the Ministry of Digital Affairs of Poland, where he leads international cooperation activities.

Prof. Jackowski is deeply involved in global LegalTech and AI governance networks. He contributes to the Legal Technology Committee of ITechLaw Association and participates in European standardization initiatives connected with AI regulation within the CEN-CENELEC framework. His work focuses in particular on human oversight of AI systems, regulatory infrastructure for general-purpose AI, and the evolving institutional architecture of trustworthy AI deployment.

He is co-editor and co-author of the **Global Report on the State of AI in Legal Practice**, one of the largest international empirical studies examining how lawyers and legal organizations adopt artificial intelligence tools across jurisdictions. The report was prepared in cooperation with organizations including CCBE, FBI, AIJA, World Jurists Association, and ITechLaw. He is co-editor of Oxford University Press scientific series on legal tech and AI.

In addition to academic research, he actively shapes professional education in AI & law. He supports the development of the postgraduate programme AI & Law at the Akademia Leona Koźmińskiego, one of the most advanced practice-oriented educational initiatives in this field in Central Europe, helping train lawyers in the use of generative AI and LegalTech tools.

Prof. Jackowski is also the host of the international podcast **Monday Bagel**, which explores the intersection of law, technology, and society. The programme brings together leading scholars, policymakers, and innovators working on AI governance, digital transformation of legal systems, and the future of the legal profession, reaching tens of thousands of listeners globally.

Alongside his academic work, he is a co-founder and partner at **DSK Kancelaria** (DSK Depa Szmit Kuźmiak Jackowski), a multidisciplinary law firm (100+ people on board) advising technology companies, infrastructure investors, and large organizations on regulatory strategy, digital compliance (including DORA, AI Act, and data governance), LegalTech transformation, and innovation-driven legal services. He leads initiatives related to AI adoption in legal practice and the development of collaborative human-AI legal workflows.

### Research & Professional Focus

- Governance of general-purpose AI systems in responsible way
- Human oversight standards in automated decision-making
- LegalTech transformation of legal services
- Institutional design of trustworthy AI ecosystems
- Comparative AI regulation in Europe and globally
- The future role of lawyers in AI-mediated societies

He regularly collaborates with international academic institutions, regulators, and professional organizations on projects at the intersection of law, artificial intelligence, and public policy.

**LinkedIn profile for reference:** https://www.linkedin.com/in/michal-jackowski-prof/

---

## Author Profile Summary

**Michał Jackowski** — Multiple integrated identities:

| Role | Context |
|------|---------|
| Professor | AI & Law, University of Cambridge Visiting Scholar |
| Attorney at Law | Legal practitioner, regulatory expert |
| AI Governance Expert | EU AI Office advisor, Code of Practice contributor |
| Entrepreneur | Co-founder of AnyLawyer, Partner at DSK |
| Educator | AI & Law programme, Akademia Leona Koźmińskiego |
| Speaker | International conferences |
| Podcast Host | Monday Bagel |
| Public Intellectual | Policy & innovation commentary |
| Researcher | Global Report on AI in Legal Practice, OUP editor |

---

## Website Structure

### Required Sections

1. **Homepage** — General bio, overview, positioning statement
2. **DSK** — Legal practice, firm partnership, 100+ team
3. **AnyLawyer** — LegalTech venture, co-founder role
4. **Academia + Publications** — Academic positions, research, publications, OUP series
5. **Global Report on AI in Legal Practice** — International empirical study, CCBE/ITechLaw cooperation
6. **PIIT** — Polish Chamber of Information Technology and Telecommunications
7. **GRAI** — Government AI Council, Ministry of Digital Affairs
8. **EU AI Office** — European AI policy, Code of Practice for LLMs
9. **ITechLaw** — Legal Technology Committee, international network
10. **Conferences & Speaking** — Talks, panels, keynotes
11. **Implemented Projects in AI** — Practical AI deployment projects
12. **Monday Bagel** — Podcast episodes, media presence

### Supporting Sections (optional, propose as needed)

- Media & Appearances
- External Publications
- Featured Elsewhere
- Contact

---

## Design Requirements

### Visual Reference

**Primary inspiration:** https://anylawyer.com

Translate AnyLawyer's visual language to a personal expert profile:

| AnyLawyer Element | Personal Site Adaptation |
|-------------------|-------------------------|
| Typography clarity | Academic readability |
| Layout simplicity | Clean professional hierarchy |
| Visual hierarchy | Role-based content structure |
| Minimalism | Understated expertise |
| LegalTech tone | Scholar-practitioner balance |
| Modular blocks | Expandable content sections |

### Design Principles

- Premium but understated
- Professional, not corporate
- Academic, not cluttered
- Modern, not trendy
- Personal, not product-focused

### Typography System

- Clear hierarchy (H1-H4)
- Readable body text
- Consistent spacing
- Professional font pairing (propose specific fonts)

### Color Direction

- Restrained palette
- Balanced white space
- Accent colors for navigation/interaction
- Dark/light contrast for readability

---

## Bilingual Architecture

### Requirements

- **Languages:** Polish (pl), English (en)
- **Default:** Propose based on audience analysis
- **Mirrored structure:** All pages available in both languages
- **Language switching:** Persistent, accessible toggle

### Content Storage Pattern

```
/content
  /en
    /pages
    /posts
    /projects
  /pl
    /pages
    /posts
    /projects
```

### URL Strategy Options

1. Subdirectory: `/en/about`, `/pl/about`
2. Subdomain: `en.michaljackowski.com`
3. Query param: `?lang=en` (not recommended)

**Recommended:** Subdirectory approach for SEO and simplicity.

---

## Content Model

### Structured Content Types

```yaml
# bio.yaml
name: string
title: string
tagline: string
photo: string
summary_short: markdown
summary_long: markdown
social_links:
  - platform: string
    url: string
```

```yaml
# affiliation.yaml
name: string
role: string
institution: string
start_date: date
end_date: date (optional)
description: markdown
logo: string (optional)
url: string (optional)
```

```yaml
# publication.yaml
title: string
type: enum [article, book, chapter, report, opinion]
date: date
publication: string
url: string (optional)
pdf: string (optional)
abstract: markdown (optional)
language: enum [pl, en, both]
```

```yaml
# speaking.yaml
title: string
event: string
date: date
location: string
type: enum [keynote, panel, lecture, workshop]
recording_url: string (optional)
slides_url: string (optional)
description: markdown (optional)
```

```yaml
# podcast_episode.yaml
title: string
episode_number: number
date: date
guest: string (optional)
description: markdown
audio_url: string
video_url: string (optional)
transcript: markdown (optional)
```

```yaml
# media_mention.yaml
title: string
outlet: string
date: date
type: enum [interview, article, quote, feature]
url: string
description: string (optional)
```

```yaml
# project.yaml
name: string
role: string
description: markdown
url: string (optional)
logo: string (optional)
active: boolean
category: enum [ai_implementation, legaltech, research, advisory]
```

```yaml
# ai_project.yaml
name: string
client_type: string (optional, anonymized)
description: markdown
technologies: list[string]
outcomes: markdown
year: number
category: enum [legal_practice, compliance, automation, governance]
```

---

## Technical Stack

### Recommended: Static Site Generator

**Proposed stack:**

| Component | Technology | Rationale |
|-----------|------------|-----------|
| Framework | Astro or Next.js (static) | Modern, fast, bilingual-friendly |
| Styling | Tailwind CSS | Utility-first, maintainable |
| Content | Markdown + YAML frontmatter | Easy editing, version control |
| Deployment | Vercel or Netlify | Simple, fast, free tier |
| Domain | michaljackowski.com | Professional |

### Alternative Considerations

- **Hugo:** Faster builds, steeper learning curve
- **11ty:** Simpler, less ecosystem
- **Gatsby:** More complex, good for dynamic content

### Requirements Met

- [x] Static deployment
- [x] Fast performance
- [x] Clean typography
- [x] Bilingual support
- [x] Easy updates (Markdown/YAML)
- [x] Long-term maintainability

---

## Easy Editing Requirements

### Non-Developer Editing

Content must be editable without code changes:

1. **Markdown files** for prose content
2. **YAML files** for structured data
3. **Clear directory structure** for findability
4. **Documented content schema** for consistency

### Content Directory Structure

```
/content
  /en
    bio.yaml
    /affiliations
      dsk.yaml
      anylawyer.yaml
      cambridge.yaml
      piit.yaml
      itechlaw.yaml
      eu-ai-office.yaml
      grai.yaml
      ...
    /publications
      2024-global-report-ai-legal.md
      2024-oup-chapter.md
      ...
    /speaking
      2024-european-ai-summit.yaml
      ...
    /podcast
      001-intro.yaml
      ...
    /ai-projects
      project-legal-workflow.yaml
      project-compliance-automation.yaml
      ...
    /media
      ...
  /pl
    (mirrored structure)
```

### Adding New Content

To add a publication:
1. Create new `.md` file in `/content/[lang]/publications/`
2. Add required frontmatter
3. Commit and deploy

---

## External Links Strategy

### Link Categories

1. **Conference recordings** — YouTube, Vimeo embeds
2. **Podcast appearances** — Audio/video links
3. **Interviews** — Media outlet links
4. **Institutional profiles** — University, organization pages
5. **External publications** — Journal, platform links
6. **Reports** — PDF links, institutional pages (Global Report, etc.)
7. **Advisory roles** — Organization links
8. **Media mentions** — Press coverage

### Display Patterns

- Featured section on homepage
- Dedicated "Media & Appearances" page
- Contextual links within role sections
- "As seen in" logo strip (optional)

---

## File Structure (Implementation Phase)

```
/
├── CLAUDE.md
├── README.md
├── package.json
├── astro.config.mjs (or next.config.js)
├── tailwind.config.js
├── /public
│   ├── /images
│   ├── /documents
│   └── favicon.ico
├── /src
│   ├── /components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── Section.astro
│   │   ├── Card.astro
│   │   ├── PublicationList.astro
│   │   ├── SpeakingList.astro
│   │   ├── ProjectCard.astro
│   │   ├── PodcastEpisode.astro
│   │   └── ...
│   ├── /layouts
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── SectionLayout.astro
│   ├── /pages
│   │   ├── /en
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── dsk.astro
│   │   │   ├── anylawyer.astro
│   │   │   ├── academia.astro
│   │   │   ├── global-report.astro
│   │   │   ├── ai-projects.astro
│   │   │   └── ...
│   │   └── /pl
│   │       └── (mirrored)
│   └── /styles
│       └── global.css
├── /content
│   ├── /en
│   └── /pl
└── /design
    ├── strategy.md
    ├── sitemap.md
    ├── design-direction.md
    └── content-model.md
```

---

## Working Principles

### Design Phase

- Work iteratively
- Avoid premature coding
- Make structured proposals
- Act as product designer + content strategist
- Optimize for clarity, elegance, long-term usability

### Implementation Phase

- Modular components
- Clear separation of content and layout
- Documented patterns
- Scalable architecture

### Quality Criteria

- [ ] Professional appearance
- [ ] Fast load times
- [ ] Mobile responsive
- [ ] Accessible (WCAG 2.1 AA)
- [ ] SEO optimized
- [ ] Easy to update
- [ ] Bilingual complete

---

## Target Audiences

1. **Academic peers** — Researchers, professors, institutions
2. **Policy makers** — EU officials, government advisors, AI Office
3. **Legal professionals** — Lawyers, firms, legal tech adopters
4. **Conference organizers** — Event planners, speakers bureaus
5. **Media** — Journalists seeking expert commentary on AI/law
6. **Students** — Prospective collaborators, mentees
7. **Business contacts** — Technology companies, potential clients
8. **International organizations** — CCBE, ITechLaw, CEN-CENELEC

---

## Identity Integration

The website must unify these roles without fragmentation:

```
                    ┌─────────────────┐
                    │  Prof. Michał   │
                    │  Jackowski      │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   ┌────▼────┐         ┌─────▼─────┐        ┌────▼────┐
   │ Scholar │         │ Attorney  │        │ Leader  │
   └────┬────┘         └─────┬─────┘        └────┬────┘
        │                    │                    │
   ┌────▼────┐         ┌─────▼─────┐        ┌────▼────┐
   │Cambridge│         │   DSK     │        │EU AI Off│
   │OUP Serie│         │ AnyLawyer │        │  GRAI   │
   │Global Re│         │   PIIT    │        │ITechLaw │
   │AI & Law │         │AI Projects│        │CEN-CENE │
   └─────────┘         └───────────┘        └─────────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                    ┌────────▼────────┐
                    │  Monday Bagel   │
                    │  (Public Voice) │
                    └─────────────────┘
```

Visual and narrative coherence across all sections.

---

## Next Steps

### Immediate (Design Phase)

1. Review LinkedIn profile for complete affiliations/timeline
2. Draft website strategy document
3. Create detailed sitemap
4. Develop design direction proposal
5. Define homepage composition
6. Finalize content model
7. Present for approval

### After Approval (Implementation)

1. Initialize project with chosen stack
2. Build component library
3. Create page templates
4. Integrate content
5. Implement bilingual routing
6. Test and deploy

---

## Commands Reference

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Content
# Add new content by creating files in /content/[lang]/

# Deployment
# Automatic via Vercel/Netlify on push to main
```

---

## Notes

- Do not implement before design phase is complete
- All design decisions require explicit approval
- Content structure must support future expansion
- Maintain consistency between language versions
- Prioritize readability and professional tone
- The site should feel unified across all roles — scholar, attorney, governance expert, entrepreneur, speaker, podcast host
- **IMPORTANT:** Always check language correctness and fix any errors

---

## Development Roadmap — Detailed Tasks

### General Guidelines

- Always check and correct language (Polish/English) when implementing changes

---

### Additional Credentials to Display

Add these credentials prominently (diplomas will be provided):

1. **Professional Scrum Master I** — 2021
2. **Executive MBA** — ESCP Europe, completed 2018
3. **Akademia Psychologii Przywództwa** — 2023, certified business psychologist

---

### Homepage Changes

#### Hero Section (above Five Pillars)

Update roles in the introduction box:
- Professor of AI & Law at SWPS and ALK
- Advisor to EU AI Office, CEN-CENELEC, PKN, PIIT, Ministry of Digital Affairs
- CEO & Co-founder of AnyLawyer

#### Bottom Tiles

Sync bottom tiles with changes made to pillar sections above.

#### Calendar Integration

Add calendar booking link: https://calendar.app.google/HhMAL6Nedi2skE3W8

#### Contact Link

Link contact to: m.jackowski@dsk-kancelaria.pl

---

### Practice Page Changes

#### Scope Expansion

Don't focus only on AI. Add:
- Data Governance
- Tech M&A
- Cybersecurity

#### Key Clients Section

Add:
- Corporations and family businesses implementing digital transformation processes
- Where "Public sector entities deploying automated decision-making" — add: "and implementing modern IT systems"

#### AI Implementation Projects

Create attractive subpages for each AI project tile — propose professional design.

#### Navigation Behavior

- Clicking DSK tile in Practice section on homepage → opens page at top
- Clicking "AI Projects" → scrolls to AI projects section

---

### Governance Page Changes

#### General Focus

Emphasize AI governance but also include:
- Data Act
- Data Governance Act
- Cybersecurity
- Data Protection

#### Organization Updates

**EU AI Office:**
- Start description with: "Member of expert group drafting The General-Purpose AI Code of Practice and Code of Practice on marking and labelling of AI-generated content."
- Link to:
  - https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
  - https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- End with (if space allows): "Contributing to the development and implementation of the EU AI Act, advising on regulatory frameworks and governance mechanisms for artificial intelligence at the European level."

**GRAI:**
- Change "Member" to "Leader"
- Start description: "Leader of..."

**ITechLaw:**
- Change "Member" to "Co-chair"
- Description: "Co-chair of Legal Tech Committee of International Technology Law Association, the leading global organization for technology law professionals, fostering collaboration and knowledge exchange."

**PIIT:**
- Description: "Ekspert ds. AI Komitetu Przełomowych Technologii Polskiej Izby Informatyki i Telekomunikacji (Polish Chamber of Information Technology and Telecommunications), representing the ICT industry in Poland."

**CEN-CENELEC:**
- Add: "Member of the CEN and CENELEC Joint Technical Committee 21 (JTC 21), European Committee for Standardization, contributing to the development of technical standards for AI systems in Europe."

**PKN:**
- Add: "Member of PKN/KT 338 DS. SZTUCZNEJ INTELIGENCJI, Polski Komitet Normalizacyjny (Polish Committee for Standardization), working on national and international AI standardization efforts."

**ITCORNER:**
- Former Member of Management Board
- Ongoing member of ITCORNER VOICE (task force for public opinion)
- Change description to: "Największa polska organizacja skupiająca polskich founderów firm technologicznych, promoting innovation and digital transformation in the technology sector."

#### New Organizations to Add

1. **Europejska Fundacja Quantum Intelligence**
   - Role: Board Member
   - Focus: Education on breakthrough technologies and promoting quantum computing knowledge in Poland

2. **LumiAI**
   - Role: Członek Rady Programowej
   - Profile: https://www.luminai.pl/czlonek-rady/prof-michal-jackowski
   - Get description and logo from: https://www.luminai.pl/manifest-ai

3. **GraceHopper Institute (NGO)**
   - Role: Supervisory Board Member
   - Profile: https://gracehopperinstitute.org/staff-amp-faculty/michal-jackowski/

#### Professional Associations (consider grouping in one place)

- International Association of Artificial Intelligence & Law
- World Tech Legal
- World Jurist Association
- ICON'S
- Societas Iuris Publici Europaei (SIPE)
- GigaNet (https://giga-net.org)

Download logos from their websites.

---

### Academia Page Changes

#### Primary Affiliation

**SWPS** — Wydział Prawa w Poznaniu (main affiliation)

#### Cambridge

Keep but consider reducing content if more information is added.

#### ALK (Akademia Leona Koźmińskiego)

- Lecturer on Legal Tech
- Link to: https://www.kozminski.edu.pl/pl/oferta-edukacyjna/studia-podyplomowe/prawo-sztucznej-inteligencji

#### New Affiliation

**CLAIRE** — Centre for LegalTech and AI Research (Centrum Badań nad LegalTech i AI), Uniwersytet Łódzki
- Role: Member of Scientific Council

#### Global Report on AI in Legal Practice

- Update: 2nd edition coming soon with 2025 research data
- Comparing results with first report
- Will be published on: globalailawreport.com
- Report file is in project directory

#### Oxford University Press

- Role: Editor-in-Chief of OUP Essentials series on legal tech
- Description: "Providing accessible yet rigorous analysis of complex legal issues"
- Note: No link yet — series is new

---

### Publications List

#### Pre-2008 and Post-2016 Publications

Add to publications section:

**Books:**
- Ochrona danych medycznych. Wwa 2002 Dom Wydawn.ABC ss. 254

**Articles:**
- Ekspektatywa jako przedmiot ochrony konstytucyjnej. PiP 2007 nr 11 s. 93-101
- Transformacja ustrojowa po 1989 roku a zmiany prawa. PiP 2004 nr 5 s. 16-31
- Zasada ochrony praw nabytych w polskim prawie konstytucyjnym. Prz.Sejmowy 2008 nr 1 s. 11-28
- Glosa do wyroku NSA z 28.11.2002 r. II SA 3389/01. PiP 2004 nr 10 s. 126-131
- Glosa do wyroku TK z 10.04.2006 r. SK 30/04. PiP 2007 nr 4 s. 136-140
- Glosa do wyroku SN z 27.04.2007 r. III CZP 28/07. Pal. 2008 nr 7/8 s. 302-307
- Wyłączenie odpowiedzialności przy świadczeniu usług hostingu. Monitor Prawniczy 2009 nr 16 s. 884-887
- Typologia zmian konstytucyjnych. w: Konstytucjonalizm polski (2020) s. 1217-1226
- O następstwach wyroków TK w procesie sądowego stosowania prawa w latach 2015-2017. w: Sądownictwo konstytucyjne (2018) s. 83-100
- Podstawowe pojęcia. w: Ochrona danych medycznych: RODO (2018) s. 31-48
- Konstytucyjne prawo do ochrony danych medycznych. w: Ochrona danych medycznych: RODO (2018) s. 49-57
- Adwokat według RODO - administrator czy procesor. Pal. 2018 R. LXIII nr 10 s. 74-78
- Orzecznictwo Trybunału Konstytucyjnego jako źródło prawa (with K. Działocha). w: Minikomentarz dla maksiprofesora (2017) s. 395-411

**Reports:**
- First Global Report on the State of Artificial Intelligence in Legal Practice (2023) — with Araszkiewicz, Zadrożny, Porębski, Constantini, Van Dijck, Ebers, Francesconi, Ghosh, Harašta, Lauritsen, Libal, Maranhao, Medvedeva, Pagallo, Satoh, Schafer, Savelka, Xiong, Chi, Walker, Waltl, Zeleznikow, Żurek
- First Global Report on the State of AI in Legal Practice. Legal Tech Zeitschrift 2024 no 3, p. 226-235

**Book Chapters:**
- Artificial Intelligence and Legal Practice. w: Science, technology and law (2024, Bologna University Press) s. 233-242 — with Natalia Mushak

**Forthcoming:**
- "Human Oversight as a Constitutional Safeguard in AI Governance: Convergence or Parallel Evolution?" — ICON•S Conference 2026, Dublin
- Komentarz do art. 41, 42, 44, 45, 47, 48, 49 AI Act. w: Akt o sztucznej inteligencji. Komentarz (ed. Bieda, Lubasz, Namysłowska, Okoń)
- Second Global Report on the State of AI in Legal Practice (2025/2026)
- AI and Corporate Responsibility – From Fragmented Compliance to Unified Governance. Cambridge Forum on AI: Law and Governance (with Jarosław Greser) — DOI: 10.1017/cfl.2026.10046

#### Historical Publications (2008-2016)

File with catalog of publications added to project directory: "Wykaz publikacji po uzyskaniu stopnia doktora.pdf"

---

### Startup Page Changes

- Add: CEO of AnyLawyer

---

### Media Page Changes

#### Monday Bagel Podcast

- Update: 70+ episodes
- "Browse episodes" button → link to: https://www.youtube.com/@mjackowski/videos
- "Subscribe" button → link to: https://www.youtube.com/@mjackowski

#### Remove

- "Browse by topics" section — DELETE
- Recent episodes section — REPLACE with Most Popular Episodes

#### Most Popular Episodes

Display these 3 episodes with info from YouTube descriptions:
1. https://youtu.be/SaR7_bVyUG0?si=HPUTh-dVUmlFKaor
2. https://youtu.be/sXZHWLL4-9A?si=NIzPY_Di0_OUuFvm
3. https://youtu.be/uScW6Ucj9u4?si=BGdocqXc6Hv3C-xx

#### New Sections Structure

Create these sections below podcast:
1. **Media Inquiries**
2. **Conferences & Events**
3. **Popular Articles**
4. **Speaking Contacts**

For each category: assign weight to items, show top 5 most important first, then rest from newest to oldest.

#### Media Inquiries Links

- https://www.youtube.com/watch?v=8wV5lXB85y8
- https://values.pl/podcast/przywodztwo-w-swiecie-ai-okiem-wybitnego-prawnika/
- https://player.pl/programy-online/dzien-dobry-tvn-odcinki,15232/odcinek-381,S28E381,201407
- https://www.youtube.com/watch?v=BBxlQxA2FGw
- https://www.youtube.com/watch?v=5jFqdTw7ADc&t=8s
- https://www.youtube.com/watch?v=pxiAFZDGSNY
- https://www.youtube.com/watch?v=JHBaYZ8XIZM
- https://www.youtube.com/watch?v=q12Z-GHhgLg

#### Conferences & Events Links

- http://2020.legalmarketday.com/prelegenci/prof-michal-jackowski/
- https://lpm-conference-2022.syskonf.pl
- https://projekty-prawne-konferencja.syskonf.pl
- https://lpm-conference-2020.syskonf.pl
- https://lpm-conference-2021-may.syskonf.pl
- https://infoshare.pl/speakers-list/michal-jackowski-o1744g628c48-one.html
- https://futurelaw.ee/speaker/michal-jackowski/
- https://futurelaw.ee/futurelaw-2024/
- https://www.legaltech-talk.com/agenda-2025/
- https://sites.northwestern.edu/icail2025/agenda/
- https://dsk-kancelaria.pl/blog/michal-jackowski-na-konferencji-icail-2023/
- https://dsk-kancelaria.pl/en/legal-innovations/michal-jackowski-at-jurix-2023-conference/
- https://dsk-kancelaria.pl/en/legal-innovations/michal-jackowski-at-world-technology-law-conference-2024/
- https://archiwum.60mln.pl/kongres-rzeszow-2023
- https://dsk-kancelaria.pl/blog/michal-jackowski-na-idc-cio-summit-w-sopocie/
- https://letsupgrade.pl/upgrade2024
- https://letsupgrade.pl/upgrade23
- https://www.ur.edu.pl/pl/konferencje/rzeszow-ai-summit-2025-next-generation-artificial-intelligence-for-law-science-innovation-and-society/prelegenci
- https://konferencja.ilc.com.pl
- https://conference2024.mlinpl.org
- https://otwarteforumai.pl
- https://pik.org.pl/2025/01/31/jak-w-dobie-ai-zabezpieczyc-swoje-publikacje-webinarium-dla-czlonkow-pik-7-lutego-godz-1100/
- https://youtu.be/vNHBWi3ENl8?si=M24dKxwLWTiRjipa
- https://www.youtube.com/live/xUJjUorcgMQ?si=EXArt4B-EtmROx_b
- https://www.poznan.pl/mim/main/-,p,20323,51385,88268.html

#### Popular Articles Links

- https://www.rp.pl/rzecz-o-prawie/art41430351-michal-jackowski-michal-araszkiewicz-z-ai-zostaniesz-chemikiem-i-prawnikiem
- https://www.rp.pl/rzecz-o-prawie/art40662471-michal-raczkowski-michal-araszkiewicz-o-czym-marza-technologicznie-prawnicy
- https://www.rp.pl/rzecz-o-prawie/art40464061-michal-jackowski-michal-araszkiewicz-polski-prawnik-daleko-za-swiatowymi
- https://www.rp.pl/opinie-prawne/art40296431-sztuczna-inteligencja-w-praktyce-prawa-polska-daleko-za-swiatowymi-trendami
- https://www.eurolatamlex.com/images/newsletter/Newsletter-EuroLatamLex-N14-2022.pdf
- https://wyborcza.biz/biznes/7,177150,26997427,sztuczna-inteligencja-made-in-poland-z-cytatami-z-jana-pawla.html

#### Speaking Contact Agencies

- https://cyber-security-speakers.com/speaker/prof-michal-jackowski
- https://ai-speakers-agency.com/speaker/michal-jackowski
- https://champions-speakers.co.uk/speaker-agent/michal-jackowski

---

### Assets to Download

Logos needed from these organizations:
- LumiAI
- GraceHopper Institute
- International Association of Artificial Intelligence & Law
- World Tech Legal
- World Jurist Association
- ICON'S
- Societas Iuris Publici Europaei (SIPE)
- GigaNet
- Europejska Fundacja Quantum Intelligence
