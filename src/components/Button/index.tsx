import React from 'react';
import theme from '../../theme';
import { ButtonProps } from './types';
import Button from './styles';

// React Component
const NeoButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props}>
      <span className="button-inner">
        {props.start && <div slot="start">{props.start}</div>}
        {props.children}
        {props.end && <div slot="end">{props.end}</div>}
        {props.iconOnly && <div slot="iconOnly">{props.iconOnly}</div>}
      </span>
    </Button>
  );
}

NeoButton.defaultProps = {
  theme,
  size: 'medium',
  variant: 'primary',
  fill: 'solid'
}

export default NeoButton;
