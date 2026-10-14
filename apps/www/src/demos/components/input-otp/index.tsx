import type { DemoItem } from '@/demos'

import { InputOTPPreview } from "./preview"
import { InputOTPSeparatorExample } from "./separator"
import { InputOTPDisabledExample } from "./disabled"
import { InputOTPControlledExample } from "./controlled"
import { InputOTPInvalidExample } from "./invalid"
import { InputOTPFormExample } from "./form"

export const InputOTPDemos: Record<string, DemoItem> = {
  "input-otp-preview": {
    component: InputOTPPreview,
    file: "components/input-otp/preview.tsx",
  },
  "input-otp-separator": {
    component: InputOTPSeparatorExample,
    file: "components/input-otp/separator.tsx",
  },
  "input-otp-disabled": {
    component: InputOTPDisabledExample,
    file: "components/input-otp/controlled.tsx",
  },
  "input-otp-controlled": {
    component: InputOTPControlledExample,
    file: "components/input-otp/controlled.tsx",
  },
  "input-otp-invalid": {
    component: InputOTPInvalidExample,
    file: "components/input-otp/invalid.tsx",
  },
  "input-otp-form": {
    component: InputOTPFormExample,
    file: "components/input-otp/form.tsx",
  }
}
