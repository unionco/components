import React, { useState, useEffect, useRef } from 'react';
import { default as baseTheme } from '../../theme';
import StyledAccordionItem from './styles';

// React Component
const AccordionItem = ({
  theme = baseTheme,
  ...rest
}) => {
  const props = { theme, ...rest };

  const item = useRef();
  const [isOpen, setIsOpen] = useState(false);

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
    <StyledAccordionItem {...props} isOpen={isOpen}>
      <button className="accordion-trigger" onClick={e => setIsOpen(!isOpen)}>
        <div className="accordion-trigger-content">
          {props.start && <div slot="start">{props.start}</div>}
          {props.trigger && props.trigger}
          {props.end
            ?
            <div slot="end">{props.end}</div>
            :
            <i class="accordion-trigger-icon">
              <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="m50 60.762 34.555-34.555 5.8906 5.8945-40.445 40.445-40.445-40.445 5.8906-5.8945z" />
              </svg>
            </i>
          }
        </div>
      </button>
      <div className="accordion-panel" ref={item}>
        {props.children}
      </div>
    </StyledAccordionItem>
  );
}

export default AccordionItem;
