import React, { useEffect, useState, useRef } from 'react';
import { default as baseTheme } from '../../theme';
import StyledGalleryGrid from './styles';

const layoutTypes = {
  1: 'up-1',
  2: 'up-2',
  3: 'up-3',
  4: 'up-4',
  5: 'up-3',
  6: 'up-3',
  7: 'up-4',
  8: 'up-4',
  9: 'up-3',
  10: 'up-4',
};

const GalleryGrid = ({
  theme = baseTheme,
  children,
  ...rest
}) => {

  const determineMinWidth = () => {
    const length = children ? children.length : 0;
    const layout = layoutTypes[length];

    return layout ? layout : 'up-4';
  }

  return (
    <StyledGalleryGrid {...rest} layout={determineMinWidth()}>
      <div className="gallery_inner">
        {children}
      </div>
    </StyledGalleryGrid>
  );
}

export default GalleryGrid;
export { GalleryGridItem } from './styles';
