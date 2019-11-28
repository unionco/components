declare module '@union/components' {
  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
  import * as StyledSystem from 'styled-system';
  import * as StyledComponents from 'styled-components';
  import * as History from 'history';

  export interface BaseProps extends React.Props<any> {
    as?: React.ReactType
    title?: string
    // NOTE(@mxstbr): Necessary workaround to make <Component as={Link} to="/bla" /> work
    to?: History.LocationDescriptor
  }

  interface CommonProps extends BaseProps, StyledSystem.ColorProps, StyledSystem.SpaceProps { }

  interface LayoutProps
    extends BaseProps,
    StyledSystem.LayoutProps { }

  interface TypographyProps
    extends BaseProps,
    StyledSystem.TypographyProps {
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'
  }

  interface BorderProps
    extends BaseProps,
    StyledSystem.BordersProps,
    StyledSystem.BorderColorProps,
    StyledSystem.BoxShadowProps,
    StyledSystem.BorderRadiusProps { }

  interface PositionProps
    extends BaseProps,
    StyledSystem.PositionProps,
    StyledSystem.ZIndexProps,
    StyledSystem.TopProps,
    StyledSystem.RightProps,
    StyledSystem.BottomProps,
    StyledSystem.LeftProps { }

  interface FlexItemProps
    extends BaseProps,
    CommonProps,
    LayoutProps,
    StyledSystem.FlexProps,
    StyledSystem.JustifySelfProps,
    StyledSystem.AlignSelfProps,
    StyledSystem.OrderProps { }

  interface FlexProps extends BaseProps, CommonProps, LayoutProps, StyledSystem.FlexboxProps, BoxProps { }

  export const Flex: React.FunctionComponent<FlexProps> & {
    Item: React.FunctionComponent<FlexItemProps>
  }

  export interface BoxProps
    extends BaseProps,
    CommonProps,
    LayoutProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> { }

  export const Box: React.FunctionComponent<BoxProps>

  export interface TextProps
    extends BaseProps,
    CommonProps,
    TypographyProps,
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> { }

  export const Text: React.FunctionComponent<TextProps>

  export interface HeadingProps
    extends BaseProps,
    CommonProps,
    TypographyProps,
    Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'> { }

  export const Heading: React.FunctionComponent<HeadingProps>

  export interface ButtonProps
    extends BaseProps,
    CommonProps,
    StyledSystem.FontSizeProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    variant?: string,
    size?: 'small' | 'medium' | 'large',
    fill?: 'solid' | 'outline' | 'clear'
  }

  export const ButtonGroup: React.FunctionComponent<BoxProps>
  export const Button: React.FunctionComponent<ButtonProps>

  export interface BaseStylesProps extends TypographyProps, CommonProps { }

  export const BaseStyles: React.FunctionComponent<BaseStylesProps>

  export interface BorderBoxProps extends CommonProps, LayoutProps, BorderProps, BoxProps {
    border?: string
    borderColor?: string
    borderRadius?: string | number
    boxShadow?: string
  }

  export const BorderBox: React.FunctionComponent<BorderBoxProps>

  export interface DropdownProps extends CommonProps, ButtonProps { }

  export interface DropdownMenuProps extends CommonProps, Omit<React.HTMLAttributes<HTMLUListElement>, 'color'> {
    direction?: string
    title: string
  }

  export const Dropdown: React.FunctionComponent<DropdownProps> & {
    Menu: React.FunctionComponent<DropdownMenuProps>
    Item: React.FunctionComponent<DropdownProps>
  }

  export interface FilteredSearchProps extends CommonProps {
    // just children
  }

  export const FilteredSearch: React.FunctionComponent<FilteredSearchProps>

  export interface FilterListProps extends CommonProps, Omit<React.HTMLAttributes<HTMLUListElement>, 'color'> {
    small?: boolean
  }

  export interface FilterListItemProps
    extends CommonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
    count?: number
    selected?: boolean
  }

  export const FilterList: React.FunctionComponent<FilterListProps> & {
    Item: React.FunctionComponent<FilterListItemProps>
  }

  export interface FlashProps extends CommonProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    full?: boolean
    scheme?: string
  }

  export const Flash: React.FunctionComponent<FlashProps>

  export interface CounterLabelProps extends CommonProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
    scheme?: string
  }

  export const CounterLabel: React.FunctionComponent<CounterLabelProps>

  export interface LabelProps extends CommonProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
    outline?: boolean
    variant?: 'small' | 'medium' | 'large' | 'xl'
    dropshadow?: boolean
  }

  export const Label: React.FunctionComponent<LabelProps>

  export interface LinkProps
    extends CommonProps,
    TypographyProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
    muted?: boolean
    underline?: boolean
  }

  export const Link: React.FunctionComponent<LinkProps>

  export interface PointerBoxProps extends CommonProps, LayoutProps, BorderBoxProps {
    caret?: string
  }

  export const PointerBox: React.FunctionComponent<PointerBoxProps>

  export interface PositionComponentProps
    extends PositionProps,
    CommonProps,
    LayoutProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> { }

  export const Relative: React.FunctionComponent<PositionComponentProps>
  export const Absolute: React.FunctionComponent<PositionComponentProps>
  export const Sticky: React.FunctionComponent<PositionComponentProps>
  export const Fixed: React.FunctionComponent<PositionComponentProps>

  export interface StateLabelProps extends CommonProps {
    small?: boolean
    status: 'issueOpened' | 'issueClosed' | 'pullOpened' | 'pullClosed' | 'pullMerged'
  }

  export const StateLabel: React.FunctionComponent<StateLabelProps>

  export interface TabNavProps extends CommonProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> { }

  export interface TabNavLinkProps extends CommonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
    selected?: boolean
  }

  export const TabNav: React.FunctionComponent<TabNavProps> & {
    Link: React.FunctionComponent<TabNavLinkProps>
  }

  export interface TextInputProps
    extends CommonProps,
    StyledSystem.WidthProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'width'> {
    block?: boolean
    variant?: 'small' | 'large'
  }

  export const TextInput: React.FunctionComponent<TextInputProps>

  export interface TooltipProps extends CommonProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
    align?: 'left' | 'right'
    direction?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'
    noDelay?: boolean
    text?: string
    wrap?: boolean
  }

  export const Tooltip: React.FunctionComponent<TooltipProps>

  export interface UnderlineNavProps extends CommonProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    actions?: React.ReactNode
    align?: 'right'
    full?: boolean
    label?: string
  }

  export interface UnderlineNavLinkProps
    extends CommonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
    selected?: boolean
  }

  export const UnderlineNav: React.FunctionComponent<UnderlineNavProps> & {
    Link: React.FunctionComponent<UnderlineNavLinkProps>
  }

  export interface SubNavProps extends CommonProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    actions?: React.ReactNode
    label?: string
  }

  export interface SubNavLinkProps extends CommonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
    selected?: boolean
  }

  export const SubNav: React.FunctionComponent<SubNavProps> & {
    Link: React.FunctionComponent<SubNavLinkProps>
  }

  export const theme: Object
  export const themeGet: (key: any) => any

  export interface DialogProps extends CommonProps {
    title: string
    isOpen: boolean
    onDismiss: () => unknown
  }

  export const Dialog: React.FunctionComponent<DialogProps>

  export interface LabelGroupProps extends CommonProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> { }

  export const LabelGroup: React.FunctionComponent<LabelGroupProps>

  export interface AvatarStackProps extends CommonProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
    alignRight?: boolean
  }

  export const AvatarStack: React.FunctionComponent<AvatarStackProps>
  export interface ProgressBarProps
    extends BaseProps,
    CommonProps,
    StyledSystem.WidthProps,
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
    progress?: number | string
    barSize?: 'small' | 'default' | 'large'
    inline?: boolean
  }

  export const ProgressBar: React.FunctionComponent<ProgressBarProps>

  export interface AccordionProps
    extends BaseProps {
      trigger: any;
      panel: any;
      open?: boolean;
    }

  export interface AccordionTriggerProps
    extends BaseProps,
    CommonProps,
    LayoutProps {
    start?: any;
    end?: any;
  }

  export interface AccordionPanelProps
    extends BaseProps,
    CommonProps,
    LayoutProps { }

  export const AccordionPanel: React.FunctionComponent<AccordionPanelProps>
}

