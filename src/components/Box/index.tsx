import React from 'react';
import theme from '../../theme';
import Box from './styles';
import { BoxProps } from './types';

// React Component
const NeoBox = (props: BoxProps) => <Box {...props} />;

NeoBox.defaultProps = {
  theme
}

export default NeoBox;
