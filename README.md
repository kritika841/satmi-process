# Satmi Process

Deploy-ready Next.js scaffold for Satmi's incense-making process pages.

## What is included

- A landing page that lists six process URLs.
- Six static process routes at `/process/1/` through `/process/6/`.
- Static export configuration so the site can be deployed to Vercel, Netlify, GitHub Pages-style hosting, or any static host.

## Local development

```bash
npm install
npm run dev
```

## Production build

Set your public site URL before building so the absolute URLs render correctly:

```bash
cp .env.example .env.local
```

Then update `NEXT_PUBLIC_SITE_URL` to the final deployed domain and run:

```bash
npm run build
```

The export output is written to `out/`.

## QR codes

After deployment, point your packaging QR code at the final URL for the page you want, for example:

- `https://your-domain.example/process/1/`
- `https://your-domain.example/process/2/`
- `https://your-domain.example/process/3/`
- `https://your-domain.example/process/4/`
- `https://your-domain.example/process/5/`
- `https://your-domain.example/process/6/`

If you want, I can add a generated QR image asset or a dedicated QR download page once the production domain is known.