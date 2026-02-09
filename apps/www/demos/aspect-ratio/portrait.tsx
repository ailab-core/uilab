"use client"

import Image from "next/image"
import { AspectRatio } from "uilab-core"

export function AspectRatioPortraitExample() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="bg-muted w-full max-w-40 rounded-lg"
    >
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
