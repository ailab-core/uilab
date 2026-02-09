import type { DemoItem } from ".."
import { InputOTPPreview } from "./preview"
import { InputOTPSeparatorExample } from "./separator"
import { InputOTPDisabledExample } from "./disabled"
import { InputOTPControlledExample } from "./controlled"
import { InputOTPInvalidExample } from "./invalid"
import { InputOTPFormExample } from "./form"


export const InputOTPDemos: Record<string, DemoItem> = {
  "input-otp-preview": {
    component: InputOTPPreview,
    file: "input-otp/preview.tsx",
  },
  "input-otp-separator": {
    component: InputOTPSeparatorExample,
    file: "input-otp/separator.tsx",
  },
  "input-otp-disabled": {
    component: InputOTPDisabledExample,
    file: "input-otp/controlled.tsx",
  },
  "input-otp-controlled": {
    component: InputOTPControlledExample,
    file: "input-otp/controlled.tsx",
  },
  "input-otp-invalid": {
    component: InputOTPInvalidExample,
    file: "input-otp/invalid.tsx",
  },
  "input-otp-form": {
    component: InputOTPFormExample,
    file: "input-otp/form.tsx",
  }
}
