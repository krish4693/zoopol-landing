# Design Document: Separate Policy Pages with Routing

## Overview

This design transforms the Zoopol landing page from a single-page application into a multi-page application using React Router DOM. The current implementation renders all sections (hero, features, policies, contact) on a single scrollable page. The new design will separate policy and contact sections into dedicated routes while maintaining the landing page as the home route.

The implementation will use React Router v6 for client-side routing, create page-level components that wrap existing section components, implement a shared layout with header and footer, and update navigation links throughout the application.

## Architecture

### High-Level Structure

```
App (Router Provider)
├── Routes
│   ├── / (Home/Landing Page)
│   ├── /privacy-policy (Privacy Policy Page)
│   ├── /terms (Terms & Conditions Page)
│   ├── /refund-policy (Refund & Cancellation Page)
│   └── /contact (Contact Us Page)
│
├── Shared Components
│   ├── Header (with navigation)
│   └── Footer (with policy links)
│
└── Page Components
    ├── HomePage (Features, HowItWorks, FAQ, FinalCTA)
    ├── PrivacyPolicyPage (PrivacyPolicy component)
    ├── TermsPage (Terms component)
    ├── RefundPolicyPage (RefundPolicy component)
    └── ContactPage (Contact component)
```

### Routing Strategy

- Use `BrowserRouter` from React Router DOM v6
- Define routes using the `Routes` and `Route` components
- Implement a `Layout` component for shared header/footer
- Use `Link` and `NavLink` components for navigation
- Implement scroll-to-top behavior on route changes

## Components and Interfaces

### 1. Router Configuration

**File:** `src/main.tsx`

Update to wrap the App component with BrowserRouter:

```typescript
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 2. App Component Refactor

**File:** `src/App.tsx`

Transform from a single-page component to a route configuration:

```typescript
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="refund-policy" element={<RefundPolicyPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
```

### 3. Layout Component

**File:** `src/components/Layout.tsx`

A new component that provides shared structure:

```typescript
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

### 4. Header Component

**File:** `src/components/Header.tsx`

Extract the header from the current App.tsx hero section:

```typescript
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import logoImage from 'figma:asset/517df0d5670810621a7e0624844181007d0f402d.png';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logoImage} alt="Zoopol" className="h-7 md:h-8 lg:h-10" />
        </Link>

        {isHomePage && (
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#home" className="text-gray-900 hover:text-[#156BFC]">Find Work</a>
            <a href="#features" className="text-gray-900 hover:text-[#156BFC]">Post Job</a>
            <a href="#how-it-works" className="text-gray-900 hover:text-[#156BFC]">About Us</a>
            <a href="#faq" className="text-gray-900 hover:text-[#156BFC]">Benefits</a>
          </nav>
        )}

        <div className="flex items-center gap-2 md:gap-3">
          <Button variant="ghost" className="hidden sm:flex">Log In</Button>
          <Button className="rounded-full px-4 md:px-6 py-3 md:py-5 bg-[#156BFC]">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
```

### 5. Footer Component

**File:** `src/components/Footer.tsx`

Update or create footer with navigation links:

```typescript
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Zoopol</h3>
            <p className="text-white/70 text-sm">
              Connecting employers and workers for quick, transparent work.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-white/70 hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-white/70 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Download</h4>
            <p className="text-white/70 text-sm">Available on iOS and Android</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2025 Zoopol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

### 6. ScrollToTop Component

**File:** `src/components/ScrollToTop.tsx`

Ensures page scrolls to top on route changes:

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

### 7. Page Components

**File:** `src/pages/HomePage.tsx`

```typescript
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Button } from '../components/ui/button';
import { Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import appStoreButtons from 'figma:asset/ba3ea06de21fd32944af108b203e16e4e384730b.png';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        {/* ... existing hero content ... */}
      </section>
      
      <HowItWorks />
      <Features />
      <FAQ />
      <FinalCTA />
    </>
  );
}
```

**File:** `src/pages/PrivacyPolicyPage.tsx`

```typescript
import { PrivacyPolicy } from '../components/PrivacyPolicy';

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
```

**File:** `src/pages/TermsPage.tsx`

```typescript
import { Terms } from '../components/Terms';

export default function TermsPage() {
  return <Terms />;
}
```

**File:** `src/pages/RefundPolicyPage.tsx`

```typescript
import { RefundPolicy } from '../components/RefundPolicy';

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
```

**File:** `src/pages/ContactPage.tsx`

```typescript
import { Contact } from '../components/Contact';

