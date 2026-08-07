"use client"
import {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
} from "uilab-core"
import { ImageIcon } from "lucide-react"

export function AttachmentVerticalExample() {
  return (
    <AttachmentGroup>
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>image1.png</AttachmentTitle>
          <AttachmentDescription>1.2 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>image2.png</AttachmentTitle>
          <AttachmentDescription>0.8 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  )
}