# ESP Journée Culturelle - Patrimoine Mauritanien

A bilingual (French/Arabic) web experience showcasing Mauritanian intangible cultural heritage. Built for ESP's Cultural Day event.

**Live:** [esp-journeeculturelle.vercel.app](https://esp-journeeculturelle.vercel.app)

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Animated landing with desert dune gradients and sand particles |
| **La Mahadra** | The desert university — UNESCO-recognized traditional education system. Features linked cards (Quran website, PDF viewer) |
| **Musique Traditionnelle** | Azawan music with vinyl-style video players, floating notes animation, and artist profiles |
| **Instruments Traditionnels** | Interactive instrument catalog with type badges, origin info, and hover animations |
| **Jeux Traditionnels** | Traditional games (Anigur, Ekrour, Dhamet) with alternating image/text layouts |

## Features

- **FR/AR Language Toggle** — Full bilingual support with meaningful (non-literal) Arabic translations. RTL layout switches automatically.
- **3D Glass Navigation** — Desktop: floating glass capsule with animated dot indicators. Mobile: bottom tab bar with spring animations.
- **Scroll Animations** — Framer Motion-powered reveal effects, hover interactions, and parallax elements throughout.
- **Responsive Design** — Mobile-first approach. On mobile, each music video is paired with its artist card; on desktop they display as separate grids.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4 + CSS custom properties
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, color tokens, container system
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page — wraps everything in LanguageProvider
├── components/
│   ├── Navbar.tsx            # 3D glass sidebar (desktop) + bottom bar (mobile)
│   ├── HeroSection.tsx       # Animated hero with desert gradient
│   ├── MahadraSection.tsx    # Mahadra section with video, stats, feature cards
│   ├── MusicSection.tsx      # Music videos + artist cards (paired on mobile)
│   ├── InstrumentsSection.tsx # Instrument table with type/origin badges
│   ├── GamesSection.tsx      # Traditional games with alternating layouts
│   ├── SectionTitle.tsx      # Reusable section header component
│   ├── ScrollReveal.tsx      # Scroll-triggered animation wrapper
│   ├── YouTubeEmbed.tsx      # Privacy-friendly YouTube embed
│   └── SandParticles.tsx     # Floating particle effect for hero
└── lib/
    ├── translations.ts       # FR + AR content (all text lives here)
    ├── LanguageContext.tsx    # React context for language toggle + RTL
    └── content-fr.ts         # Legacy French-only content (unused)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed automatically via Vercel. For manual deployment:

```bash
vercel --prod
```
