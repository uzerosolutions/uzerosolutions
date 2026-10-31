# UZERO Solutions website

A responsive React single-page website for UZERO Solutions, built with Vite.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, or serve the build with `npm run preview`.

## Deploy to GitHub Pages

The GitHub Actions workflow builds the app with Vite and deploys the generated `dist` directory when changes are pushed to `main`.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The first deployment can then be started by pushing to `main` or running the workflow manually from the Actions tab.

For manual deployment, run `npm run deploy` after configuring the `gh-pages` branch as the Pages source. This also publishes Vite's `dist` output.

## Website features

- IT and digital service overview
- Searchable, category-filtered catalog of 14 courses with syllabus details
- Workshop and internship tabs
- Context-aware WhatsApp inquiry links
- Responsive layout with UZERO forest-green and lime branding

The WhatsApp destination is configured near the top of `src/App.jsx`.
