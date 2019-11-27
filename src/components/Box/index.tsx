import React from 'react';
import theme from '../../theme';
import StyledBox from './styles';
import { BoxProps } from './types';

// React Component
const Box = (props: BoxProps) => <StyledBox {...props} />;

Box.defaultProps = {
  theme
}

export default Box;
