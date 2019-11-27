import React from 'react';
import { default as baseTheme } from '../../theme';
import StyledButton from './styles';

// React Component
const Button = ({
  theme = baseTheme,
  size = 'medium',
  variant = 'primary',
  fill = 'solid',
  ...rest
}) => {
  const props = { theme, size, variant, fill, ...rest };
  return (
    <StyledButton {...props}>
      <span className="button-inner">
        {props.start && <div slot="start">{props.start}</div>}
        {props.children}
        {props.end && <div slot="end">{props.end}</div>}
        {props.iconOnly && <div slot="iconOnly">{props.iconOnly}</div>}
      </span>
    </StyledButton>
  );
}

export default Button;
