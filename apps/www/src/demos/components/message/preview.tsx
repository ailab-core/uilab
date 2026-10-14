import { Message, MessageAvatar, MessageContent, MessageHeader, MessageFooter, Bubble, BubbleContent } from "uilab-core"

export function MessagePreview() {
  return (
    <Message align="start">
      <MessageAvatar>👤</MessageAvatar>
      <MessageContent>
        <MessageHeader>Bat</MessageHeader>
        <Bubble variant="muted">
          <BubbleContent>Hi, how can I help you?</BubbleContent>
        </Bubble>
        <MessageFooter>10:30 AM</MessageFooter>
      </MessageContent>
    </Message>
  )
}