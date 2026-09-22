# Buildfolio — GitHub Copilot Instructions

## Project Overview

Buildfolio is a portfolio website builder designed for non-coders and beginner/intermediate developers.

The core goal is:

> Allow a user to create, customize, preview, and eventually publish a professional personal portfolio without needing to manually write a portfolio website.

The product should feel like a real modern SaaS product, not a tutorial project.

Prioritize:

* Excellent UX
* Clean and maintainable React architecture
* Reusable components
* Strong TypeScript practices
* Responsive design
* Accessibility
* Performance
* Simple state management
* Clear separation of concerns
* Production-quality frontend engineering

Do NOT add unnecessary complexity.

---

# CRITICAL: AI CREDIT CONSERVATION

The project has a STRICT LIMIT OF **1500 AI CREDITS**.

Treat AI usage as a scarce engineering resource.

## Rules

1. **Never generate large amounts of code unless explicitly requested.**
2. Before making changes, inspect the existing implementation and reuse what already exists.
3. Do not rewrite working components merely for stylistic reasons.
4. Do not introduce libraries when the existing stack can solve the problem.
5. Do not generate multiple alternative implementations unless explicitly requested.
6. Do not regenerate an entire file when a targeted change is sufficient.
7. Prefer small, incremental changes.
8. Never create boilerplate that is not immediately required.
9. Never add speculative features.
10. Do not implement future roadmap features prematurely.
11. Do not refactor unrelated code while implementing a feature.
12. Do not modify configuration files unless necessary.
13. Do not generate tests for untouched functionality.
14. Before proposing a new dependency, determine whether the functionality can be implemented with existing dependencies or native browser APIs.
15. When a task is ambiguous, ask for clarification rather than generating a large speculative implementation.
16. If the requested change can be completed in fewer files, prefer the smaller change.
17. Preserve existing working code.
18. Avoid unnecessary comments and documentation inside source files.
19. Do not repeatedly explain the same architecture.
20. Never regenerate code simply because another implementation is possible.

## Credit Priority

Spend AI effort in this order:

1. Core functionality
2. Correctness
3. Architecture
4. UX
5. Accessibility
6. Performance
7. Testing
8. Refactoring
9. Documentation
10. Cosmetic improvements

Do not spend significant effort on cosmetic improvements while core functionality is incomplete.

---

# DEVELOPMENT WORKFLOW

For every task:

### Step 1 — Understand

Identify:

* What the user is asking for
* Which existing files are relevant
* Whether the functionality already partially exists
* What dependencies are already available

### Step 2 — Plan minimally

Create the smallest reasonable implementation plan.

Do not design an entire architecture for a small feature.

### Step 3 — Inspect

Read only the files necessary to make the change.

Avoid scanning the entire repository unless the task genuinely requires repository-wide understanding.

### Step 4 — Implement

Make the smallest targeted change that satisfies the requirement.

### Step 5 — Verify

Check:

* TypeScript errors
* obvious runtime issues
* broken imports
* existing patterns
* responsive behavior where relevant

### Step 6 — Stop

Once the requested feature works, stop.

Do not automatically:

* refactor unrelated code
* redesign components
* add new features
* change styling systems
* introduce new libraries

---

# PRODUCT PRINCIPLES

Buildfolio should prioritize simplicity.

The primary user should be able to:

1. Start a portfolio
2. Choose a template
3. Enter personal information
4. Add skills
5. Add projects
6. Add experience
7. Add education
8. Customize appearance
9. Preview the portfolio
10. Export/publish it

The interface should make the user feel like they are building a website rather than configuring a complicated developer tool.

---

# TECHNOLOGY PRINCIPLES

Use the project's existing technology stack.

Preferred frontend approach:

* React
* TypeScript
* Vite
* Tailwind CSS
* Modern React hooks
* Functional components

Do not introduce:

* Next.js
* Redux
* Zustand
* MobX
* another CSS framework
* another UI framework

unless explicitly requested or the existing architecture genuinely requires it.

Use native React state and context where appropriate before introducing additional state-management libraries.

---

# TYPESCRIPT

TypeScript should be used consistently.

Prefer:

```ts
interface UserProfile {
  name: string;
  title: string;
  bio: string;
}
```

Use explicit types for:

* component props
* API responses
* portfolio data
* configuration objects
* shared state
* reusable utility functions

Avoid:

```ts
any
```

unless there is a strong technical reason.

Do not use unnecessary type complexity.

