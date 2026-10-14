import { Bubble, BubbleContent, BubbleReactions } from "uilab-core"

export function BubbleReactionsExample() {
  return (
    <Bubble variant="tinted">
      <BubbleContent>Understood, Thank you</BubbleContent>
      <BubbleReactions>👍</BubbleReactions>
    </Bubble>
  )
}