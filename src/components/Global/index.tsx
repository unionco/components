import React from 'react';
import theme from '../../theme';
import Global from './styles';

const NeoGlobal = (props: any) => <Global {...props} />;

NeoGlobal.defaultProps = {
  theme
};

export default NeoGlobal;
