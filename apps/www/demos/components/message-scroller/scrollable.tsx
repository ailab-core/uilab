"use client"
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  useMessageScrollerScrollable,
  Message,
  MessageContent,
  Bubble,
  BubbleContent,
} from "uilab-core"

function ScrollableStatus() {
  const scrollable = useMessageScrollerScrollable()

  let text = "All messages fit on the screen"
  if (scrollable?.start && scrollable?.end) text = "Scrollable both up and down"
  else if (scrollable?.start) text = "Scrolled to the bottom — can scroll up"
  else if (scrollable?.end) text = "Messages below — scroll down"

  return <p className="text-muted-foreground mt-2 text-xs">{text}</p>
}

export function MessageScrollerScrollableExample() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-60 rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <MessageScrollerItem key={i}>
                <Message align="start">
                  <MessageContent>
                    <Bubble variant="muted">
                      <BubbleContent>Message #{i + 1}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
      <ScrollableStatus />
    </MessageScrollerProvider>
  )
}