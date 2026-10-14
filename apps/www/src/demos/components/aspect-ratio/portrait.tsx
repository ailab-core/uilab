import { AspectRatio } from "uilab-core"

export function AspectRatioPortraitExample() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="bg-muted w-full max-w-40 rounded-lg"
    >
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        className="absolute inset-0 size-full rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
