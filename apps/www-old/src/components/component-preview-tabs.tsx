import * as React from "react"
import { cn } from "uilab-core"

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  component: React.ReactNode
  source: React.ReactNode
}) {
  return (
    <div data-slot="preview" {...props}>
      <div
        data-align={align}
        className={cn(
          "mt-4 mb-4 border rounded-lg overflow-hidden flex w-full justify-center data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
          chromeLessOnMobile ? "sm:p-10" : "h-[450px] p-10"
        )}
      >
        {component}
      </div>
      {!hideCode && source}
    </div>
  )
}
