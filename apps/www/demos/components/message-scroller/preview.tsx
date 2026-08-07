"use client"
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  Bubble,
  BubbleContent,
  Marker,
  MarkerContent,
} from "uilab-core"

export function MessageScrollerPreview() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-80 rounded-lg border">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            <MessageScrollerItem>
              <Marker variant="separator">
                <MarkerContent>Today</MarkerContent>
              </Marker>
            </MessageScrollerItem>

            <MessageScrollerItem>
              <Message align="start">
                <MessageAvatar>👤</MessageAvatar>
                <MessageContent>
                  <Bubble variant="muted">
                    <BubbleContent>Hello!</BubbleContent>
                  </Bubble>
                  <MessageFooter>10:28 AM</MessageFooter>
                </MessageContent>
              </Message>
            </MessageScrollerItem>

            <MessageScrollerItem>
              <Message align="end">
                <MessageContent>
                  <Bubble variant="default">
                    <BubbleContent>Hi, how can I help you?</BubbleContent>
                  </Bubble>
                  <MessageFooter>10:30 AM</MessageFooter>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton variant={undefined} size={undefined}/>
      </MessageScroller>
    </MessageScrollerProvider>
  )
}