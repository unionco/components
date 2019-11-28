import React from "react";
import { storiesOf } from "@storybook/react";
import GalleryGrid, { GalleryGridItem } from "./index";
import BaseStyles from '../BaseStyles';

storiesOf("Gallery Grid", module)
  .add("Default", () => (
    <BaseStyles>
      <GalleryGrid>
        <GalleryGridItem>
          <img src="https://placehold.it/200x200.png" alt="image" />
        </GalleryGridItem>
        <GalleryGridItem>
          <img src="https://placehold.it/200x200.png" alt="image" />
        </GalleryGridItem>
        <GalleryGridItem>
          <img src="https://placehold.it/200x200.png" alt="image" />
        </GalleryGridItem>
        <GalleryGridItem>
          <img src="https://placehold.it/200x200.png" alt="image" />
        </GalleryGridItem>
      </GalleryGrid>
    </BaseStyles>
  ));
