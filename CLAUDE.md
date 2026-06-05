# My Web App

A minimal React + TypeScript application built with Vite.

## Tech Stack

- **Frontend**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.3.4
- **Language**: TypeScript (strict mode enabled)
- **Package Manager**: npm
- **Node.js**: v18 or later

## Project Structure

```
my-web-app/
├── public/            # Static assets (favicon, etc.)
├── src/
│   ├── App.css        # App component styles
│   ├── App.tsx        # Root component
│   ├── index.css      # Global styles
│   └── main.tsx       # Application entry point
├── index.html         # HTML entry point
├── package.json       # Project configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md          # Project documentation
```

## Development Commands

- `npm install` — Install dependencies
- `npm run dev` — Start development server (http://localhost:5173)
- `npm run build` — Build for production (output: dist/)
- `npm run preview` — Preview production build locally

## Code Conventions

### React Components
- Use functional components with hooks
- Export components as default exports
- Name component files with PascalCase (e.g., `App.tsx`)
- Use TypeScript interfaces for props
- Keep components focused and single-responsibility

### TypeScript
- Enable strict mode (already configured)
- Use type annotations on all function parameters and return types
- Prefer interfaces over types for object shapes
- Use `const` for variables that don't change
- Avoid using `any` type

### Styling
- Use CSS modules or component-scoped CSS
- Define global styles in `index.css`
- Component-specific styles in `.css` file alongside component
- Use semantic CSS class names (e.g., `app-header`, `app-main`, `app-footer`)
- Support light/dark mode with CSS media queries (`prefers-color-scheme`)

### File Organization
- Keep related files together (component + styles)
- Place shared utilities in a `utils/` directory if needed
- Create a `components/` directory for reusable components
- Group feature-related code together

## Git Workflow

- Commit frequently with descriptive messages
- Use imperative mood in commit messages ("Add feature" not "Added feature")
- Reference issue numbers when applicable
- Keep commits atomic and focused

## Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Compile TypeScript and bundle with Vite
npm run preview      # Preview production build locally

# Other
npm install          # Install/update dependencies
```

## Performance Considerations

- Vite provides fast HMR (Hot Module Replacement) during development
- Production builds are optimized and minified automatically
- Use React.lazy() and Suspense for code splitting if needed
- Lazy load large components or images

## Browser Support

- Modern browsers with ES2020+ support
- Vite handles transpilation for the target environment

## Common Development Tasks

### Adding a new component
1. Create `src/components/YourComponent.tsx`
2. Add accompanying `src/components/YourComponent.css`
3. Import and use in `App.tsx` or other components
4. Ensure TypeScript types are properly defined

### Adding dependencies
```bash
npm install package-name
npm install --save-dev dev-package-name
```

### Debugging
- Use browser DevTools (F12 or Cmd+Option+I)
- React DevTools browser extension recommended
- Vite provides sourcemaps automatically in development

## Environment Variables

Currently no environment variables configured. To add:
1. Create `.env` file in project root
2. Reference variables with `import.meta.env.VITE_*`
3. TypeScript requires type definitions in `vite-env.d.ts`

## Next Steps for Development

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:5173 in browser
4. Edit `src/App.tsx` to customize the application
5. Add components and styles as needed

---

This file is read by Claude Code on every session to maintain consistency with project conventions.
