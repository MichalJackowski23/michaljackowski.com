# Content Model & Bilingual Strategy — michaljackowski.com

## 1. Content Architecture Overview

### Content Types

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CONTENT TYPES                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  SINGLETON (one instance per language)                                  │
│  ├── Bio / About                                                        │
│  ├── Homepage content                                                   │
│  └── Contact information                                                │
│                                                                         │
│  COLLECTION (multiple instances)                                        │
│  ├── Affiliations (DSK, AnyLawyer, Cambridge, etc.)                    │
│  ├── Publications (articles, books, reports)                           │
│  ├── Speaking engagements (past and upcoming)                          │
│  ├── Podcast episodes (Monday Bagel)                                   │
│  ├── AI Projects (implemented projects)                                │
│  └── Media mentions (interviews, features)                             │
│                                                                         │
│  TAXONOMY (categorization)                                              │
│  ├── Publication types (article, book, chapter, report)                │
│  ├── Speaking types (keynote, panel, lecture, workshop)                │
│  ├── Project categories (legal_practice, compliance, automation)       │
│  ├── Podcast topics (ai_governance, legaltech, future_of_law, etc.)   │
│  ├── Pillars (practice, governance, academia, media, startup)          │
│  └── Topics (AI governance, LegalTech, GDPR, etc.)                     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Content Schemas

### 2.1 Bio / About (Singleton)

**File:** `content/{lang}/bio.yaml`

```yaml
# content/en/bio.yaml
name: "Michał Jackowski"
title: "Prof."
full_title: "Prof. Michał Jackowski"

tagline: "Legal Scholar · AI Governance Expert · Attorney at Law"

headline: "Shaping the governance of artificial intelligence at the intersection of law, policy, and practice."

photo:
  src: "/images/michal-jackowski.jpg"
  alt: "Prof. Michał Jackowski"

summary_short: |
  Professor of law specializing in artificial intelligence and law, legal innovation, and digital regulation. Visiting Scholar at University of Cambridge Faculty of Law.

summary_full: |
  Prof. Michał Jackowski is a professor of law specializing in artificial intelligence and law, legal innovation, and digital regulation. He is affiliated with the University of Cambridge Faculty of Law as a Visiting Scholar and actively contributes to international work on AI governance and standards.

  [Full biography text continues...]

research_areas:
  - "Governance of general-purpose AI systems"
  - "Human oversight standards in automated decision-making"
  - "LegalTech transformation of legal services"
  - "Institutional design of trustworthy AI ecosystems"
  - "Comparative AI regulation in Europe and globally"
  - "The future role of lawyers in AI-mediated societies"

languages:
  - language: "Polish"
    level: "Native"
  - language: "English"
    level: "Full professional"
  - language: "German"
    level: "Full professional"
  - language: "Russian"
    level: "Professional working"
  - language: "Chinese"
    level: "HSK1 Elementary"

social_links:
  - platform: "LinkedIn"
    url: "https://www.linkedin.com/in/michal-jackowski-prof/"
    icon: "linkedin"
  - platform: "Email"
    url: "mailto:contact@michaljackowski.com"
    icon: "mail"

cv_pdf: "/documents/cv-michal-jackowski.pdf"
```

### 2.2 Affiliation (Collection)

**Directory:** `content/{lang}/affiliations/`

```yaml
# content/en/affiliations/dsk.yaml
id: "dsk"
name: "DSK Kancelaria"
full_name: "DSK Depa Szmit Kuźmiak Jackowski"
type: "law_firm"

role: "Partner & Co-founder"
current: true
start_date: 2010-01-01  # approximate
end_date: null

logo: "/images/logos/dsk.svg"
website: "https://dfrk.pl"

description_short: "Multidisciplinary law firm with 100+ team members advising on regulatory strategy, digital compliance, and legal innovation."

description_full: |
  DSK Kancelaria (DSK Depa Szmit Kuźmiak Jackowski) is a multidisciplinary law firm advising technology companies, infrastructure investors, and large organizations on regulatory strategy, digital compliance (including DORA, AI Act, and data governance), LegalTech transformation, and innovation-driven legal services.

  Prof. Jackowski leads initiatives related to AI adoption in legal practice and the development of collaborative human-AI legal workflows.

key_activities:
  - "Leading AI adoption initiatives in legal practice"
  - "Developing human-AI collaborative legal workflows"
  - "Advising on AI Act and DORA compliance"
  - "LegalTech transformation consulting"

team_size: "100+"
location: "Poland"

# Related content
related_publications: []
related_speaking: []
related_projects: ["ai-contract-review", "compliance-automation"]

# Display settings
featured: true
order: 1
pillar: "practice"  # practice | governance | academia | media | startup
```

