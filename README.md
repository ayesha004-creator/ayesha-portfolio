# Ayesha Karamat — Portfolio

A responsive personal portfolio for showcasing Ayesha's frontend and WordPress experience, projects, skills, and contact information.

## Features

- Responsive single-page layout with Home, About, Skills, Experience, Projects, and Contact sections
- Light and dark themes, mobile navigation, and accessible project detail dialogs
- Project cards with working GitHub and live demo links where available
- Public profile photo and downloadable CV
- Contact details and an informational contact form

The portfolio is a static frontend and does not require a backend or environment variables. The contact form validates input but does not send messages; visitors can use the provided email and social links instead.

## Technologies

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React

## Requirements

- Node.js and npm

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Build and preview

```sh
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy

This frontend can be deployed directly to Netlify or Vercel; no separate backend or environment variables are needed.

### Netlify

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site** → **Import an existing project** and select the repository.
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Deploy. Netlify will provide the public site URL.

### Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New** → **Project** and import the repository.
3. Select the Vite framework preset, confirm the build command `npm run build` and output directory `dist`, then deploy.
4. Copy the production URL from the project dashboard.

The PDF in `public/` is served publicly as the CV download, so its contents are visible to site visitors.