declare module '@union/components/src/components/Accordion' {
  import Accordion from '@union/components'
  export default Accordion;
}

declare module '@union/components/src/components/AccordionTrigger' {
  import { AccordionTrigger } from '@union/components'
  export default AccordionTrigger;
}

declare module '@union/components/src/components/AccordionPanel' {
  import { AccordionPanel } from '@union/components'
  export default AccordionPanel;
}

declare module '@union/components/src/components/Box' {
  import { Box } from '@union/components'
  export default Box
}

declare module '@union/components/src/components/GalleryGrid' {
  import { GalleryGrid } from '@union/components'
  export default GalleryGrid;
}

declare module '@union/components/src/components/GalleryGridItem' {
  import { GalleryGridItem } from '@union/components'
  export default GalleryGridItem;
}

declare module '@union/components/src/components/Text' {
  import { Text } from '@union/components'
  export default Text
}

declare module '@union/components/src/components/Heading' {
  import { Heading } from '@union/components'
  export default Heading
}

declare module '@union/components/src/components/ButtonGroup' {
  import { ButtonGroup } from '@union/components'
  export default ButtonGroup
}

declare module '@union/components/src/components/Button' {
  import { Button } from '@union/components'
  export default Button
}

declare module '@union/components/src/components/Flex' {
  import { Flex } from '@union/components'
  export default Flex
}