```yaml
# content/en/affiliations/eu-ai-office.yaml
id: "eu-ai-office"
name: "EU AI Office"
full_name: "European Union AI Office"
type: "regulatory_body"

role: "Advisor"
current: true
start_date: 2024-01-01

logo: "/images/logos/eu-ai-office.svg"
website: "https://digital-strategy.ec.europa.eu/en/policies/ai-office"

description_short: "Cooperating on implementation frameworks for general-purpose AI systems and contributing to the Code of Practice for large language models."

description_full: |
  Prof. Jackowski serves as an advisor cooperating with the EU AI Office on implementation frameworks for general-purpose AI systems. He is a member of expert groups working on the Code of Practice for large language models under the EU AI Act.

  His work focuses on regulatory infrastructure for general-purpose AI and the evolving institutional architecture of trustworthy AI deployment.

key_activities:
  - "Implementation frameworks for GPAI systems"
  - "Code of Practice for large language models"
  - "EU AI Act implementation guidance"

featured: true
order: 1
pillar: "governance"
```

### 2.3 Publication (Collection)

**Directory:** `content/{lang}/publications/`

```yaml
# content/en/publications/global-report-ai-legal-2024.yaml
id: "global-report-ai-legal-2024"
type: "report"  # article | book | chapter | report | opinion

title: "Global Report on the State of Artificial Intelligence in Legal Practice"
subtitle: "First Edition"

date: 2024-06-01
year: 2024

authors:
  - "Michał Jackowski"
  - "[Co-authors]"

role: "Co-editor & Co-author"

publication: "Independent publication"
publisher: null

abstract: |
  One of the largest international empirical studies examining how lawyers and legal organizations adopt artificial intelligence tools across jurisdictions.

partners:
  - name: "CCBE"
    logo: "/images/logos/ccbe.svg"
  - name: "ITechLaw"
    logo: "/images/logos/itechlaw.svg"
  - name: "AIJA"
    logo: "/images/logos/aija.svg"
  - name: "World Jurists Association"
    logo: "/images/logos/wja.svg"

links:
  - type: "external"
    url: "https://globalailawreport.com"
    label: "View full report"
    primary: true

topics:
  - "AI in legal practice"
  - "LegalTech adoption"
  - "Empirical research"

featured: true
featured_on_homepage: true

# For dedicated page
has_dedicated_page: true
page_slug: "global-report"
```

```yaml
# content/en/publications/medical-data-protection-2018.yaml
id: "medical-data-protection-2018"
type: "book"

title: "Medical Data Protection. GDPR 2018"
subtitle: null

date: 2018-05-01
year: 2018

authors:
  - "Michał Jackowski"

publisher: "Wolters Kluwer"
isbn: "978-83-xxx-xxxx-x"

abstract: |
  Comprehensive analysis of medical data protection requirements under the General Data Protection Regulation.

links:
  - type: "publisher"
    url: "https://www.wolterskluwer.pl/..."
    label: "Publisher website"

topics:
  - "GDPR"
  - "Medical data"
  - "Data protection"

featured: false
```

### 2.4 Speaking Engagement (Collection)

**Directory:** `content/{lang}/speaking/`

```yaml
# content/en/speaking/icons-2026.yaml
id: "icons-2026"
status: "upcoming"  # upcoming | past

event_name: "ICON•S Annual Conference 2026"
event_website: "https://icons-society.org"

title: "Human Oversight as a Constitutional Safeguard in AI Governance"
type: "presentation"  # keynote | panel | presentation | workshop | lecture

date: 2026-06-15
end_date: 2026-06-17  # for multi-day events

location:
  city: "Dublin"
  country: "Ireland"
  venue: "Trinity College Dublin"

description: |
  Presenting research on human oversight mechanisms in AI governance frameworks, examining constitutional implications of automated decision-making systems.

co_speakers: []

links:
  - type: "event"
    url: "https://icons-conference.org/2026"
    label: "Event website"

topics:
  - "Human oversight"
  - "AI governance"
  - "Constitutional law"

featured: true
```

