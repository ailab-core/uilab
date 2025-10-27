import { Fragment, type ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const containerVariants = cva(
  "mx-auto px-4 sm:px-6 lg:px-8 my-12 flex flex-col gap-6",
  {
    variants: {
      variant: {
        constrainedPadded: "container max-w-5xl px-4 sm:px-6",
        breakpointPadded: "container mx-auto px-4 sm:px-6",
        narrowConstrainedPadded: "max-w-5xl px-4 sm:px-6 max-w-3xl",
      },
    },
    defaultVariants: {
      variant: "breakpointPadded",
    },
  }
)

export function Container({
  asChild,
  className,
  children,
  variant,
  ...props
}: ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Fragment : "div"
  const containerClasses = cn(containerVariants({ variant }), className)

  return (
    <Comp className={containerClasses} {...props}>
      {children}
    </Comp>
  )
}
