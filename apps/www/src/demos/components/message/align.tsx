import { Message, MessageAvatar, MessageContent, MessageFooter, Bubble, BubbleContent } from "uilab-core"

export function MessageAlignExample() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Message align="start">
        <MessageAvatar>👤</MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>Received message (start)</BubbleContent>
          </Bubble>
          <MessageFooter>10:28 AM</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble variant="default">
            <BubbleContent>Sent message (end)</BubbleContent>
          </Bubble>
          <MessageFooter>10:30 AM</MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}