```yaml
# content/en/speaking/futurelaw-2026.yaml
id: "futurelaw-2026"
status: "upcoming"

event_name: "FutureLaw Conference 2026"
title: "AI Transformation in Legal Service Delivery"
type: "keynote"

date: 2026-03-20
location:
  city: "San Francisco"
  country: "USA"

featured: true
```

### 2.5 Podcast Episode (Collection)

**Directory:** `content/{lang}/podcast/`

**Organization Strategy:** Episodes organized by primary topic for easier navigation. All episodes included, grouped thematically.

```yaml
# content/en/podcast/episode-042.yaml
id: "episode-042"
episode_number: 42
season: 2

title: "The Future of AI Governance in Europe"
subtitle: "A conversation with [Guest Name]"

date: 2024-11-15
duration: "45:32"  # mm:ss

guest:
  name: "Guest Name"
  title: "Title"
  organization: "Organization"
  photo: "/images/podcast/guests/guest-name.jpg"

# Short description for homepage/cards (3 sentences max)
description_short: |
  Exploring the evolving landscape of AI regulation in Europe with insights from a leading policy expert. We discuss implementation challenges and the role of standardization bodies. Essential listening for anyone following EU AI Act developments.

description_full: |
  In this episode, we discuss the implementation challenges of the EU AI Act, the role of standardization bodies, and the future of GPAI regulation.

  Topics covered:
  - EU AI Act implementation timeline
  - Role of CEN-CENELEC in AI standards
  - Challenges for general-purpose AI providers
  - Future of AI governance frameworks

audio_url: "https://anchor.fm/monday-bagel/episode-042"
video_url: "https://youtube.com/watch?v=xxxxx"  # optional

platforms:
  - name: "Spotify"
    url: "https://open.spotify.com/episode/xxxxx"
  - name: "Apple Podcasts"
    url: "https://podcasts.apple.com/podcast/xxxxx"
  - name: "YouTube"
    url: "https://youtube.com/watch?v=xxxxx"

transcript: "/documents/podcast/episode-042-transcript.md"  # optional

# Primary topic for grouping (one per episode)
primary_topic: "ai_governance"  # see podcast_topics enum below

# Secondary topics for filtering
topics:
  - "EU AI Act"
  - "AI governance"
  - "Policy"

featured: true
```

### Podcast Topic Organization

Episodes are grouped by primary topic on the Monday Bagel page:

```yaml
# Podcast topic taxonomy
podcast_topics:
  - id: "ai_governance"
    label_en: "AI Governance & Regulation"
    label_pl: "Governance i regulacje AI"
    description: "EU AI Act, policy frameworks, regulatory compliance"
    order: 1

  - id: "legaltech"
    label_en: "LegalTech & Innovation"
    label_pl: "LegalTech i innowacje"
    description: "AI in legal practice, legal technology transformation"
    order: 2

  - id: "future_of_law"
    label_en: "Future of Legal Profession"
    label_pl: "Przyszłość zawodu prawnika"
    description: "How AI changes legal work, skills, education"
    order: 3

  - id: "ai_ethics"
    label_en: "AI Ethics & Society"
    label_pl: "Etyka AI i społeczeństwo"
    description: "Responsible AI, human oversight, societal impact"
    order: 4

  - id: "digital_rights"
    label_en: "Digital Rights & Data"
    label_pl: "Prawa cyfrowe i dane"
    description: "GDPR, data protection, digital rights"
    order: 5

  - id: "interviews"
    label_en: "Expert Interviews"
    label_pl: "Wywiady z ekspertami"
    description: "Conversations with leading scholars and practitioners"
    order: 6
```

**Monday Bagel Page Layout:**
- Hero with podcast description
- Topic navigation (tabs or accordion)
- Episodes grouped under each topic
- Each episode shows: title, guest, date, 3-sentence description, listen links

### 2.6 AI Project (Collection)

**Directory:** `content/{lang}/projects/`

