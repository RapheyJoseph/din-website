# Daily IT Needs Website

Production-ready marketing site for Daily IT Needs—premium QA, automation, and test engineering.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Project Structure

```txt
.
├── app
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── page.tsx
├── components
│   ├── brand/brand-logo.tsx
│   ├── contact/contact-form.tsx
│   ├── layout/footer.tsx
│   ├── layout/floating-consultation.tsx
│   ├── layout/navbar.tsx
│   └── ui
│       ├── faq-item.tsx
│       ├── reveal.tsx
│       ├── section-heading.tsx
│       └── service-card.tsx
├── lib/data.ts
└── public/brand
    └── logo-globe-square.png (source), logo-globe-640/512/180.png, app icons…
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

### Option 1: Vercel Dashboard

1. Push this project to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Keep default framework preset (`Next.js`).
5. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Notes

- Optimized for static prerendering on all pages.
- Includes reusable components, page-level metadata, and responsive animations.
- Contact form is frontend-only placeholder and can be connected to an API route or external form provider.