export default function ContactPage() {
  return <Contact />;
}
```

## Data Models

No new data models are required. This feature focuses on UI structure and navigation.

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Route-Component Mapping Consistency

*For any* valid route path in the application, navigating to that route should render exactly one corresponding page component and no other page components.

**Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**

### Property 2: Navigation Link Correctness

*For any* navigation link in the footer or header, clicking that link should update the browser URL to match the link's target path and render the corresponding page.

**Validates: Requirements 2.1, 2.2, 2.3**

### Property 3: Browser History Integration

*For any* sequence of page navigations, the browser's back button should navigate to the previous page in the sequence, and the forward button should navigate to the next page.

**Validates: Requirements 3.1, 3.2, 3.3**

### Property 4: URL Refresh Consistency

*For any* valid route URL, refreshing the browser should render the same page content that was displayed before the refresh.

**Validates: Requirements 3.4**

### Property 5: Component Preservation

*For any* policy page component (Privacy, Terms, Refund), rendering it as a separate route should preserve all child components (ReadingProgress, TableOfContents) and their functionality.

**Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**

### Property 6: Header Visibility

*For any* page in the application, the header component should be rendered and visible with the Zoopol logo linking to the home page.

**Validates: Requirements 6.1, 6.2, 6.3, 6.4**

## Error Handling

### Invalid Routes

- Implement a catch-all route that redirects to the home page
- Alternative: Create a 404 page component for better UX

```typescript
<Route path="*" element={<Navigate to="/" replace />} />
```

### Missing Components

- Ensure all imported components exist before deployment
- Use TypeScript to catch import errors at compile time

### Broken Links

- Use React Router's `Link` component instead of `<a>` tags for internal navigation
- Validate all route paths match the defined routes

### Scroll Behavior Issues

- Implement ScrollToTop component to handle automatic scrolling
- For anchor links within policy pages, use native hash navigation

## Testing Strategy

### Unit Testing

We will use Vitest as the testing framework (already configured in Vite projects) along with React Testing Library for component testing.

**Unit Test Coverage:**

1. **Route Configuration Tests**
   - Test that each route path renders the correct page component
   - Test that invalid routes redirect to home or 404 page
   - Test that nested routes work correctly with Layout

2. **Navigation Tests**
   - Test that clicking footer links navigates to correct pages
   - Test that clicking the logo navigates to home page
   - Test that Link components update the URL correctly

3. **Component Rendering Tests**
   - Test that policy pages render with all child components (ReadingProgress, TableOfContents)
   - Test that HomePage renders all section components
   - Test that Header renders differently on home vs policy pages

4. **ScrollToTop Tests**
   - Test that window.scrollTo is called when route changes
   - Test that scroll position resets to (0, 0)

### Property-Based Testing

We will use `fast-check` as the property-based testing library for JavaScript/TypeScript.

**Configuration:**
- Each property test should run a minimum of 100 iterations
- Each test must be tagged with a comment referencing the design document property

**Property Test Coverage:**

1. **Property 1: Route-Component Mapping** (Requirements 1.1-1.5)
   - Generate random valid route paths
   - Verify only the corresponding page component is rendered
   - Tag: `**Feature: separate-policy-pages, Property 1: Route-Component Mapping Consistency**`

2. **Property 2: Navigation Link Correctness** (Requirements 2.1-2.3)
   - Generate random navigation sequences through footer/header links
   - Verify URL updates match link targets
   - Tag: `**Feature: separate-policy-pages, Property 2: Navigation Link Correctness**`

3. **Property 3: Browser History Integration** (Requirements 3.1-3.2)
   - Generate random navigation sequences
   - Simulate back/forward button clicks
   - Verify correct page is displayed after each navigation
   - Tag: `**Feature: separate-policy-pages, Property 3: Browser History Integration**`

4. **Property 4: URL Refresh Consistency** (Requirements 3.4)
   - Generate random valid routes
   - Simulate page refresh
   - Verify same content is rendered
   - Tag: `**Feature: separate-policy-pages, Property 4: URL Refresh Consistency**`

5. **Property 5: Component Preservation** (Requirements 5.1-5.5)
   - For each policy page route, verify all expected child components are present
   - Verify styling and layout match original implementation
   - Tag: `**Feature: separate-policy-pages, Property 5: Component Preservation**`

6. **Property 6: Header Visibility** (Requirements 6.1-6.4)
   - For any page route, verify header is rendered
   - Verify logo link functionality
   - Tag: `**Feature: separate-policy-pages, Property 6: Header Visibility**`

### Integration Testing

- Test full user flows: home → privacy policy → back to home
- Test direct URL access to policy pages
- Test browser refresh on different routes
- Test anchor link navigation within policy pages

### Manual Testing Checklist

- Verify all routes work in development mode
- Verify all routes work in production build
- Test on different browsers (Chrome, Firefox, Safari)
- Test responsive design on mobile devices
- Verify SEO meta tags are correct for each page
