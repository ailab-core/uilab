import type { ComponentType } from "react"
import { AccordionDemos } from "./accordion"
import { AlertDialogDemos } from "./alert-dialog"
import { AlertDemos } from "./alert"
import { AspectRatioDemos } from "./aspect-ratio"
import { AvatarDemos } from "./avatar"
import { BadgeDemos } from "./badge"
import { BreadcrumbDemos } from "./breadcrumb"
import { ButtonDemos } from "./button"
import { ButtonGroupDemos } from "./button-group"
import { CalendarDemos } from "./calendar"
import { CardDemos } from "./card"
import { CheckboxDemos } from "./checkbox"
import { CollapsibleDemos } from "./collapsible"
import { CommandDemos } from "./command"
import { ContextMenuDemos } from "./context-menu"
import { DialogDemos } from "./dialog"
import { DrawerDemos } from "./drawer"
import { DropdownMenuDemos } from "./dropdown-menu"
import { EmptyDemos } from "./empty"
import { FieldDemos } from "./field"
import { HoverCardDemos } from "./hover-card"
import { InputDemos } from "./input"
import { InputGroupDemos } from "./input-group"
import { InputOTPDemos } from "./input-otp"
import { ItemDemos } from "./item"
import { KbdDemos } from "./kbd"
import { LabelDemos } from "./label"
import { MenubarDemos } from "./menubar"
import { NavigationMenuDemos } from "./navigation-menu"
import { PaginationDemos } from "./pagination"
import { PopoverDemos } from "./popover"
import { ProgressDemos } from "./progress"
import { RadioGroupDemos } from "./radio-group"
import { ResizableDemos } from "./resizable"
import { ScrollAreaDemos } from "./scroll-area"
import { SelectDemos } from "./select"
import { SeparatorDemos } from "./separator"
import { SheetDemos } from "./sheet"
import { SkeletonDemos } from "./skeleton"
import { SliderDemos } from "./slider"
import { SonnerDemos } from "./sonner"
import { SpinnerDemos } from "./spinner"
import { SwitchDemos } from "./switch"
import { TabsDemos } from "./tabs"
import { TextareaDemos } from "./textarea"
import { ToggleDemos } from "./toggle"
import { ToggleGroupDemos } from "./toggle-group"
import { TooltipDemos } from "./tooltip"

export interface DemoItem {
    component: ComponentType,
    file: string;
}

export const demos: Record<string, DemoItem> = {
    ...AccordionDemos,
    ...AlertDialogDemos,
    ...AlertDemos,
    ...AspectRatioDemos,
    ...AvatarDemos,
    ...BadgeDemos,
    ...BreadcrumbDemos,
    ...ButtonGroupDemos,
    ...ButtonDemos,
    ...CalendarDemos,
    ...CardDemos,
    ...CheckboxDemos,
    ...CollapsibleDemos,
    ...CommandDemos,
    ...ContextMenuDemos,
    ...DialogDemos,
    ...DrawerDemos,
    ...DropdownMenuDemos,
    ...EmptyDemos,
    ...FieldDemos,
    ...HoverCardDemos,
    ...InputDemos,
    ...InputGroupDemos,
    ...InputOTPDemos,
    ...ItemDemos,
    ...KbdDemos,
    ...LabelDemos,
    ...MenubarDemos,
    ...NavigationMenuDemos,
    ...PaginationDemos,
    ...PopoverDemos,
    ...ProgressDemos,
    ...RadioGroupDemos,
    ...ResizableDemos,
    ...ScrollAreaDemos,
    ...SelectDemos,
    ...SeparatorDemos,
    ...SheetDemos,
    ...SkeletonDemos,
    ...SliderDemos,
    ...SonnerDemos,
    ...SpinnerDemos,
    ...SwitchDemos,
    ...TabsDemos,
    ...TextareaDemos,
    ...ToggleDemos,
    ...ToggleGroupDemos,
    ...TooltipDemos
}

export function getDemo(name: string): DemoItem | undefined {
    return demos[name];
}
