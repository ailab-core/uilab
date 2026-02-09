"use client"

import Image from "next/image"
import { AspectRatio } from "uilab-core"

export function AspectRatioPreviewExample() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted w-full max-w-sm rounded-lg">
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}

