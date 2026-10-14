import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { RootProvider } from "fumadocs-ui/provider/tanstack";
import type * as React from "react";
import { appName, siteUrl } from "@/lib/shared";
import { ConfirmationProvider } from "@/registry/base/components/confirmation";
import { Toaster } from "@/registry/base/components/sonner";
import appCss from "@/styles/global.css?url";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Chiron+GoRound+TC:wght@400;500;600;700&display=swap";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: appName },
      { property: "og:site_name", content: appName },
      { property: "og:url", content: siteUrl },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: FONT_URL },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col">
        <Toaster richColors />
        <ConfirmationProvider>
          <RootProvider>{children}</RootProvider>
        </ConfirmationProvider>
        <Scripts />
      </body>
    </html>
  );
}
