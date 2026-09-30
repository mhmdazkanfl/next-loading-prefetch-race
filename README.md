# Empty page instead of `loading.tsx` when a link is clicked during its prefetch

Minimal reproduction, made from `npx create-next-app -e reproduction-template`.

## Files

- `app/page.tsx` links to `/slow`.
- `app/slow/loading.tsx` renders `Loading…`.
- `app/slow/layout.tsx` waits 3 s. The prefetch of the loading state renders this layout, so the prefetch takes 3 s. That leaves time to click while it is in flight.
- `app/slow/page.tsx` waits 6 s.

## Steps

The dev server does not prefetch loading states, so use a production build.

```bash
pnpm install
pnpm build
pnpm start
```

1. Open http://localhost:3000.
2. Click "Go to /slow" within 3 seconds of the page loading.

About 3 s after the page loads, the URL changes to `/slow` and the page is empty. `Loading…` never shows. "Slow page" appears about 3 s later.

To compare, reload and wait 4 seconds before clicking. `Loading…` shows right after the click, as expected.
