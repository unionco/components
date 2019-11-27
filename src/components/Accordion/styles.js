import styled, { css } from 'styled-components';
import { COMMON } from '../../utils/constants';

const styles = props => css`
  display: block;

  .accordion-inner {
    display: block;
  }
`;

const Accordion = styled.div`
  ${styles}
  ${COMMON}
`;

export default Accordion;