Prefer simple readable types over clever generic abstractions.

---

# REACT

Use functional components.

Prefer:

```tsx
function PortfolioPreview({ portfolio }: PortfolioPreviewProps) {
  return (...);
}
```

over unnecessary class components.

Use hooks appropriately.

Avoid:

* unnecessary `useEffect`
* unnecessary `useMemo`
* unnecessary `useCallback`
* duplicated state
* derived state stored in state
* deeply nested components without reason

Remember:

> If something can be calculated during render, do not automatically put it into state.

---

# COMPONENT ARCHITECTURE

Build reusable components around meaningful UI boundaries.

Example:

```text
src/
├── components/
│   ├── ui/
│   ├── editor/
│   ├── preview/
│   └── layout/
│
├── features/
│   └── portfolio/
│
├── hooks/
├── types/
├── utils/
├── data/
└── pages/
```

Do not create a component for every tiny HTML element.

A component should generally exist when it:

* has its own behavior
* is reused
* represents a meaningful UI section
* improves readability
* has independent state

---

# PORTFOLIO DATA MODEL

Portfolio information should be represented as structured data rather than hardcoded directly into templates.

Conceptually:

```ts
interface Portfolio {
  profile: Profile;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  socialLinks: SocialLink[];
  settings: PortfolioSettings;
}
```

Templates should consume portfolio data.

Avoid duplicating portfolio data across templates.

The same portfolio data should be renderable using different visual templates.

---

# TEMPLATE ARCHITECTURE

Templates must be data-driven.

Preferred architecture:

```text
Portfolio Data
      ↓
Template
      ↓
Reusable Sections
      ↓
Rendered Portfolio
```

Do not create separate data structures for every template.

A template should primarily define presentation.

For example:

```tsx
<PortfolioTemplate
  portfolio={portfolio}
/>
```

not:

```tsx
<DeveloperPortfolio />
<DesignerPortfolio />
<MinimalPortfolio />
```

with duplicated data logic.

Templates should be easy to add later.

---

# EDITOR

The editor should be separated conceptually from the preview.

Example:

```text
Editor
 ├── ProfileEditor
 ├── SkillsEditor
 ├── ExperienceEditor
 ├── EducationEditor
 └── ProjectsEditor

Preview
 └── PortfolioRenderer
```

Changes made in the editor should update the portfolio state.

Avoid tightly coupling editor components directly to preview components.

---

# STATE MANAGEMENT

Start simple.

Use local React state when state is local.

Use React Context only when state genuinely needs to be shared across distant components.

Do not introduce Redux or another state-management library unless explicitly requested.

Avoid duplicate sources of truth.

Prefer:

```text
portfolio state
     ↓
editor
     ↓
preview
```

rather than maintaining separate editor and preview copies.

---

# FORM HANDLING

Forms should be:

* predictable
* accessible
* easy to understand
* validated where necessary

Use controlled inputs where appropriate.

Do not add a form library unless the project genuinely needs one.

Validation should be introduced only where it provides real value.

---

# DESIGN SYSTEM

Buildfolio should have a consistent visual language.

Prefer:

* clean typography
* generous spacing
* restrained colors
* clear hierarchy
* subtle borders
* accessible contrast
* consistent radius
* consistent shadows

Avoid:

* excessive gradients
* excessive animations
* random colors
* excessive glassmorphism
* unnecessary decorative elements
* inconsistent spacing

The UI should feel like a polished SaaS application.

---

# RESPONSIVE DESIGN

The application must work across:

* mobile
* tablet
* desktop

Use responsive Tailwind utilities.

Do not create separate mobile and desktop implementations unless necessary.

Prioritize:

* usable forms
* readable typography
* accessible controls
* preview usability
* editor navigation

---

# ACCESSIBILITY

Accessibility is a first-class requirement.

Use:

* semantic HTML
* labels for form controls
* keyboard-accessible interactions
* visible focus states
* appropriate button elements
* meaningful alt text
* ARIA only when necessary

Do not use clickable `<div>` elements when a button or link is appropriate.

---

# PERFORMANCE

Do not prematurely optimize.

First make the feature correct.

When performance problems are demonstrated or obvious:

* avoid unnecessary renders
* avoid unnecessary effects
* avoid expensive calculations during render
* lazy-load genuinely large features
* optimize large lists where necessary
* avoid unnecessary dependencies

Do not add `useMemo` or `useCallback` everywhere.

