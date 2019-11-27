import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";

storiesOf("Button", module)
  .add("Default - Solid", () => (
    <div>
      <Button variant="primary" disabled>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
      <Button variant="success">Success Button</Button>
      <Button variant="warning">Warning Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="dark">Dark Button</Button>
      <Button variant="medium">Medium Button</Button>
      <Button variant="light">Light Button</Button>
    </div>
  ))
  .add("Fill - Outline", () => (
    <div>
      <Button fill="outline" variant="primary">Primary Button</Button>
      <Button fill="outline" variant="secondary">Secondary Button</Button>
      <Button fill="outline" variant="tertiary">Tertiary Button</Button>
      <Button fill="outline" variant="success">Success Button</Button>
      <Button fill="outline" variant="warning">Warning Button</Button>
      <Button fill="outline" variant="danger">Danger Button</Button>
      <Button fill="outline" variant="dark">Dark Button</Button>
      <Button fill="outline" variant="medium">Medium Button</Button>
      <Button fill="outline" variant="light">Light Button</Button>
    </div>
  ))
  .add("Fill - Clear", () => (
    <div>
      <Button fill="clear" variant="primary">Primary Button</Button>
      <Button fill="clear" variant="secondary">Secondary Button</Button>
      <Button fill="clear" variant="tertiary">Tertiary Button</Button>
      <Button fill="clear" variant="success">Success Button</Button>
      <Button fill="clear" variant="warning">Warning Button</Button>
      <Button fill="clear" variant="danger">Danger Button</Button>
      <Button fill="clear" variant="dark">Dark Button</Button>
      <Button fill="clear" variant="medium">Medium Button</Button>
      <Button fill="clear" variant="light">Light Button</Button>
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <Button size="small" variant="primary">Small Button</Button>
      <Button size="medium" variant="primary">Medium Button</Button>
      <Button size="large" variant="primary">Large Button</Button>
    </div>
  ))
  .add("Slots", () => (
    <div>
      <Button size="small" variant="primary" start={<i>&larr;</i>}>
        Slot Start
      </Button>
      <Button size="small" variant="primary" end={<i>&rarr;</i>}>
        Slot End
      </Button>
      <Button size="small" variant="primary" iconOnly={<i>&#x2713;</i>} />
      Icon Only
    </div>
  ));
