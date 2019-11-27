import styled, { css } from 'styled-components';
import { compose } from 'styled-system';
import { COMMON, LAYOUT } from '../../utils/constants';

const styles = props => css`
  display: block;

  .accordion-panel {
    max-height: 0;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .accordion-trigger {
    -webkit-appearance: none;
    appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    transition: background 0.3s ease;;
    width: 100%;

    &-content {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 16px;
      width: 100%;
    }

    &-icon {
      height: 16px;
      width: 16px;
      transform: ${props.isOpen ? `rotate(180deg)` : `rotate(0deg)`};
      transition: all 0.3s ease;
      transform-origin: center center;

      svg {
        height: 16px;
        width: 16px;
      }
    }

    &:hover,
    &:active,
    &:focus {
      background: rgba(0,0,0,0.05);
    }
  }
`;

const AccordionItem = styled.div`
  ${styles}
  ${compose(
    COMMON,
    LAYOUT
  )}
`;

export default AccordionItem;
