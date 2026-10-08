# AppZad website

The public marketing site for AppZad (Home, Features, Contact, Privacy Policy, Terms of Service, 404). Built on the
[Cruip](https://cruip.com) **Simple** Next.js template. The HMS itself is a separate app (`../webapp`).

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Optional, see `.env.example`. Both have production defaults in `lib/site.ts`:

| Variable | Default | What it is |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.appzad.com` | Where this site is served. Used for canonical URLs, the sitemap and Open Graph. |
| `NEXT_PUBLIC_APP_URL` | `https://app.appzad.com` | The HMS web app. "Login" links to its `/sign-in`. Change it when the app moves to the bare domain. |

The contact email, the navigation links and the "Get Started" target are in `lib/site.ts` too.

## Where things are

- `app/(default)/`: the pages. `app/not-found.tsx` is the 404, `app/sitemap.ts` / `app/robots.ts` / `app/opengraph-image.tsx` are generated at build.
- `components/features-home.tsx`: the feature list shown on Home and Features. Every line describes something the HMS does today; change the product first, then this list.
- `content/legal/*.mdx`: the Privacy Policy and Terms of Service text. `CONTACT_EMAIL` in them is replaced with the address from `lib/site.ts`.

## Building for production

```bash
pnpm build
```

## License

The template is governed by the [Cruip premium license](https://cruip.com/terms/).