```yaml
# content/en/projects/ai-contract-review.yaml
id: "ai-contract-review"
name: "AI-Assisted Contract Review System"

category: "legal_practice"  # legal_practice | compliance | automation | governance
status: "completed"  # completed | ongoing

year: 2024
client_type: "Large enterprise"  # anonymized

description_short: |
  Implementation of AI-powered contract analysis for a major corporate legal department.

description_full: |
  Designed and implemented an AI-assisted contract review workflow that reduced contract review time by 60% while maintaining legal accuracy standards.

  The project involved:
  - Custom model fine-tuning for contract clause extraction
  - Integration with existing document management systems
  - Development of human oversight protocols
  - Training program for legal team

technologies:
  - "Large Language Models"
  - "Document processing"
  - "Workflow automation"

outcomes:
  - "60% reduction in contract review time"
  - "Standardized clause library with 500+ templates"
  - "Human oversight framework compliant with AI Act requirements"

related_affiliations: ["dsk", "anylawyer"]

featured: true
```

### 2.7 Media Mention (Collection)

**Directory:** `content/{lang}/media/`

```yaml
# content/en/media/interview-legal-tech-2024.yaml
id: "interview-legal-tech-2024"
type: "interview"  # interview | article | quote | feature | podcast_appearance

title: "The Future of Legal AI: Interview with Prof. Jackowski"
outlet: "Legal Technology Today"
outlet_logo: "/images/logos/media/legal-tech-today.svg"

date: 2024-09-15

url: "https://legaltechtoday.com/interview-jackowski"

description: |
  In-depth interview discussing the implications of the EU AI Act for legal practice and the transformation of legal services through AI.

topics:
  - "EU AI Act"
  - "Legal AI"
  - "LegalTech"

featured: false
```

### 2.8 Homepage Content (Singleton)

**File:** `content/{lang}/homepage.yaml`

```yaml
# content/en/homepage.yaml
hero:
  headline: "Shaping the governance of artificial intelligence at the intersection of law, policy, and practice."
  cta_primary:
    label: "About me"
    url: "/en/about"
  cta_secondary:
    label: "Get in touch"
    url: "/en/contact"

intro:
  text: |
    Prof. Michał Jackowski is a legal scholar and attorney shaping AI governance frameworks at the European level. He combines academic research with practical legal experience, advising on AI regulation, building legal technology, and educating the next generation of AI-aware lawyers.

pillars:
  # Row 1: Three main pillars
  - id: "practice"
    title: "Practice"
    description: "Legal advisory and AI implementation"
    affiliations: ["dsk"]
    link: "/en/practice"
    row: 1
  - id: "governance"
    title: "Governance"
    description: "EU-level policy and international standards"
    affiliations: ["eu-ai-office", "grai", "itechlaw", "piit", "cen-cenelec"]
    link: "/en/governance"
    row: 1
  - id: "academia"
    title: "Academia"
    description: "Research, publications, and education"
    affiliations: ["cambridge", "oup", "global-report"]
    link: "/en/academia"
    row: 1
  # Row 2: Two additional pillars (centered)
  - id: "media"
    title: "Media"
    description: "Podcast and public presence"
    affiliations: ["monday-bagel"]
    link: "/en/media"
    row: 2
  - id: "startup"
    title: "Startup"
    description: "LegalTech innovation"
    affiliations: ["anylawyer"]
    link: "/en/startup"
    row: 2

featured_section:
  title: "Recent & Upcoming"
  items: 3  # number of items to show (auto-populated)
  # Each featured item includes 3-sentence description

affiliations_strip:
  show: true
  title: "Affiliations"
  logos:
    - id: "cambridge"
    - id: "eu-ai-office"
    - id: "dsk"
    - id: "itechlaw"
    - id: "piit"
    - id: "cen-cenelec"
    - id: "oup"
    - id: "anylawyer"

contact_cta:
  title: "Get in touch"
  description: "Speaking inquiries · Media requests · Collaboration"
  button_label: "Contact"
  button_url: "/en/contact"
```

---

## 3. Bilingual Content Strategy

### 3.1 Directory Structure

