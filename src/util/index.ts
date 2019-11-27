import {
  get as getKey,
  compose,
  system,
  typography,
  space,
  color,
  display,
  layout,
  position,
  flexbox,
  grid,
  border,
  shadow,
} from 'styled-system';
import theme from '../theme';

export const themeGet = (path: string, fallback: any = null) => (props: any) => getKey(props.theme, path, fallback);

export const get = (path: string) => themeGet(path, getKey(theme, path));

const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
  }
});

export const TYPOGRAPHY = compose(
  typography,
  whiteSpace
);

export const COMMON = compose(
  space,
  color,
  display
);

export const BORDER = compose(
  border,
  shadow
);

export const LAYOUT = layout;
export const POSITION = position;
export const FLEX = flexbox;
export const GRID = grid;
