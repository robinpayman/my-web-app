# My Web App

A minimal React + TypeScript application built with Vite.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (included with Node.js)

## Setup

Install dependencies:

```bash
npm install
```

## Running the App

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

Output is placed in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
my-web-app/
├── public/            # Static assets
├── src/
│   ├── App.css        # App component styles
│   ├── App.tsx        # Root component
│   ├── index.css      # Global styles
│   └── main.tsx       # Application entry point
├── index.html         # HTML entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Adding New Features

### Development Workflow

1. **Create a Feature Branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```
   Use descriptive branch names (e.g., `feat/user-authentication`, `feat/dark-mode`).

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Hot module replacement (HMR) is enabled—changes will reflect instantly in the browser.

3. **Implement Your Feature**
   - Create new components in `src/` (e.g., `src/components/MyComponent.tsx`)
   - Update `src/App.tsx` to integrate new components
   - Add styles to component-specific CSS files or `src/index.css`
   - Ensure TypeScript types are properly defined

4. **Test Your Changes**
   ```bash
   npm run build
   npm run preview
   ```
   Verify the production build runs without errors and renders correctly.

### Best Practices

- **Component Organization**: Keep related files together. Create subdirectories for feature areas (e.g., `src/components/auth/`, `src/pages/`).
- **Type Safety**: Use TypeScript interfaces for props and state. Avoid `any` types.
- **Styling**: Import CSS files in components using ES modules (`import './Component.css'`).
- **Git Commits**: Write clear, descriptive commit messages. Include the co-author line when pairing:
  ```
  feat: Add user authentication

  Co-Authored-By: Oz <oz-agent@warp.dev>
  ```

### Creating a Pull Request

1. **Push Your Feature Branch**
   ```bash
   git push origin feat/your-feature-name
   ```

2. **Open a Pull Request**
   - Go to [the repository](https://github.com/robinpayman/my-web-app)
   - Click "New Pull Request"
   - Set the base branch to `main` and compare branch to your feature branch
   - Fill out the PR template with:
     - Description of changes
     - Related issues (if any)
     - Testing steps

3. **Address Review Comments**
   - Make requested changes on your feature branch
   - Commit changes and push
   - The PR will automatically update

4. **Merge to Main**
   - Once approved, click "Squash and merge" or "Merge pull request"
   - Delete the feature branch after merging

### Deployment

Once merged to `main`, your changes automatically deploy to production via Vercel:
- **Production URL**: https://my-web-app-pi-six.vercel.app
- **Dashboard**: https://vercel.com/robinpayman-3751s-projects/my-web-app

Monitor deployment status and view logs in the Vercel dashboard.

### Adding Dependencies

To add a new npm package:

```bash
npm install package-name
```

For development-only dependencies:

```bash
npm install --save-dev package-name
```

Commit the updated `package.json` and `package-lock.json` files.

### Troubleshooting

- **Dev server not starting**: Clear node_modules and reinstall (`rm -rf node_modules && npm install`)
- **Port 5173 in use**: Kill the process or run on a different port (`npm run dev -- --port 3000`)
- **Build errors**: Check TypeScript errors (`npx tsc --noEmit`) and fix type mismatches
- **HMR not working**: Ensure `vite.config.ts` HMR settings match your environment
