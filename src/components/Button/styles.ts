import styled, { css } from 'styled-components';
import { buttonStyle, compose, layout, fontSize } from 'styled-system';
import { sizeVariants, fillVariants } from './variants';
import { ButtonProps } from './types';
import { COMMON, get } from '../../util';

const styles = (props: any) => css`
  --neo-color-base: ${get(`colors.${props.variant}.base`)};
  --neo-color-contrast: ${get(`colors.${props.variant}.contrast`)};
  --neo-color-tint: ${get(`colors.${props.variant}.tint`)};

  appearance: none;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: ${get('fontSizes.1')};
  font-weight: ${get('fontWeights.bold')};
  line-height: 20px;
  overflow: hidden;
  margin: 4px;
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  [slot="start"] i {
    display: block;
    height: 100%;
    padding-right: 12px;
  }

  [slot="end"] i {
    display: block;
    height: 100%;
    padding-left: 12px;
  }

  .button-inner {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  ${props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}

  &:hover {
    ${props.fill === 'solid' ? `background-color: var(--neo-color-tint)` : ``};
    ${props.fill === 'clear' ? `background-color: #eee` : ``};
    ${props.fill === 'outline' ? `
      background-color: var(--neo-color-base);
      color: var(--neo-color-contrast);
      border-color: var(--neo-color-tint)
    ` : ``};
  }
`;

const Button = styled.button.attrs(({ disabled, onClick }) => ({
  onClick: disabled ? undefined : onClick
}) as ButtonProps)`
  ${styles}
  ${sizeVariants}
  ${buttonStyle}
  ${fillVariants}
  ${compose(
    fontSize,
    COMMON,
    layout
  )}
`;

export default Button;