---

# ERROR HANDLING

User-facing errors should be understandable.

Avoid exposing raw technical errors directly to users.

Prefer:

```text
Something went wrong while saving your portfolio.
Please try again.
```

over displaying raw stack traces.

Keep developer-oriented logging separate from user-facing messaging.

---

# SECURITY

Never trust user-generated portfolio content.

Consider:

* XSS risks
* unsafe HTML
* unsafe URLs
* user-provided images
* external links

Do not use `dangerouslySetInnerHTML` unless explicitly required and the content is properly sanitized.

External URLs should be validated where appropriate.

Never hardcode secrets or API keys.

---

# GITHUB / OPEN SOURCE QUALITY

The repository should look like a serious open-source project.

Maintain:

* meaningful commit structure
* clean README
* clear setup instructions
* `.env.example` when environment variables are required
* no secrets in Git
* no generated build artifacts
* no unnecessary dependencies

Do not add fake badges, fake metrics, or claims that cannot be verified.

---

# TESTING

Testing should focus on meaningful behavior.

Prioritize tests for:

* portfolio data manipulation
* important utilities
* editor interactions
* critical rendering behavior
* validation
* important user flows

Do not create tests solely to increase test count.

Avoid testing implementation details.

---

# CODE STYLE

Prefer readable code over clever code.

Good:

```ts
const visibleProjects = projects.filter(
  (project) => project.isVisible
);
```

Avoid unnecessarily clever abstractions.

Keep functions focused.

Avoid functions that perform multiple unrelated responsibilities.

Use meaningful names.

Avoid:

```ts
const x = ...
const temp = ...
const data2 = ...
```

Prefer:

```ts
const visibleProjects = ...
const portfolioSettings = ...
```

---

# COMMENTS

Comments should explain WHY, not WHAT.

Avoid:

```ts
// Set the name
setName(name);
```

Prefer comments only when explaining:

* non-obvious business logic
* browser quirks
* architectural decisions
* temporary workarounds

Do not fill files with comments.

---

# DEPENDENCY POLICY

Before adding a dependency, ask:

1. Is it already available?
2. Can native browser APIs solve this?
3. Can React solve this?
4. Can a small utility solve this?
5. Does the dependency provide meaningful long-term value?

Avoid adding dependencies for trivial functionality.

Every dependency increases:

* bundle size
* maintenance cost
* security surface
* project complexity

---

# FEATURE DEVELOPMENT RULE

Every new feature should follow:

```text
Requirement
   ↓
Smallest viable implementation
   ↓
Reuse existing components
   ↓
Verify
   ↓
Stop
```

Do not turn a simple feature request into an architecture rewrite.

---

# CURRENT PRODUCT DIRECTION

Buildfolio should eventually support:

### Core

* Portfolio creation
* Portfolio editing
* Live preview
* Templates
* Profile section
* Skills
* Experience
* Education
* Projects
* Social links
* Theme customization

### Later

* GitHub integration
* Import GitHub repositories
* Resume import
* Custom domains
* Portfolio publishing
* Analytics
* Template marketplace
* Authentication
* Cloud persistence

Do NOT implement later-stage functionality unless explicitly requested.

---

# MVP RULE

When deciding between:

```text
simple + working
```

and

```text
complex + theoretically scalable
```

choose:

> simple + working

unless the complexity is necessary for the current requirement.

---

# AI BEHAVIOR

When working on Buildfolio, behave like a senior frontend engineer collaborating with another developer.

Before changing code:

* understand the existing implementation
* identify the smallest relevant surface area
* reuse existing patterns
* preserve working behavior

When a task is small, keep the response and code changes small.

When a task is large, break it into logical increments rather than generating the entire application in one pass.

Never assume that a requested feature requires a new architecture.

Never invent requirements.

Never silently introduce unrelated improvements.

If an existing implementation conflicts with the requested behavior, explain the conflict briefly and make the smallest safe change.

The goal is not to produce the maximum amount of code.

The goal is to produce the **minimum amount of high-quality code required to make Buildfolio better.**

---

# DEFINITION OF DONE

A feature is considered complete when:

* The requested behavior works
* Existing functionality is preserved
* TypeScript is valid
* Imports are correct
* The implementation follows existing project patterns
* Basic accessibility requirements are satisfied
* Responsive behavior is considered
* No unnecessary dependencies were introduced
* No unrelated files were changed
* No unnecessary refactoring was performed

Then STOP.
