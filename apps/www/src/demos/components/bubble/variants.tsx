import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "uilab-core"

export function BubbleVariantsExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-2">
      <BubbleGroup>
        <Bubble align="end" variant="default">
          <BubbleContent>This is the default primary bubble.</BubbleContent>
        </Bubble>

        <Bubble align="end" variant="secondary">
          <BubbleContent>This is the secondary variant.</BubbleContent>
        </Bubble>
      </BubbleGroup>

      <Bubble align="start" variant="muted">
        <BubbleContent>
          This one is muted. It uses a lower emphasis color for the chat bubble.
        </BubbleContent>
        <BubbleReactions>👍</BubbleReactions>
      </Bubble>

      <Bubble align="end" variant="tinted">
        <BubbleContent>
          This one is tinted. The tint is a softer color derived from the primary color.
        </BubbleContent>
      </Bubble>

      <Bubble align="start" variant="outline">
        <BubbleContent>We can also use an outlined variant.</BubbleContent>
      </Bubble>

      <Bubble align="end" variant="destructive">
        <BubbleContent>Or a destructive variant with a reaction.</BubbleContent>
        <BubbleReactions>🔥</BubbleReactions>
      </Bubble>
    </div>
  )
}