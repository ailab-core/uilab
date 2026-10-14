import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  useMessageScrollerVisibility,
  Message,
  MessageContent,
  Bubble,
  BubbleContent,
} from "uilab-core"

function VisibilityStatus() {
  const { currentAnchorId, visibleMessageIds } = useMessageScrollerVisibility()

  return (
    <p className="text-muted-foreground mt-2 text-xs">
      Current message: {currentAnchorId ?? "—"} · Visible: {visibleMessageIds.length}
    </p>
  )
}

export function MessageScrollerVisibilityExample() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-60 rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <MessageScrollerItem key={i} messageId={`vis-${i + 1}`}>
                <Message align="start">
                  <MessageContent>
                    <Bubble variant="muted">
                      <BubbleContent>Message     #{i + 1}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
      <VisibilityStatus />
    </MessageScrollerProvider>
  )
}