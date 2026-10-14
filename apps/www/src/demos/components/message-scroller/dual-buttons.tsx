import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  Message,
  MessageContent,
  MessageFooter,
  Bubble,
  BubbleContent,
} from "uilab-core"

export function MessageScrollerDualButtonsExample() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-80 rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <MessageScrollerItem key={i}>
                <Message align={i % 2 === 0 ? "start" : "end"}>
                  <MessageContent>
                    <Bubble variant={i % 2 === 0 ? "muted" : "default"}>
                      <BubbleContent>Message #{i + 1}</BubbleContent>
                    </Bubble>
                    <MessageFooter>10:{20 + i} AM</MessageFooter>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton direction="start" variant={undefined} size={undefined} />
        <MessageScrollerButton direction="end" variant={undefined} size={undefined} />
      </MessageScroller>
    </MessageScrollerProvider>
  ) 
}