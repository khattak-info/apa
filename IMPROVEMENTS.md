# APA Project Improvements

Tick the boxes you want done. Effort: **S** < 30 min, **M** a few hours, **L** a day or more.

## 1. Fix first (deployment blockers)

- [ ] **Fix `tsc` errors so `npm run build` passes** (S). Currently fails on:
  - `src/pages/EventsDetails.tsx` and `src/pages/EventsGallery.tsx`: `.eq("id", id)` receives `string | undefined`.
  - `src/pages/Members.tsx`: `(string | null)[]` assigned to `string[]`.
  - `src/pages/Membership.tsx`: `frameborder` should be `frameBorder`.
  - `src/pages/Donations.tsx`: unused `Link` import.
- [ ] **Fix ESLint errors** (S): unused `redirect` in `Terms.tsx`; two `any` in `EventsGallery.tsx` (type the `picflow` global).
- [ ] **Remove duplicate deploy workflow** (S): `.github/workflows/deploy.yml` and `main.yml` are identical. Decide on the host (GitHub Pages vs Netlify). The contact form needs Netlify.
- [ ] **Untrack junk files** (S): `vite-dev-log.txt` and `.DS_Store` files. Add them to `.gitignore`.

## 2. Security

- [ ] **Harden `netlify/functions/contact-submit.mts`** (M): validate email format and field lengths, add a honeypot or Cloudflare Turnstile, add rate limiting. Right now it can send mail to any address.
- [ ] **Review Supabase RLS policies** (M): confirm that only admins can write `events.iframe_html` and `gallery_html`, and that role checks are enforced in the database, not only by `RequireRole`.
- [ ] **Check `/admin/signup`** (S): confirm signing up grants no roles. Consider disabling public signup or making it invite-only.
- [ ] **Sanitise injected HTML** (M): use DOMPurify in `HtmlEmbed` and for `gallery_html`, allowing iframes only from trusted hosts (Zeffy, Picflow).

## 3. Code quality

- [ ] **Shared data-fetching hook** (M): `Events`, `EventsDetails`, `EventsGallery`, `Members` and `Council` repeat the same fetch, loading and error code. Add a hook or TanStack Query.
- [ ] **Route-level code splitting** (S): use `React.lazy` and `Suspense` in `src/App.tsx`, especially for admin pages.
- [ ] **Split `AuthContext.tsx`** (S): move the `useAuth` hook to its own file (fast-refresh warning).
- [ ] **Move Terms/Privacy text out of TSX** (M): store it as Markdown or JSON and render it safely instead of using `dangerouslySetInnerHTML`.
- [ ] **Event slugs** (M): add a `slug` column and drop the `legacy_id ?? id` and `Number(id)` guessing once the migration is done.
- [ ] **Delete dead code** (S): check whether `src/pages/Index.tsx` or `Home.tsx` is unused; remove the Luma script in `index.html` once no event uses Luma.
- [ ] **Rename package** (S): `package.json` name is still `template-react-vite`.

## 4. Dependencies and tooling

- [ ] **Keep one lockfile** (S): both `package-lock.json` and `bun.lock` exist.
- [ ] **Remove `netlify-cli` from devDependencies** (S): use `npx` or a global install.
- [ ] **CI checks on pull requests** (S): run `npm run lint` and `npm run build`.
- [ ] **Add Vitest tests** (M): Zeffy URL conversion, `RequireRole`, contact function validation.

## 5. SEO and performance

- [ ] **Meta tags** (S): description, Open Graph, favicon in `index.html`.
- [ ] **Per-page titles** (S): `react-helmet-async` or a small `useDocumentTitle` hook.
- [ ] **Optimise images** (M): `public/` is about 2.1 MB. Convert to WebP, set `width`/`height`, use `loading="lazy"` below the fold.

## 6. Accessibility and UX

- [ ] **Remove the empty `<button disabled></button>`** in `Events.tsx` (S).
- [ ] **Use real links for event cards** instead of `window.open(..., '_blank')` (S).
- [ ] **Meaningful `alt` text** for images that currently use `alt=""` or only the title (S).
- [ ] **Loading skeletons and an empty state** for the events list when a category has no events (S).

## 7. Zeffy follow-ups

- [ ] **Replace the PayPal block with Zeffy** on `EventsDetails.tsx` if donations have moved too (S). Needs the donation URL. If the event has no Zeffy URL, show a "Request to Join" button instead. if the event has paypal, show the PayPal button. If the event has Zeffy, show the Zeffy button. If the event has neither, show "Request to Join".

- [ ] **Auto-resize the embedded form** (M): the Zeffy embed script is skipped in `HtmlEmbed` because it hung the page. Investigate a safe way to run it, or keep a fixed iframe height.

- [ ] **Admin form hints** (S): update the labels in `src/admin/EventsAdmin.tsx` from "Luma link" to Zeffy, and note which fields the details page uses.
