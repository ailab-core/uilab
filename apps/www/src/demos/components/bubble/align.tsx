import { Bubble, BubbleContent } from "uilab-core"

export function BubbleAlignExample() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Bubble align="start" variant="muted">
        <BubbleContent>Left side (start)</BubbleContent>
      </Bubble>
      <Bubble align="end" variant="default">
        <BubbleContent>Right side (end)</BubbleContent>
      </Bubble>
    </div>
  )
}