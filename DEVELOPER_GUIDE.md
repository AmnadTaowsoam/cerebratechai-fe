# 👨‍💻 Developer Guide - Cerebratechai Web App

> **Complete development guide** - Architecture, Testing, Security, Accessibility, Style Guide, UX

**Last Updated:** October 21, 2025

---

## 📖 Table of Contents

1. [Architecture](#-architecture)
2. [Testing](#-testing)
3. [Security](#-security)
4. [Accessibility](#-accessibility)
5. [Style Guide](#-style-guide)
6. [UX Specifications](#-ux-specifications)

---

## 🏗️ Architecture

### **System Design:**

**Stack:**
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5 (Strict mode)
- **Styling:** Tailwind CSS 3.4
- **State Management:** TanStack Query (server) + Zustand (client)
- **i18n:** next-intl (Thai/English)

### **Design Principles:**

1. **Server-First** - Leverage React Server Components
2. **Feature-Based** - Organize by domain, not file type
3. **Performance-First** - Optimize for Core Web Vitals
4. **Security-First** - Defense in depth
5. **Accessible-First** - WCAG 2.1 AA compliance

### **Project Structure:**

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/           # i18n routes (th/en)
│   │   ├── page.tsx       # Server Component (default)
│   │   ├── layout.tsx     # Layout wrapper
│   │   └── */             # Feature folders
│   └── api/               # API routes (Server-side)
│
├── components/             # React Components
│   ├── landing/           # Landing page components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── ui/                # shadcn/ui components
│   ├── magicui/           # Magic UI components
│   └── seo/               # SEO components
│
├── lib/                   # Utilities & Business Logic
│   ├── hooks/             # Custom React hooks
│   ├── schemas/           # Zod validation schemas
│   ├── api/               # API clients
│   └── utils.ts           # Helper functions
│
├── data/                  # Static Content (TypeScript)
│   ├── content.ts         # Services content
│   ├── packages.ts        # Package offerings
│   ├── cases.ts           # Case studies
│   └── home.ts            # Homepage data
│
├── i18n/                  # Translations
│   ├── th.json            # Thai
│   └── en.json            # English
│
└── types/                 # TypeScript types
```

### **Rendering Strategy:**

| Page Type | Strategy | Why |
|-----------|----------|-----|
| Homepage | Static (SSG) | Fast load, rarely changes |
| Services | Static (SSG) | SEO, fast |
| Packages | Static (SSG) | SEO, fast |
| Cases | Static (SSG) | SEO, fast |
| Contact | Server (SSR) | Dynamic, form |
| API Routes | Server | Backend logic |

### **Data Flow:**

```
Static Content (src/data/*.ts)
    ↓ Build time
Static Pages (SSG)
    ↓ CDN cached
Fast delivery

Contact Form
    ↓ User submit
Next.js API Route
    ↓ Validate (Zod)
Contact Service (Express API)
    ↓ Store + Email
Success response
```

### **State Management:**

**Server State (TanStack Query):**
```typescript
// For API data fetching
const { data, isLoading } = useQuery({
  queryKey: ['leads'],
  queryFn: fetchLeads
});
```

**Client State (Zustand):**
```typescript
// For UI state
const useUIStore = create((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme })
}));
```

---

## 🧪 Testing

### **Testing Strategy:**

| Type | Tool | Coverage | Files |
|------|------|----------|-------|
| **Unit Tests** | Jest | 80%+ | `*.test.ts(x)` |
| **E2E Tests** | Playwright | Critical paths | `*.spec.ts` |
| **A11y Tests** | jest-axe | All components | `*.a11y.test.tsx` |
| **Type Tests** | TypeScript | 100% | All `.ts(x)` |

### **Unit Testing (Jest):**

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# CI mode
npm run test:ci
```

**Example Test:**
```typescript
// src/components/landing/contact-form.test.tsx
import { render, screen } from '@testing-library/react';
import ContactForm from './contact-form';

describe('ContactForm', () => {
  it('renders form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });
  
  it('validates email format', async () => {
    render(<ContactForm />);
    // ... test validation
  });
});
```

### **E2E Testing (Playwright):**

```bash
# Run E2E tests
npm run e2e

# Interactive mode
npm run e2e:ui

# Headed mode (see browser)
npm run e2e:headed
```

**Example E2E:**
```typescript
// e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test';

test('submit contact form', async ({ page }) => {
  await page.goto('/contact');
  
  await page.fill('[name="name"]', 'Test User');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="message"]', 'Test message');
  
  await page.click('button[type="submit"]');
  
  await expect(page.locator('.success-message')).toBeVisible();
});
```

### **Accessibility Testing:**

```bash
# Run a11y tests
npm run test:a11y
```

**Example A11y Test:**
```typescript
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### **Performance Testing:**

```bash
# Lighthouse CI
npx lhci autorun

# Bundle analysis
npm run analyze
```

**Target Metrics:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🔒 Security

### **Security Headers:**

Configured in `next.config.ts`:

```typescript
{
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
}
```

### **Content Security Policy (CSP):**

```typescript
// Restrict resource loading
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' *.railway.app;
```

### **API Security:**

**Contact Form:**
```typescript
// Client-side validation (Zod)
const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000)
});

// API route validation
const validated = schema.parse(body);

// Forward to backend with API key
fetch(CONTACT_SERVICE_URL, {
  headers: { 'X-API-Key': API_KEY }
});
```

### **Data Protection:**

- ✅ **Environment Variables** - Never commit secrets
- ✅ **API Keys** - Server-side only (not in client)
- ✅ **Input Sanitization** - Zod validation + DOMPurify
- ✅ **HTTPS Only** - Force SSL in production
- ✅ **Rate Limiting** - Handled by backend
- ✅ **CORS** - Configured in backend

### **Security Checklist:**

- [x] Security headers configured
- [x] CSP implemented
- [x] HTTPS enforced
- [x] API keys in environment variables
- [x] Input validation (client + server)
- [x] No secrets in code
- [x] Dependencies audited regularly
- [x] Error messages don't leak info

### **Audit Commands:**

```bash
# Security audit
npm audit

# Fix vulnerabilities
npm audit fix

# Check for outdated packages
npm outdated
```

---

## ♿ Accessibility

### **WCAG 2.1 AA Compliance:**

**Target:** Level AA (all criteria)

### **Visual Accessibility:**

**Color Contrast:**
- Normal text: **4.5:1** minimum
- Large text (18px+): **3:1** minimum
- UI components: **3:1** minimum
- Never rely on color alone

**Typography:**
- Minimum body text: **16px**
- Line height: **1.5** (body), **1.2** (headings)
- Support **200% zoom** without horizontal scroll
- Readable fonts (sans-serif)

### **Keyboard Navigation:**

**Requirements:**
- ✅ **Tab order** - Logical sequence
- ✅ **Focus indicators** - 2px solid outline, visible
- ✅ **Skip links** - Jump to main content
- ✅ **No keyboard traps**
- ✅ **All functionality** accessible via keyboard

**Implementation:**
```tsx
// Focus management
<button 
  className="focus:ring-2 focus:ring-blue-500 focus:outline-none"
  aria-label="Submit contact form"
>
  Submit
</button>

// Skip link
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main">
  {/* Content */}
</main>
```

### **Screen Reader Support:**

**ARIA Labels:**
```tsx
<button aria-label="Open navigation menu">
  <MenuIcon aria-hidden="true" />
</button>

<form aria-labelledby="contact-form-title">
  <h2 id="contact-form-title">Contact Us</h2>
</form>
```

**Live Regions:**
```tsx
<div role="alert" aria-live="polite">
  Form submitted successfully!
</div>
```

### **Semantic HTML:**

```tsx
// ✅ Good
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>
</main>

// ❌ Bad
<div className="nav">
  <div className="list">
    <div className="item">...</div>
  </div>
</div>
```

### **A11y Testing:**

```bash
# Automated testing
npm run test:a11y

# Manual testing checklist:
- [ ] Screen reader (NVDA/JAWS/VoiceOver)
- [ ] Keyboard navigation only
- [ ] 200% zoom test
- [ ] Color blindness simulator
- [ ] Browser extensions (axe DevTools, WAVE)
```

### **Lighthouse Accessibility Score:**

**Target:** 100

**Common Issues:**
- Missing alt text → Add alt to all images
- Poor contrast → Use accessible colors
- Missing ARIA labels → Add labels to interactive elements
- Bad heading structure → Use h1-h6 properly

---

## 💎 Style Guide

### **Code Formatting:**

**Prettier Configuration:**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Commands:**
```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

### **TypeScript Guidelines:**

**Naming Conventions:**
```typescript
// ✅ Good
const userName: string = 'John';
const UserProfile: React.FC = () => {};
const API_KEY = process.env.API_KEY;
type UserData = { name: string };
interface ButtonProps { onClick: () => void }

// ❌ Bad
const UserName: string = 'John';  // Should be camelCase
const userprofile: React.FC = () => {};  // Should be PascalCase
const apiKey = 'xxx';  // Constants should be UPPER_CASE
```

**Type Annotations:**
```typescript
// ✅ Explicit types for public APIs
export function submitForm(data: ContactFormData): Promise<Response> {
  // ...
}

// ✅ Inferred types for local variables
const name = data.name;  // Type inferred as string

// ❌ Avoid 'any'
const data: any = await fetch();  // Bad!
const data: ContactData = await fetch();  // Good!
```

### **React Component Guidelines:**

**Component Structure:**
```tsx
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// 2. Types
interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

// 3. Component
export default function ContactForm({ onSubmit }: ContactFormProps) {
  // 3.1 Hooks
  const [name, setName] = useState('');
  const { t } = useTranslations();
  
  // 3.2 Handlers
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ name });
  };
  
  // 3.3 Render
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Button type="submit">{t('submit')}</Button>
    </form>
  );
}
```

**Naming:**
- Components: `PascalCase` (e.g., `ContactForm`)
- Files: `kebab-case.tsx` (e.g., `contact-form.tsx`)
- Hooks: `use` prefix (e.g., `useAnalytics`)
- Utils: `camelCase` (e.g., `formatDate`)

### **Tailwind CSS Guidelines:**

**Order of Classes:**
```tsx
// 1. Layout (display, position)
// 2. Box model (width, height, padding, margin)
// 3. Typography (font, text)
// 4. Visual (background, border, shadow)
// 5. Misc (cursor, transition)

<div className="
  flex items-center justify-between
  w-full max-w-4xl p-6 mx-auto
  text-lg font-semibold text-gray-900
  bg-white border border-gray-200 rounded-lg shadow-sm
  hover:shadow-md transition-shadow cursor-pointer
">
```

**Use @apply for repeated patterns:**
```css
/* globals.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg;
    @apply hover:bg-blue-700 focus:ring-2 focus:ring-blue-500;
    @apply transition-colors duration-200;
  }
}
```

### **File Organization:**

```
components/
├── landing/              # Landing page specific
│   ├── hero-section.tsx
│   └── contact-form.tsx
├── layout/               # Shared layout
│   ├── header.tsx
│   └── footer.tsx
├── ui/                   # Reusable UI (shadcn)
│   ├── button.tsx
│   └── input.tsx
└── shared/               # Shared utilities
    └── cookie-consent.tsx
```

### **Import Order:**

```typescript
// 1. React & Next.js
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party libraries
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

// 3. Internal modules
import { Button } from '@/components/ui/button';
import { useAnalytics } from '@/lib/hooks/use-analytics';

// 4. Types
import type { ContactFormData } from '@/types';

// 5. Styles
import './styles.css';
```

### **Comments:**

```typescript
// ✅ Good comments (explain WHY)
// Use server component to reduce client bundle size
export default function Page() {}

// Fallback to static data if API fails
const data = apiData || staticData;

// ❌ Bad comments (explain WHAT - obvious from code)
// Set name to value
setName(value);
```

---

## 🎨 UX Specifications

### **Design System:**

**Colors:**
```typescript
// Primary
primary: {
  50: '#eff6ff',
  500: '#3b82f6',
  900: '#1e3a8a'
}

// Semantic
success: '#10b981',
warning: '#f59e0b',
error: '#ef4444',
info: '#3b82f6'
```

**Spacing:**
```typescript
// 4px base unit
spacing: {
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  4: '1rem',     // 16px
  8: '2rem',     // 32px
}
```

**Typography:**
```css
/* Headings */
h1: text-4xl font-bold (36px)
h2: text-3xl font-bold (30px)
h3: text-2xl font-semibold (24px)
h4: text-xl font-semibold (20px)

/* Body */
body: text-base (16px)
small: text-sm (14px)
```

### **Responsive Breakpoints:**

```typescript
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px'  // Extra large
}
```

**Usage:**
```tsx
<div className="
  w-full              // Mobile: full width
  md:w-1/2            // Tablet: 50%
  lg:w-1/3            // Desktop: 33%
">
```

### **Component Patterns:**

**Button Variants:**
```tsx
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

**Form Fields:**
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="you@example.com"
    aria-describedby="email-error"
  />
  <p id="email-error" className="text-sm text-red-500">
    {errors.email}
  </p>
</div>
```

### **Animation:**

**Framer Motion:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

**Tailwind Transitions:**
```tsx
<button className="
  transition-all duration-300
  hover:scale-105 hover:shadow-lg
">
  Hover me
</button>
```

### **Loading States:**

```tsx
{isLoading ? (
  <div className="flex items-center justify-center p-8">
    <LoadingSpinner />
    <span className="ml-2">Loading...</span>
  </div>
) : (
  <Content data={data} />
)}
```

### **Error States:**

```tsx
{error ? (
  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
    <p className="text-red-800">{error.message}</p>
    <Button onClick={retry}>Try Again</Button>
  </div>
) : (
  <Content />
)}
```

### **Empty States:**

```tsx
{items.length === 0 ? (
  <EmptyState
    icon={<InboxIcon />}
    title="No items found"
    description="Try adjusting your filters"
    action={<Button>Clear Filters</Button>}
  />
) : (
  <ItemList items={items} />
)}
```

---

## 🎯 Best Practices

### **Performance:**

1. **Use Server Components by default**
   ```tsx
   // app/page.tsx (Server Component)
   export default async function Page() {
     const data = await fetchData();  // Server-side
     return <Content data={data} />;
   }
   ```

2. **Client Components only when needed**
   ```tsx
   'use client'  // Only for interactivity, hooks
   
   export default function InteractiveButton() {
     const [count, setCount] = useState(0);
     return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
   }
   ```

3. **Image Optimization**
   ```tsx
   import Image from 'next/image';
   
   <Image
     src="/logo.png"
     alt="Cerebratechai Logo"
     width={200}
     height={50}
     priority  // For above-fold images
   />
   ```

4. **Font Optimization**
   ```tsx
   import { Inter } from 'next/font/google';
   
   const inter = Inter({ subsets: ['latin'] });
   ```

5. **Code Splitting**
   ```tsx
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('./heavy-component'), {
     loading: () => <LoadingSpinner />
   });
   ```

### **SEO:**

```tsx
// app/[locale]/page.tsx
export const metadata = {
  title: 'AI Solutions for Business | Cerebratechai',
  description: 'Professional AI & ML solutions...',
  openGraph: {
    title: 'AI Solutions for Business',
    description: '...',
    images: ['/og-image.png']
  }
};
```

### **Error Handling:**

```tsx
// app/error.tsx (Error Boundary)
'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### **Internationalization:**

```tsx
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('nav');
  
  return (
    <nav>
      <Link href="/">{t('home')}</Link>
      <Link href="/services">{t('services')}</Link>
    </nav>
  );
}
```

---

## 🚀 Development Workflow

### **1. Start New Feature:**

```bash
# Create feature branch
git checkout -b feature/new-contact-field

# Start dev server
npm run dev
```

### **2. Develop:**

```tsx
// 1. Create component
// src/components/landing/new-section.tsx

// 2. Add types
// src/types/new-section.ts

// 3. Add translations
// src/i18n/en.json
// src/i18n/th.json

// 4. Write tests
// src/components/landing/new-section.test.tsx
```

### **3. Test:**

```bash
# Type check
npm run typecheck

# Lint
npm run lint

# Unit tests
npm test

# E2E tests
npm run e2e

# A11y tests
npm run test:a11y
```

### **4. Commit:**

```bash
# Format code
npm run format

# Commit with conventional commits
git add .
git commit -m "feat: add new contact field"
git push origin feature/new-contact-field
```

### **5. Deploy:**

```bash
# Vercel auto-deploys on PR merge
# Preview deployment on PR
# Production deployment on merge to main
```

---

## 📋 Checklists

### **Before Committing:**

- [ ] Code formatted (`npm run format`)
- [ ] No linting errors (`npm run lint`)
- [ ] No type errors (`npm run typecheck`)
- [ ] Tests passing (`npm test`)
- [ ] No console errors/warnings
- [ ] Accessibility checked
- [ ] i18n translations added (th + en)

### **Before Deploying:**

- [ ] All tests pass (unit + E2E)
- [ ] Lighthouse score 90+
- [ ] No security vulnerabilities (`npm audit`)
- [ ] Environment variables set
- [ ] Build succeeds (`npm run build`)
- [ ] Preview deployment tested

---

## 🔗 Resources

### **Documentation:**
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)

### **Tools:**
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [next-intl](https://next-intl-docs.vercel.app/) - i18n
- [Zod](https://zod.dev/) - Validation
- [Playwright](https://playwright.dev/) - E2E testing

### **Accessibility:**
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Extension](https://wave.webaim.org/extension/)

---

## 📞 Getting Help

### **Issues:**
1. Check this guide first
2. Review [README.md](README.md)
3. Check [troubleshooting section](#-troubleshooting)
4. Search existing issues on GitHub
5. Ask team on Slack/Discord

### **External Resources:**
- Next.js Discord
- Stack Overflow
- GitHub Discussions

---

**Last Updated:** October 21, 2025  
**Version:** 1.0.0  
**Status:** ✅ Complete

---

**Happy Coding! 🚀**

