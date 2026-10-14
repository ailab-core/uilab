import { Attachment, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription } from "uilab-core"

export function AttachmentImageExample() {
  return (
    <Attachment orientation="vertical">
      <AttachmentMedia variant="image">
        <img src="https://picsum.photos/seed/uilab/200/200" alt="Жишээ зураг" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>image.jpg</AttachmentTitle>
        <AttachmentDescription>1.1 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  )
}