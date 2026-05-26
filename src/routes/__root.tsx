import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="mt-6 inline-flex rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90">
            Go home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
          >Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cura Institutions — RGUHS Nursing & Allied Health College, Bangalore" },
      { name: "description", content: "RGUHS-affiliated nursing & allied health sciences college in Hebbal, Bangalore. BSc Nursing, MIT, AOTT, Cardiac Care, Radiotherapy, ETCT, MLT and BPT — with priority placement at Cura Hospitals." },
      { property: "og:site_name", content: "Cura Institutions" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Cura Institutions — RGUHS Nursing & Allied Health College, Bangalore" },
      { name: "twitter:title", content: "Cura Institutions — RGUHS Nursing & Allied Health College, Bangalore" },
      { property: "og:description", content: "RGUHS-affiliated nursing & allied health sciences college in Hebbal, Bangalore. BSc Nursing, MIT, AOTT, Cardiac Care, Radiotherapy, ETCT, MLT and BPT — with priority placement at Cura Hospitals." },
      { name: "twitter:description", content: "RGUHS-affiliated nursing & allied health sciences college in Hebbal, Bangalore. BSc Nursing, MIT, AOTT, Cardiac Care, Radiotherapy, ETCT, MLT and BPT — with priority placement at Cura Hospitals." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/197ee45f-b26a-406a-936e-908128003262/id-preview-2f589f4c--b05b5b72-9dae-418d-99ba-3b409e0806e5.lovable.app-1779775364484.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/197ee45f-b26a-406a-936e-908128003262/id-preview-2f589f4c--b05b5b72-9dae-418d-99ba-3b409e0806e5.lovable.app-1779775364484.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
