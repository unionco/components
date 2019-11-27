import React from 'react';
import { default as baseTheme } from '../../theme';
import StyledAccordion from './styles';

// React Component
const Accordion = ({
  theme = baseTheme,
  closeOthers = true,
  ...rest
}) => {
  const props = { theme, closeOthers, ...rest };
  return (
    <StyledAccordion>
      <div className="accordion-inner">
        {props.children}
      </div>
    </StyledAccordion>
  );
}

export default Accordion;
