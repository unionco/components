# Union Styled Components Library [WIP]

## Getting Started

Simply run the commands below and you _should_ have a working storybook displaying all of our components.

- `git clone repo`
- `yarn install`
- `yarn storybook`

## Adding Components

Each component follows the folder structure below:

- ComponentName
    - index.tsx
    - index.stories.tsx
    - styles.ts
    - types.ts
    - variants.ts

### Index.tsx
Exports react component to be consumed

### Stories.tsx
Showcase of component for storybook

### Styles.ts
Exports a styled component consumed by the react component

### Types.ts
Declares any custom types required for this component

### Variants.ts
Exports custom variants required for this component
