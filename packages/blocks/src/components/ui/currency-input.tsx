import * as React from "react"
import { useFormContext } from "react-hook-form"
import { NumericFormat, type InputAttributes } from "react-number-format"
import {
  cn,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "uilab-core"

export function CurrencyInput({
  name,
  label,
  ...props
}: Omit<InputAttributes, "type"> & {
  name: string
  label?: string
}) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const { onChange, ...fields } = field
        return (
          <FormItem className="w-full">
            <FormLabel>{label || "Amount"}</FormLabel>
            <FormControl>
              <NumericFormat
                {...props}
                {...fields}
                className={cn(
                  "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                  props.className
                )}
                onValueChange={(values) => onChange(values.floatValue)}
                valueIsNumericString={true}
                thousandSeparator
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
