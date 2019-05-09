import styled from 'styled-components';
import styles from '../../../utils/constraints';

const Row = styled.tr`
  box-shadow: inset 0 -1px ${({ noBorder }) => (noBorder ? 'transparent' : styles.colors.lightGray)};
  height: 84px;
`;

const Column = styled.td`
  text-align: center;
`;

export { Row, Column };
