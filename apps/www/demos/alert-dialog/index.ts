import type { DemoItem } from '..'

import { AlertDialogPreview } from './preview'
import { AlertDialogBasicExample } from './basic'
import { AlertDialogSmallExample } from './small'
import { AlertDialogWithMediaExample } from './media'
import { AlertDialogSmallWithMediaExample } from './small-with-media'
import { AlertDialogDestructiveExample } from './destructive'

export const AlertDialogDemos: Record<string, DemoItem> = {
  "alert-dialog-preview": {
    component: AlertDialogPreview,
    file: 'alert-dialog/preview.tsx',
  },
  "alert-dialog-basic": {
    component: AlertDialogBasicExample,
    file: 'alert-dialog/basic.tsx',
  },
  "alert-dialog-small": {
    component: AlertDialogSmallExample,
    file: 'alert-dialog/small.tsx',
  },
  "alert-dialog-with-media": {
    component: AlertDialogWithMediaExample,
    file: 'alert-dialog/media.tsx',
  },
  "alert-dialog-small-with-media": {
    component: AlertDialogSmallWithMediaExample,
    file: 'alert-dialog/small-with-media.tsx',
  },
  "alert-dialog-destructive": {
    component: AlertDialogDestructiveExample,
    file: 'alert-dialog/destructive.tsx',
  },
}
