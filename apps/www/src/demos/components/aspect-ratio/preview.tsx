import { AspectRatio } from "uilab-core"

export function AspectRatioPreviewExample() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted w-full max-w-sm rounded-lg">
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        className="absolute inset-0 size-full rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}

