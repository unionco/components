import { colors } from './colors';
import { fonts, fontSizes, fontWeights } from './typography';
import get from 'lodash/get';

// color variant helper
const colorThemeNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'dark', 'medium', 'light'];
let colorVariants: { [key: string]: object } = {};
colorThemeNames.map((color: string) => {
  colorVariants[color] = {
    background: get(colors, `${color}.base`),
    color: get(colors, `${color}.contrast`),
  }
});

const theme = {
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  buttons: {
    ...colorVariants,
  },
  buttonSizes: {
    small: {
      fontSize: fontSizes[1],
      padding: `8px 16px`
    },
    medium: {
      fontSize: fontSizes[2],
      padding: `16px 24px`
    },
    large: {
      fontSize: fontSizes[4],
      padding: `24px 32px`
    }
  },
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px']
};

export default theme;
export { colors, theme, fonts, fontSizes, fontWeights };
