import styled, { css } from 'styled-components';
import { compose, layout } from 'styled-system';
import { COMMON } from '../../utils/constants';

const galleryLargeHeight = '550px';
const galleryMediumHeight = '375px';
const gallerySmallHeight = '275px';

const GalleryGridItem = styled.div`
  display: block;
  padding: 8px;
  height: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

const styles = props => css`
  display: block;

  .gallery_inner {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    width: 100%;

    > div {
      ${(() => {
        switch (props.layout) {
          case 'up-1':
            return `height: ${galleryLargeHeight}; width: 100%;`;
          case 'up-2':
            return `height: ${galleryLargeHeight}; width: 50%;`;
          case 'up-3':
            return `height: ${galleryMediumHeight}; width: 33%;`;
          case 'up-4':
            return `height: ${gallerySmallHeight}; width: 25%;`;
        }
      })()}
    }
  }

  ${compose(
    COMMON,
    layout
  )}
`;

const GalleryGrid = styled.div`
  ${styles}
`;

export default GalleryGrid;
export { GalleryGridItem };
