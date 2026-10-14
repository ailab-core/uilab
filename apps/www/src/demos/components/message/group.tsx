import { MessageGroup, Message, MessageAvatar, MessageContent, MessageHeader, MessageFooter, Bubble, BubbleContent } from "uilab-core"

export function MessageGroupExample() {
  return (
    <MessageGroup>
      <Message align="start">
        <MessageAvatar>👤</MessageAvatar>
        <MessageContent>
          <MessageHeader>John Doe</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>First message</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="start">
        <MessageAvatar />
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>Second message (same sender)</BubbleContent>
          </Bubble>
          <MessageFooter>10:31 AM</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}