import { createContext, useContext, type ComponentProps } from "react"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "uilab-core"

export const dataListVariants = cva("overflow-hidden font-normal text-left", {
  variants: {
    orientation: {
      horizontal: "flex flex-col",
      vertical: "flex flex-col",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    size: "default",
  },
})

const DataListOrientationContext = createContext<"horizontal" | "vertical">(
  "horizontal"
)

export function DataList({
  className,
  orientation = "horizontal",
  size,
  render = <dl />,
  ...props
}: VariantProps<typeof dataListVariants> & useRender.ComponentProps<"dl">) {
  return (
    <DataListOrientationContext.Provider value={orientation || "horizontal"}>
      {useRender({
        render,
        props: {
          ...props,
          className: cn(
            "gap-2",
            dataListVariants({ orientation, size }),
            className
          )
        },
      })}
    </DataListOrientationContext.Provider>
  )
}

export interface DataListItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function DataListItem({ className, ...props }: ComponentProps<"div">) {
  const orientation = useContext(DataListOrientationContext)

  return (
    <div
      className={cn(
        className,
        "flex justify-between gap-4 border-b pb-1 last:border-none",
        orientation === "horizontal" ? "items-center" : "flex-col"
      )}
      {...props}
    />
  )
}

export function DataListLabel({ className, ...props }: ComponentProps<"dt">) {
  return (
    <dt
      className={cn(
        "text-xs text-nowrap text-gray-600 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export function DataListValue({ className, ...props }: ComponentProps<"div">) {
  return (
    <dd
      className={cn("text-right text-xs text-black dark:text-white", className)}
      {...props}
    />
  )
}
