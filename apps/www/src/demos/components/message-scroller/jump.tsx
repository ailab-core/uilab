import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  useMessageScroller,
  Message,
  MessageContent,
  Bubble,
  BubbleContent,
  Button,
} from "uilab-core"

function JumpControls() {
  const { scrollToMessage, scrollToStart, scrollToEnd } = useMessageScroller()

  return (
    <div className="mb-2 flex gap-2">
      <Button size="sm" variant="outline" onClick={() => scrollToStart()}>
        Start
      </Button>
      <Button size="sm" variant="outline" onClick={() => scrollToMessage("msg-5")}>
        Jump to Message #5
      </Button>
      <Button size="sm" variant="outline" onClick={() => scrollToEnd()}>
        End
      </Button>
    </div>
  )
}

export function MessageScrollerJumpExample() {
  return (
    <MessageScrollerProvider>
      <JumpControls />
      <MessageScroller className="h-60 rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <MessageScrollerItem key={i} messageId={`msg-${i + 1}`}>
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
    </MessageScrollerProvider>
  )
}