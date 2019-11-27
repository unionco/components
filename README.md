# Union Styled Components Library [WIP]

## Getting Started

Simply run the commands below and you _should_ have a working storybook displaying all of our components.

- `git clone repo`
- `yarn install`
- `yarn storybook`

## Adding Components

Each component follows the folder structure below:

- ComponentName
    - index.js
    - index.stories.js
    - styles.js
    - variants.js

### Index.js
Exports react component to be consumed

### Stories.js
Showcase of component for storybook

### Styles.js
Exports a styled component consumed by the react component

### Variants.js
Exports custom variants required for this component
