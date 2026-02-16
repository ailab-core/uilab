"use client"

import Image from "next/image"
import { AspectRatio } from "uilab-core"

export function AspectRatioSquareExample() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="bg-muted w-full max-w-48 rounded-lg"
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
