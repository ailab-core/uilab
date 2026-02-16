import { BanknoteIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import {
  Field,
  FieldError,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  cn,
} from "uilab-core";
import type { InputAttributes, NumberFormatValues } from "react-number-format";

export function CurrencyInputField({
  name,
  placeholder,
  label,
  labelOnClick,
  labelClassName = "",
  labelIcon,
  value,
  onValueChange,
  ...props
}: Omit<InputAttributes, "type"> & {
  name: string;
  label?: string;
  labelOnClick?: (event: any) => void;
  labelClassName?: string;
  labelIcon?: React.ReactNode;
  value?: number | string;
  onValueChange?: (values: {
    value: string;
    floatValue: number | undefined;
    formattedValue: string;
  }) => void;
}) {
  const form = useFormContext();

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <Field
            data-invalid={fieldState.invalid}
            className={cn("w-full", props.className)}
          >
            <FieldLabel
              className={labelClassName}
              onClick={labelOnClick && labelOnClick}
            >
              {labelIcon && labelIcon}
              {label || "Amount"}
            </FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <BanknoteIcon />
              </InputGroupAddon>
              <NumericFormat
                {...props}
                aria-invalid={fieldState.invalid}
                placeholder={placeholder ?? label ?? ""}
                customInput={InputGroupInput}
                value={field.value ?? ""}
                onValueChange={(values: NumberFormatValues) => {
                  field.onChange(
                    values.floatValue === undefined ? null : values.floatValue,
                  );
                  if (onValueChange) onValueChange(values);
                }}
                valueIsNumericString={true}
                thousandSeparator
              />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        );
      }}
    />
  );
}
