# ledgr-landing

Marketing landing page for Ledgr, including a waitlist signup form.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

> **Note:** The `/api/waitlist` route is only available in development mode. It is not included in the static export and will not work in production.

## Build

```bash
npm run build
```

The static site is exported to the `out/` directory.

## Deploy to Cloudflare Pages

1. Install Wrangler globally (one-time setup):

```bash
npm i -g wrangler
```

2. Authenticate with Cloudflare:

```bash
wrangler login
```

3. Build and deploy:

```bash
npm run deploy
```

This runs `next build` and then uploads the `out/` directory to the `ledgr-landing` Cloudflare Pages project.
