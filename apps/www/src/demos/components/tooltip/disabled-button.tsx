import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "uilab-core"

export function TooltipDisabledButtonExample() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={
          <span className="inline-block w-fit">
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </span>
        } />
        <TooltipContent>
          <p>This feature is currently unavailable</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}
