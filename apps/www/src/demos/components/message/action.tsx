import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  Bubble,
  BubbleContent,
  Button,
} from "uilab-core"
import { CopyIcon, RotateCcwIcon, ThumbsUpIcon, ThumbsDownIcon } from "lucide-react"

export function MessageActionExample() {
  return (
    <Message align="start">
      <MessageAvatar>🤖</MessageAvatar>
      <MessageContent>
        <Bubble variant="muted">
          <BubbleContent>Task completed successfully.</BubbleContent>
        </Bubble>
        <MessageFooter>
          <Button variant="ghost" size="icon-sm" aria-label="Copy">
            <CopyIcon />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Retry">
            <RotateCcwIcon />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Like">
            <ThumbsUpIcon />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Dislike">
            <ThumbsDownIcon />
          </Button>
        </MessageFooter>
      </MessageContent>
    </Message>
  )
}