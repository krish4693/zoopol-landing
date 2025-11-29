# Implementation Plan

- [x] 1. Install and configure React Router DOM
  - Install react-router-dom package as a dependency
  - Update src/main.tsx to wrap App with BrowserRouter
  - _Requirements: 4.1, 4.2_

- [x] 2. Create shared layout components
  - [x] 2.1 Create ScrollToTop component
    - Implement useEffect hook to scroll to top on route changes
    - Use useLocation hook from react-router-dom
    - _Requirements: 3.3_

  - [x] 2.2 Extract and create Header component
    - Extract header markup from current App.tsx hero section
    - Add logo click navigation to home page using Link component
    - Implement conditional navigation menu display based on current route
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 2.3 Create or update Footer component
    - Create footer with navigation links to policy pages
    - Use Link components for internal navigation
    - Include legal, support, and download sections
    - _Requirements: 2.1, 2.2_

  - [x] 2.4 Create Layout component
    - Implement Layout with Header, Outlet, and Footer
    - Include ScrollToTop component
    - _Requirements: 4.3_

- [x] 3. Create page components
  - [x] 3.1 Create src/pages directory structure
    - Create pages folder in src directory
    - _Requirements: 4.3_

  - [x] 3.2 Create HomePage component
    - Move hero section content from App.tsx
    - Import and render Features, HowItWorks, FAQ, and FinalCTA components
    - Remove policy and contact sections
    - _Requirements: 1.5_

  - [x] 3.3 Create PrivacyPolicyPage component
    - Import and render PrivacyPolicy component
    - _Requirements: 1.1, 5.1, 5.2, 5.3_

  - [x] 3.4 Create TermsPage component
    - Import and render Terms component
    - _Requirements: 1.2, 5.1, 5.2, 5.3_

  - [x] 3.5 Create RefundPolicyPage component
    - Import and render RefundPolicy component
    - _Requirements: 1.3, 5.1, 5.2, 5.3_

  - [x] 3.6 Create ContactPage component
    - Import and render Contact component
    - _Requirements: 1.4_

- [x] 4. Configure routing in App.tsx
  - [x] 4.1 Refactor App.tsx to use Routes and Route components
    - Import Routes, Route from react-router-dom
    - Import all page components
    - Define route structure with Layout as parent route
    - _Requirements: 4.2, 4.3_

  - [x] 4.2 Configure individual routes
    - Set up index route for HomePage (/)
    - Set up /privacy-policy route for PrivacyPolicyPage
    - Set up /terms route for TermsPage
    - Set up /refund-policy route for RefundPolicyPage
    - Set up /contact route for ContactPage
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [x] 4.3 Add catch-all route for invalid paths
    - Implement wildcard route that redirects to home page
    - _Requirements: 4.4_

- [x] 5. Update existing components for routing compatibility
  - [x] 5.1 Update policy component "Back to top" links
    - Change href="#home" to scroll to top of current page
    - Use window.scrollTo or smooth scroll behavior
    - _Requirements: 2.4_

  - [x] 5.2 Verify TableOfContents anchor links work on separate pages
    - Test anchor link navigation within policy pages
    - Ensure hash navigation works correctly
    - _Requirements: 5.4_

  - [x] 5.3 Remove policy and contact sections from landing page flow
    - Ensure HomePage only renders landing page sections
    - Verify no duplicate content appears
    - _Requirements: 1.5_

- [x] 6. Update vercel.json for client-side routing
  - Add rewrite rules to handle client-side routing in production
  - Ensure all routes serve index.html for proper SPA behavior
  - _Requirements: 3.4_

- [x] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
