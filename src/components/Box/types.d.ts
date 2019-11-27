import { StyledSystemProps, CommonStyledSystemProps } from "../../typings/styled-components";

// TODO CHANGE ANY TO SOMETHING WORTH WHILE
interface SlotProps {
  start?: any;
  end?: any;
}

export type BoxProps = StyledSystemProps<
  "div",
  {}
  > & CommonStyledSystemProps & SlotProps;