declare module '@union/components/src/components/Avatar' {
  import { Avatar } from '@union/components'
  export default Avatar
}

declare module '@union/components/src/components/Details' {
  import { Details } from '@union/components'
  export default Details
}

declare module '@union/components/src/components/BaseStyles' {
  import { BaseStyles } from '@union/components'
  export default BaseStyles
}

declare module '@union/components/src/components/BorderBox' {
  import { BorderBox } from '@union/components'
  export default BorderBox
}

declare module '@union/components/src/components/BranchName' {
  import { BranchName } from '@union/components'
  export default BranchName
}
declare module '@union/components/src/components/CircleBadge' {
  import { CircleBadge } from '@union/components'
  export default CircleBadge
}
declare module '@union/components/src/components/CircleOcticon' {
  import { CircleOcticon } from '@union/components'
  export default CircleOcticon
}
declare module '@union/components/src/components/StyledOcticon' {
  import { StyledOcticon } from '@union/components'
  export default StyledOcticon
}
declare module '@union/components/src/components/Dropdown' {
  import { Dropdown } from '@union/components'
  export default Dropdown
}
declare module '@union/components/src/components/FilterList' {
  import { FilterList } from '@union/components'
  export default FilterList
}
declare module '@union/components/src/components/Flash' {
  import { Flash } from '@union/components'
  export default Flash
}

declare module '@union/components/src/components/CounterLabel' {
  import { CounterLabel } from '@union/components'
  export default CounterLabel
}

declare module '@union/components/src/components/Label' {
  import { Label } from '@union/components'
  export default Label
}

declare module '@union/components/src/components/Link' {
  import { Link } from '@union/components'
  export default Link
}
declare module '@union/components/src/components/PointerBox' {
  import { PointerBox } from '@union/components'
  export default PointerBox
}
declare module '@union/components/src/components/Relative' {
  import { Relative } from '@union/components'
  export default Relative
}
declare module '@union/components/src/components/Absolute' {
  import { Absolute } from '@union/components'
  export default Absolute
}
declare module '@union/components/src/components/Sticky' {
  import { Sticky } from '@union/components'
  export default Sticky
}
declare module '@union/components/src/components/Fixed' {
  import { Fixed } from '@union/components'
  export default Fixed
}
declare module '@union/components/src/components/StateLabel' {
  import { StateLabel } from '@union/components'
  export default StateLabel
}
declare module '@union/components/src/components/TabNav' {
  import { TabNav } from '@union/components'
  export default TabNav
}
declare module '@union/components/src/components/TextInput' {
  import { TextInput } from '@union/components'
  export default TextInput
}
declare module '@union/components/src/components/Tooltip' {
  import { Tooltip } from '@union/components'
  export default Tooltip
}
declare module '@union/components/src/components/UnderlineNav' {
  import { UnderlineNav } from '@union/components'
  export default UnderlineNav
}
declare module '@union/components/src/components/SubNav' {
  import { SubNav } from '@union/components'
  export default SubNav
}
declare module '@union/components/src/theme' {
  import { theme } from '@union/components'
  export default theme
}
declare module '@union/components/src/components/Dialog' {
  import { Dialog } from '@union/components'
  export default Dialog
}

declare module '@union/components/src/components/LabelGroup' {
  import { LabelGroup } from '@union/components'
  export default LabelGroup
}

declare module '@union/components/src/components/ProgressBar' {
  import { ProgressBar } from '@union/components'
  export default ProgressBar
}

declare module '@union/components/src/components/AvatarStack' {
  import { AvatarStack } from '@union/components'
  export default AvatarStack
}