```
/content
├── /en                          # English content
│   ├── bio.yaml
│   ├── homepage.yaml
│   ├── contact.yaml
│   ├── /affiliations
│   │   ├── dsk.yaml
│   │   ├── anylawyer.yaml
│   │   ├── cambridge.yaml
│   │   ├── eu-ai-office.yaml
│   │   ├── grai.yaml
│   │   ├── itechlaw.yaml
│   │   └── piit.yaml
│   ├── /publications
│   │   ├── global-report-2024.yaml
│   │   └── ...
│   ├── /speaking
│   │   └── ...
│   ├── /podcast
│   │   └── ...
│   ├── /projects
│   │   └── ...
│   └── /media
│       └── ...
│
└── /pl                          # Polish content (mirrored)
    ├── bio.yaml
    ├── homepage.yaml
    ├── kontakt.yaml
    ├── /affiliations
    │   └── (same files, Polish content)
    ├── /publikacje
    │   └── ...
    ├── /wystapienia
    │   └── ...
    ├── /podcast
    │   └── ...
    ├── /projekty
    │   └── ...
    └── /media
        └── ...
```

### 3.2 Shared Assets

Some content doesn't need translation:

```
/content
├── /shared
│   ├── /images
│   │   ├── michal-jackowski.jpg
│   │   └── /logos
│   │       ├── dsk.svg
│   │       ├── cambridge.svg
│   │       └── ...
│   └── /documents
│       ├── cv-en.pdf
│       ├── cv-pl.pdf
│       └── /publications
│           └── global-report-2024.pdf
```

### 3.3 Translation Mapping

Each content file uses the same `id` across languages:

| English File | Polish File | ID |
|--------------|-------------|-----|
| `en/affiliations/dsk.yaml` | `pl/affiliations/dsk.yaml` | `dsk` |
| `en/publications/global-report-2024.yaml` | `pl/publikacje/raport-globalny-2024.yaml` | `global-report-2024` |

### 3.4 Language-Specific Fields

Some fields may differ by language:

```yaml
# content/en/affiliations/dsk.yaml
id: "dsk"
name: "DSK Kancelaria"
description_short: "Multidisciplinary law firm..."

# content/pl/affiliations/dsk.yaml
id: "dsk"
name: "DSK Kancelaria"
description_short: "Wielodziedzinowa kancelaria prawna..."
```

### 3.5 Language-Agnostic Fields

These fields are identical and could be shared:

- `id`
- `date` / dates
- `url` links
- `logo` paths
- `photo` paths
- `order`
- `featured`
- `topics` (if using IDs)

### 3.6 URL Localization

| Section | English URL | Polish URL |
|---------|-------------|------------|
| About | `/en/about` | `/pl/o-mnie` |
| Practice | `/en/practice` | `/pl/praktyka` |
| Governance | `/en/governance` | `/pl/governance` |
| Academia | `/en/academia` | `/pl/nauka` |
| Publications | `/en/academia/publications` | `/pl/nauka/publikacje` |
| Speaking | `/en/speaking` | `/pl/wystapienia` |
| Podcast | `/en/monday-bagel` | `/pl/monday-bagel` |
| Contact | `/en/contact` | `/pl/kontakt` |

### 3.7 UI Strings

Static UI text stored separately:

```yaml
# content/i18n/en.yaml
nav:
  about: "About"
  practice: "Practice"
  governance: "Governance"
  academia: "Academia"
  speaking: "Speaking"
  podcast: "Monday Bagel"
  contact: "Contact"

buttons:
  learn_more: "Learn more"
  read_more: "Read more"
  download_pdf: "Download PDF"
  view_all: "View all"
  get_in_touch: "Get in touch"
  listen_now: "Listen now"

labels:
  upcoming: "Upcoming"
  past: "Past"
  featured: "Featured"
  latest: "Latest"

footer:
  copyright: "© {year} Prof. Michał Jackowski"

podcast:
  episode: "Episode"
  duration: "Duration"
  listen_on: "Listen on"
```

```yaml
# content/i18n/pl.yaml
nav:
  about: "O mnie"
  practice: "Praktyka"
  governance: "Governance"
  academia: "Nauka"
  speaking: "Wystąpienia"
  podcast: "Monday Bagel"
  contact: "Kontakt"

buttons:
  learn_more: "Dowiedz się więcej"
  read_more: "Czytaj dalej"
  download_pdf: "Pobierz PDF"
  view_all: "Zobacz wszystkie"
  get_in_touch: "Skontaktuj się"
  listen_now: "Słuchaj teraz"

labels:
  upcoming: "Nadchodzące"
  past: "Archiwalne"
  featured: "Wyróżnione"
  latest: "Najnowsze"

footer:
  copyright: "© {year} Prof. Michał Jackowski"

podcast:
  episode: "Odcinek"
  duration: "Czas trwania"
  listen_on: "Słuchaj na"
```

