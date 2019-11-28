import styled, { css } from 'styled-components';
import { compose, layout } from 'styled-system';
import { COMMON } from '../../utils/constants';
import { get } from 'lodash';

const AccordionTrigger = styled.span`
  display: flex;

  i {
    height: 16px;
    width: 16px;

    svg {
      height: 16px;
      width: 16px;
    }
  }

  ${compose(
    COMMON,
    layout
  )}
`;

const AccordionPanel = styled.div`
  ${compose(
    COMMON,
    layout
  )}
`;

const styles = props => css`
  display: block;

  .accordion_trigger {
    -webkit-appearance: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0;
    padding: 0;
    outline: none;
    width: 100%;

    ${AccordionTrigger} {
      [slot="start"] {
        padding-right: ${props.theme.space[3]};
      }

      [slot="end"] {
        margin-left: auto;
        transform: ${props.isOpen ? `rotate(180deg)` : `rotate(0deg)`};
        transition: all 0.3s ease;
        transform-origin: center center;
      }
    }

    &:hover,
    &:active,
    &:focus {
      background: ${get(props.theme, 'colors.light.base')};
    }
  }

  .accordion_panel {
    display: block;
    max-height: 0;
    transition: all 0.3s ease;
    overflow: hidden;
  }
`;

const Accordion = styled.div`
  ${styles}
`;

export { Accordion, AccordionTrigger, AccordionPanel };
