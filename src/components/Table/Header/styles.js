import styled from 'styled-components';
import styles from '../../../utils/constraints';

const Container = styled.thead`
  background-color: ${styles.colors.lighterGray};
`;

const Week = styled.span`
  display: block;
  text-transform: uppercase;
  font-size: ${styles.sizes.small};
`;

const Month = styled.span`
  display: block;
  text-transform: uppercase;
  font-size: ${styles.sizes.small};
  color: ${styles.colors.darkerGray};
  font-weight: 400;
  margin-top: 4px;
`;

export { Container, Week, Month };
