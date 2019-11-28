import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion, { AccordionTrigger, AccordionPanel } from "./index";
import BaseStyles from '../BaseStyles';

storiesOf("Accordion", module)
  .add("Default", () => (
    <BaseStyles>
      <Accordion
        open
        trigger={(
          <AccordionTrigger p={4} start={<span>1</span>} end={<i>&rarr;</i>}>
            <h4>Trigger Test 1</h4>
          </AccordionTrigger>
        )}
        panel={(
          <AccordionPanel p={3}>
            <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
          </AccordionPanel>
        )}
      />

      <Accordion
        trigger={(
          <AccordionTrigger p={4} start={<span>2</span>} end={<i>&rarr;</i>}>
            <h4>Trigger Test 1</h4>
          </AccordionTrigger>
        )}
        panel={(
          <AccordionPanel p={3}>
            <p>Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus.</p>
          </AccordionPanel>
        )}
      />
    </BaseStyles>
  ));
