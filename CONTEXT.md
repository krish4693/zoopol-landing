# Zoopol Landing Page — Project Context Document

This document describes the entire codebase in detail for onboarding, AI context, or handoffs.

---

## 1. Project overview

| Field | Value |
|-------|--------|
| **Name** | Landing Page Design (Copy) / Zoopol landing |
| **Purpose** | Marketing landing page for Zoopol: connects employers and workers for household tasks, one-day jobs, and quick help. |
| **Origin** | Exported from Figma (Figma design: [Landing Page Design (Copy)](https://www.figma.com/design/PBfULSMDnpIQH64tgq1UED/Landing-Page-Design--Copy-)). |
| **Type** | Client-side SPA (Single Page Application): one HTML shell, React Router for in-app navigation. |
| **Hosting** | Vercel (see `vercel.json`). Build output: `dist/`. |

---

## 2. Tech stack

- **Runtime**: Node (for tooling only); browser for app.
- **Framework**: React 18.3, TypeScript.
- **Build**: Vite 6.3 (`vite.config.ts`); dev server port 3000, open in browser.
- **Routing**: React Router DOM 7.9 (BrowserRouter, Routes, Route, Outlet, Link, Navigate, useLocation).
- **Styling**: Tailwind CSS v4 (via `src/index.css`); Google Font **Manrope** (300–800); design tokens in `@layer theme` and `@layer base` in `index.css`.
- **UI primitives**: Radix UI (accordion, dialog, dropdown, tabs, etc.); shadcn/ui-style components in `src/components/ui/` (see Attributions).
- **Animation**: `motion` (Motion for React).
- **Icons**: Lucide React 0.487.
- **Other**: class-variance-authority (cva), clsx, tailwind-merge, react-hook-form, recharts, sonner, vaul (drawer), cmdk (command), embla-carousel, etc. (see `package.json`).

**Scripts** (from `package.json`):

- `npm run dev` — start Vite dev server.
- `npm run build` — production build → `dist/`.

---

## 3. Repository structure (high level)

```
Landing Page Design/
├── index.html              # Single HTML entry; no favicon or SEO meta yet
├── package.json
├── package-lock.json
├── vite.config.ts
├── vercel.json             # buildCommand, outputDirectory: dist, SPA rewrites
├── README.md
├── CONTEXT.md              # This file
├── src/
│   ├── main.tsx            # createRoot, BrowserRouter, App, index.css
│   ├── App.tsx             # Routes and route definitions
│   ├── index.css           # Tailwind + Manrope + theme/base/utilities
│   ├── Attributions.md     # shadcn/ui, Unsplash
│   ├── styles/
│   │   └── globals.css     # Tailwind @apply, Manrope, :root CSS variables
│   ├── guidelines/
│   │   └── Guidelines.md  # Placeholder AI guidelines
│   ├── pages/              # Route-level components (thin wrappers or full UI)
│   ├── components/         # Layout, feature, policy, and figma components
│   │   ├── ui/             # shadcn-style primitives (48 files)
│   │   └── figma/          # ImageWithFallback
│   └── assets/             # Referenced by vite alias (figma:asset/...)
├── dist/                   # Production build output (git may ignore)
└── build/                  # Alternate build output (if used)
```

There is **no `public/`** directory in the repo (no `robots.txt`, `sitemap.xml`, or favicon at root).

---

## 4. Application entry and routing

**Entry** (`src/main.tsx`):

- Renders into `#root`.
- Wraps app in `<BrowserRouter>`.
- Imports `./index.css` (global styles).

**Routes** (`src/App.tsx`):

- All routes are children of `<Layout />` (Outlet + Footer; no shared Header in Layout).
- **Index**: `/` → `HomePage`.
- **Policies**: `/privacy-policy` → `PrivacyPolicyPage`, `/terms` → `TermsPage`, `/refund-policy` → `RefundPolicyPage`.
- **Contact**: `/contact` → `ContactPage`.
- **Catch-all**: `*` → `<Navigate to="/" replace />`.

Layout does **not** render `Header`; `Header.tsx` exists but is **never imported** anywhere (dead code unless added to Layout or a page).

---

## 5. Layout and global behavior

- **Layout** (`src/components/Layout.tsx`): `min-h-screen bg-[#FDFDFD]`, `<ScrollToTop />`, `<main><Outlet /></main>`, `<Footer />`.
- **ScrollToTop** (`src/components/ScrollToTop.tsx`): On `pathname` change, scrolls window to top (no UI).
- **Footer** (`src/components/Footer.tsx`): Dark footer with logo (Link to `/`), “© 2025 Zoopol”, links to `/privacy-policy`, `/terms`, `/refund-policy`, `/contact`. Uses `figma:asset/517df0d5670810621a7e0624844181007d0f402d.png` for logo.
- **Header** (`src/components/Header.tsx`): Not used. If used: logo, conditional nav for home (#home, #features, #how-it-works, #faq), Log In (ghost) and Sign Up (primary) buttons.

---

## 6. Pages and main content

### 6.1 HomePage (`src/pages/HomePage.tsx`)

- **Sections in order**: Hero → HowItWorks → Features → FAQ → FinalCTA.
- **Hero**: Full-width section `#home`, dark container (`bg-gray-900`), decorative SVG lines (blue #156BFC), badge (“+10 thousands of workers…”), headline “HIRE IN MINUTES. WORK IN MINUTES.”, subcopy about Zoopol, app store image (figma asset), 4 worker cards (gradient cards: Cleaning, Gardening, Handyman, Painting) with Unsplash images via `ImageWithFallback`, ratings, names.
- **HowItWorks**: Section `#how-it-works`; tabbed “For Job Posters” / “For Workers” with steps; motion + optional auto-switch; uses `ImageWithFallback`.
- **Features**: Section `#features`; “Why Choose Zoopol”; grid of 6 feature cards (image, title, description); motion on scroll; images from Unsplash via `ImageWithFallback`.
- **FAQ**: Section `#faq`; accordion (Radix/shadcn) of 6 Q&As (employers/workers, verification, multiple workers, payment, ratings, safety).
- **FinalCTA**: Dark rounded CTA block; headline “Simple jobs. Trusted workers. Fast payments.”; app store image link.

**Assets**: `figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png` (app store buttons); logo asset used in Footer/Header. Vite aliases in `vite.config.ts` map these to `src/assets/` paths.

### 6.2 Policy and contact pages

- **PrivacyPolicyPage** → renders `<PrivacyPolicy />`.
- **TermsPage** → renders `<Terms />`.
- **RefundPolicyPage** → renders `<RefundPolicy />`.
- **ContactPage** → renders `<Contact />`.

All policy components share the same pattern: full-width section, `ReadingProgress` bar at top, white card with title (h2), last updated, then either a sidebar + content (Privacy) or stacked (Terms/Refund) with `TableOfContents` (anchor links to section IDs). Policy content is long-form text with sections (h3), lists, and dividers. Contact is a single card with Email (zoopol@gmail.com) and Phone (+91 9497429989), plus “Back to top” link.

**Section IDs (for ToC / deep links)**:

- **PrivacyPolicy**: info-we-collect, use-of-info, share-info, storage-security, choices-rights, retention, children, external-payments, changes.
- **Terms**: definitions, eligibility, user-accounts, platform-role, job-posting, verification, ratings, payments-fees, cancellations, conduct, chat.
- **RefundPolicy**: payments-note, employer-cancellations, worker-cancellations, refunds-disputes, group-jobs, completion-verification, dispute-resolution, abuse, changes.

---

## 7. Key components (non-UI)

| Component | Role |
|-----------|------|
| **Layout** | Shell: ScrollToTop, Outlet, Footer. |
| **Footer** | Site footer with logo and policy/contact links. |
| **Header** | Unused; nav + auth buttons for home. |
| **ScrollToTop** | Scroll to top on route change. |
| **Features** | Home: 6 feature cards with image/title/description; motion. |
| **HowItWorks** | Home: tabbed steps for posters vs workers; motion; optional auto-switch. |
| **FAQ** | Home: accordion of 6 items. |
| **FinalCTA** | Home: dark CTA + app store image. |
| **Contact** | Contact page: email, phone, back to top. |
| **PrivacyPolicy** | Privacy policy content + ReadingProgress + TableOfContents. |
| **Terms** | Terms content + ReadingProgress + TableOfContents. |
| **RefundPolicy** | Refund policy content + ReadingProgress + TableOfContents. |
| **TableOfContents** | Nav list of anchor links; receives `items: { id, title }[]` and optional `title`. |
| **ReadingProgress** | Fixed top progress bar (scroll %); used on policy pages. |
| **ImageWithFallback** | Wraps `<img>`, shows fallback on error (inline SVG placeholder). |

---

## 8. UI component library (`src/components/ui/`)

shadcn/ui-style components built on Radix (and a few other libs). Used in the app: **Button**, **Accordion** (FAQ). Many others are available but unused on the main flows.

**List**: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toggle, toggle-group, tooltip, use-mobile, utils.

Imports often use versioned package names (e.g. `lucide-react@0.487.0`, `@radix-ui/react-accordion@1.2.3`) resolved via `vite.config.ts` aliases.

---

## 9. Styling and design tokens

- **Global CSS**: `src/index.css` (Tailwind layers, Manrope, theme variables, base typography). `src/styles/globals.css` imports Manrope and Tailwind layers and sets `:root` and body/h/button styles.
- **Primary brand blue**: `#156BFC` (buttons, links, accents, progress bar). Hover: `#1152CC`.
- **Backgrounds**: Page `#FDFDFD`; hero/CTA/footer `gray-900`; cards white or light gray (`#E3F2FD`, `#F4F8FB`).
- **Typography**: Manrope; h1 800, h2 700/40px, h3–h6 600; body/buttons as in base layer.
- **Spacing**: Tailwind spacing scale; sections use `py-16` / `py-20` / `lg:py-24` etc.; container `container mx-auto` with max-widths.

---

## 10. Configuration

- **vite.config.ts**: React plugin; resolve extensions; many aliases for Radix, motion, lucide, figma assets, and `@` → `./src`. Build target `esnext`, `outDir: 'dist'`. Server port 3000, open.
- **vercel.json**: `buildCommand: npm run build`, `outputDirectory: dist`, rewrites `(.*)` → `/index.html` (SPA).
- **index.html**: Only charset, viewport, and title “Landing Page Design (Copy)”. No favicon, no meta description, no Open Graph or Twitter tags.

---

## 11. Data and content

- **Copy**: All visible text is in components (no CMS or i18n). Policy “Last Updated” is November 27, 2025.
- **Contact**: Email `zoopol@gmail.com`, phone `+91 9497429989`.
- **External images**: Unsplash URLs (with referral params) in HomePage and Features; failure handled by `ImageWithFallback`.
- **No backend or API**: Static front-end only.

---

## 12. Notable implementation details

- **Header**: Implemented but never imported; can be wired in Layout or HomePage only.
- **Figma assets**: Imported via alias `figma:asset/<id>.png`; actual files under `src/assets/` (e.g. logo and app store image).
- **Policy ToC**: Privacy uses a two-column layout (ToC sidebar on md+); Terms and Refund use a single column with ToC above content on md+.
- **Single h1**: Only HomePage has an `<h1>`; policy and contact pages use `<h2>` for the main page title (SEO improvement: use one h1 per page).
- **Accessibility**: Some `aria-hidden` on decorative icons; focus/keyboard behavior from Radix/shadcn.

---

## 13. File and folder reference

| Path | Purpose |
|------|---------|
| `index.html` | HTML entry; root div and script to `main.tsx`. |
| `src/main.tsx` | React root, BrowserRouter, App, index.css. |
| `src/App.tsx` | Route tree and Layout. |
| `src/index.css` | Tailwind + theme + base styles (long). |
| `src/styles/globals.css` | Manrope, Tailwind layers, :root, typography. |
| `src/pages/*.tsx` | HomePage, PrivacyPolicyPage, TermsPage, RefundPolicyPage, ContactPage. |
| `src/components/Layout.tsx` | Outlet, ScrollToTop, Footer. |
| `src/components/Footer.tsx` | Logo, copyright, policy/contact links. |
| `src/components/Header.tsx` | Unused; nav + auth. |
| `src/components/ScrollToTop.tsx` | Scroll on route change. |
| `src/components/Features.tsx` | Home features grid. |
| `src/components/HowItWorks.tsx` | Home tabbed steps. |
| `src/components/FAQ.tsx` | Home accordion. |
| `src/components/FinalCTA.tsx` | Home CTA block. |
| `src/components/Contact.tsx` | Contact page content. |
| `src/components/PrivacyPolicy.tsx` | Privacy content + ToC + ReadingProgress. |
| `src/components/Terms.tsx` | Terms content + ToC + ReadingProgress. |
| `src/components/RefundPolicy.tsx` | Refund content + ToC + ReadingProgress. |
| `src/components/TableOfContents.tsx` | Anchor nav list. |
| `src/components/ReadingProgress.tsx` | Scroll progress bar. |
| `src/components/figma/ImageWithFallback.tsx` | Image with error fallback. |
| `src/components/ui/*.tsx` | shadcn-style UI primitives. |
| `src/Attributions.md` | shadcn/ui (MIT), Unsplash. |
| `src/guidelines/Guidelines.md` | Placeholder AI guidelines. |

---

## 14. Dependencies (summary)

- **React 18**, **react-dom**, **react-router-dom**.
- **Radix** (accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toggle, toggle-group, tooltip).
- **Vite**, **@vitejs/plugin-react** (and optional SWC).
- **Tailwind** (via PostCSS/CSS in index.css).
- **motion**, **lucide-react**, **class-variance-authority**, **clsx**, **tailwind-merge**.
- **react-hook-form**, **recharts**, **sonner**, **vaul**, **cmdk**, **embla-carousel**, **input-otp**, **react-day-picker**, **next-themes**, **react-resizable-panels**, etc.

Full list: `package.json` `dependencies` and `devDependencies`.

---

This document is the single source of truth for the project’s structure, stack, routes, components, and configuration. Update it when adding routes, major components, or deployment/config changes.
