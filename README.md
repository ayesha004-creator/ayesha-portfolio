# Ayesha Karamat — Portfolio

A responsive personal portfolio for showcasing Ayesha's frontend and WordPress experience, projects, skills, and contact information.

## Features

- Responsive single-page layout with Home, About, Skills, Experience, Projects, and Contact sections
- Light and dark themes, mobile navigation, and accessible project detail dialogs
- Project cards with working GitHub and live demo links where available
- Public profile photo and downloadable CV
- Contact details and an EmailJS-powered contact form

The portfolio is a static frontend and uses EmailJS to send contact form submissions without a backend. The form requires EmailJS account configuration; until that is complete, it reports that setup is missing and that no email was sent.

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

This frontend can be deployed directly to Netlify or Vercel; no separate backend is needed.

### Configure the contact form

1. Create an [EmailJS](https://www.emailjs.com/) account and add an email service connected to the inbox where you want to receive messages (`ayeshakaramat004@gmail.com`). Complete any verification steps required by the provider.
2. Create an EmailJS email template with:
   - **To email:** `ayeshakaramat004@gmail.com`
   - **Subject:** `New Portfolio Contact Message`
   - **From name:** `{{from_name}}`
   - **Reply to:** `{{from_email}}`
   - **Message body:** include `{{from_name}}`, `{{from_email}}`, and `{{message}}` so the visitor's details and full message are included.
3. In EmailJS, copy the email service ID, email template ID, and **public key** from the account's API keys. Set these environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. For local development, copy `.env.example` to `.env`, replace the placeholders, then restart `npm run dev`. Do not commit `.env`.
5. In Netlify, open **Site configuration** → **Environment variables** and set the same three variables for the deploy context(s) you use, then trigger a fresh deploy. Vite embeds `VITE_` variables into the built frontend.
6. In EmailJS, restrict allowed origins/domains to the local development origin and your deployed portfolio domain. The form also includes a honeypot and prevents parallel duplicate submissions; set appropriate sending limits in EmailJS as an additional spam safeguard.

The EmailJS public key, service ID, and template ID are used by the browser and are not private credentials. Never put an EmailJS private key, email password, or SMTP credentials in these variables or in frontend code. A successful message is shown only after EmailJS confirms the send request. Test the deployed form with a real submission after configuring these values; the build alone cannot verify delivery to your inbox.

### Netlify

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site** → **Import an existing project** and select the repository.
3. Set the build command to `npm run build` and the publish directory to `dist`. Add the three EmailJS environment variables above in Netlify before deploying.
4. Deploy. Netlify will provide the public site URL.

### Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New** → **Project** and import the repository.
3. Select the Vite framework preset, confirm the build command `npm run build` and output directory `dist`, then deploy.
4. Copy the production URL from the project dashboard.

The PDF in `public/` is served publicly as the CV download, so its contents are visible to site visitors.
