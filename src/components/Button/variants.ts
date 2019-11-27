import { variant } from "styled-system";

export const sizeVariants = variant({
  prop: 'size',
  key: 'buttonSizes'
});

export const fillVariants = variant({
  prop: 'fill',
  variants: {
    outline: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'var(--neo-color-base)',
      background: 'transparent',
      color: 'var(--neo-color-base)'
    },
    solid: {},
    clear: {
      background: 'transparent',
      color: 'var(--neo-color-base)'
    }
  }
});
