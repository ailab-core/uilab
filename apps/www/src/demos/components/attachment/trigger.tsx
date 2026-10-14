import {
  Attachment,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "uilab-core"
import { FileTextIcon, XIcon } from "lucide-react"

export function AttachmentTriggerExample() {
  return (
    <Dialog>
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>report.pdf</AttachmentTitle>
          <AttachmentDescription>2.4 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="report.pdf-г устгах">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
        <DialogTrigger
          render={<AttachmentTrigger aria-label="report.pdf-г урьдчилан харах" />}
        />
      </Attachment>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>report.pdf</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">Файлын урьдчилан харах агуулга энд байрлана.</p>
      </DialogContent>
    </Dialog>
  )
}