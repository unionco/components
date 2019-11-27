import { ButtonStyleProps } from "styled-system";
import { StyledSystemProps, CommonStyledSystemProps, TypeStyledSystemProps } from "../../typings/styled-components";

// TODO CHANGE ANY TO SOMETHING WORTH WHILE
interface SlotProps {
  start?: any;
  end?: any;
  iconOnly?: any;
}

export type ButtonProps = StyledSystemProps<
  "button",
  {
    size?: string,
    variant?: string,
    fill?: string,
    href?: string,
    target?: string | undefined,
    type?: 'submit' | 'reset'
  }
  > & CommonStyledSystemProps & TypeStyledSystemProps & SlotProps & ButtonStyleProps;
