import React, { useEffect, useState, useRef } from 'react';
import { default as baseTheme } from '../../theme';
import {
  Accordion as StyledAccordion,
  AccordionTrigger as StyledAccordionTrigger,
  AccordionPanel
} from './styles';

// React Component
const Accordion = ({
  theme = baseTheme,
  trigger,
  panel,
  open = false,
  ...rest
}) => {
  const props = { theme, ...rest };

  const [isOpen, setIsOpen] = useState(open);
  const item = useRef();

  useEffect(
    () => {
      if (isOpen) {
        item.current.style.maxHeight = `${item.current.scrollHeight}px`
      } else {
        item.current.style.maxHeight = '0px';
      }
    },
    [isOpen]
  );

  return (
    <StyledAccordion isOpen={isOpen} {...props}>
      <button className="accordion_trigger" onClick={e => setIsOpen(!isOpen)}>
        {trigger}
      </button>
      <div className="accordion_panel" ref={item}>
        {panel}
      </div>
    </StyledAccordion>
  );
}

const AccordionTrigger = ({
  theme = baseTheme,
  start,
  end,
  children,
  ...rest
}) => {
  const props = { theme, ...rest };

  return (
    <StyledAccordionTrigger {...props}>
      {start && <div slot="start">{start}</div>}
      {children}
      {end && <div slot="end">{end}</div>}
    </StyledAccordionTrigger>
  );
}

export default Accordion;
export { AccordionTrigger, AccordionPanel };
