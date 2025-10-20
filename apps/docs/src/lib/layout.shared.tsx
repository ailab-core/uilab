import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Tanstack Start",
    },
    // Disable search for static deployment to avoid 401 errors
    enableSearch: false,
  }
}
