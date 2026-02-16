import { RefreshCcwIcon } from "lucide-react"
import { Button, cn, Tooltip, TooltipContent, TooltipTrigger } from "uilab-core"

export type DataGridToolbarProps = {
  /** Tooltip text for the refresh button */
  refreshText?: string
  /** Click handler for the refresh button */
  onRefreshClick?: React.MouseEventHandler<HTMLButtonElement>
} & React.ComponentProps<"div">

export function DataGridToolbar({
  className,
  children,
  refreshText,
  onRefreshClick,
}: DataGridToolbarProps) {
  return (
    <div
      className={cn(
        "bg-muted/40 flex items-end justify-between gap-2 border-t px-4 py-2",
        className,
      )}
    >
      {children}
      {onRefreshClick && (
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" onClick={onRefreshClick}>
                <RefreshCcwIcon />
              </Button>
            }
          />
          <TooltipContent side="bottom">
            {refreshText || "Refresh"}
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  )
}