---

## 4. Content Relationships

### 4.1 Cross-References

```yaml
# In a publication
related_affiliations:
  - "dsk"
  - "itechlaw"
related_speaking:
  - "icons-2026"
related_topics:
  - "ai-governance"
  - "human-oversight"
```

### 4.2 Automatic Aggregations

The system should automatically:

1. **Homepage "Recent & Upcoming"** — Pull latest items from publications, speaking, podcast
2. **Affiliation pages** — Show related publications, speaking events
3. **Topic pages (optional)** — Aggregate all content tagged with a topic

### 4.3 Featured Content Flags

```yaml
featured: true                    # Show in section listings
featured_on_homepage: true        # Include in homepage featured section
has_dedicated_page: true          # Generate standalone page
```

---

## 5. Content Editing Workflow

### 5.1 Adding a New Publication

1. Create file: `content/en/publications/new-publication.yaml`
2. Fill required fields:
   - `id`, `type`, `title`, `date`, `year`
3. Add optional fields as needed
4. Create Polish version: `content/pl/publikacje/new-publication.yaml`
5. Commit and deploy

### 5.2 Adding a Speaking Engagement

1. Create file: `content/en/speaking/event-name.yaml`
2. Fill required fields:
   - `id`, `status`, `event_name`, `title`, `type`, `date`, `location`
3. Create Polish version if needed
4. Mark `featured: true` to show on homepage
5. Commit and deploy

### 5.3 Adding a Podcast Episode

1. Create file: `content/en/podcast/episode-XXX.yaml`
2. Fill required fields:
   - `id`, `episode_number`, `title`, `date`, `duration`
   - `audio_url`, `platforms`
3. Add guest information if applicable
4. Commit and deploy

### 5.4 Updating Bio

1. Edit `content/en/bio.yaml`
2. Update relevant fields
3. Edit `content/pl/bio.yaml` for Polish version
4. Commit and deploy

---

## 6. Validation Rules

### Required Fields by Content Type

| Content Type | Required Fields |
|--------------|-----------------|
| Affiliation | `id`, `name`, `role`, `current`, `pillar` |
| Publication | `id`, `type`, `title`, `date`, `year` |
| Speaking | `id`, `status`, `event_name`, `title`, `type`, `date` |
| Podcast | `id`, `episode_number`, `title`, `date`, `audio_url` |
| Project | `id`, `name`, `category`, `status`, `year` |
| Media | `id`, `type`, `title`, `outlet`, `date`, `url` |

### Enum Values

```yaml
# Publication types
publication_types:
  - article
  - book
  - chapter
  - report
  - opinion

# Speaking types
speaking_types:
  - keynote
  - panel
  - presentation
  - workshop
  - lecture

# Speaking status
speaking_status:
  - upcoming
  - past

# Project categories
project_categories:
  - legal_practice
  - compliance
  - automation
  - governance

# Affiliation pillars (Five Pillars)
pillars:
  - practice    # DSK, AI Projects
  - governance  # EU AI Office, GRAI, ITechLaw, PIIT, CEN-CENELEC
  - academia    # Cambridge, OUP, Global Report, Teaching
  - media       # Monday Bagel, Press mentions
  - startup     # AnyLawyer
```

---

## 7. Migration & Initial Content

### Phase 1: Core Content

1. Bio (English + Polish)
2. All affiliations (8 items)
3. Homepage configuration

### Phase 2: Collection Content

1. Publications (start with 5-10 key items)
2. Speaking (upcoming + recent past)
3. Podcast (latest 5-10 episodes)

### Phase 3: Extended Content

1. Full publication archive
2. Complete speaking history
3. All podcast episodes
4. Media mentions
5. AI projects

---

## Summary

This content model provides:

- **Structured, typed content** for consistency
- **Bilingual architecture** with clear mapping
- **Easy editing** through YAML files
- **Flexible relationships** between content types
- **Scalable structure** for future growth
- **Separation of content and presentation**

All content lives in `/content/{lang}/` directories, with shared assets in `/content/shared/`. UI strings are centralized in `/content/i18n/`. The system supports both singleton pages (bio, homepage) and collection pages (publications, speaking) with consistent schemas.
