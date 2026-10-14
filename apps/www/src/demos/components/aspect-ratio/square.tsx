import { AspectRatio } from "uilab-core"

export function AspectRatioSquareExample() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="bg-muted w-full max-w-48 rounded-lg"
    >
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        className="absolute inset-0 size-full rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
