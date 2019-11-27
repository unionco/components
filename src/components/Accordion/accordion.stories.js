import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "./index";
import AccordionItem from '../AccordionItem';
import BaseStyles from '../BaseStyles';

storiesOf("Accordion", module)
  .add("Default", () => (
    <BaseStyles>
      <Accordion>
        <AccordionItem trigger={<h4>Trigger Test 1</h4>}>
          <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
        </AccordionItem>
        <AccordionItem trigger={<h4>Trigger Test 2</h4>}>
          <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
        </AccordionItem>
        <AccordionItem trigger={<h4>Trigger Test 3</h4>}>
          <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
        </AccordionItem>
      </Accordion>
    </BaseStyles>
  ));
