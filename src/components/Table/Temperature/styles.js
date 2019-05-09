import styled from 'styled-components';
import styles from '../../../utils/constraints';

const Arrow = styled.div`
  display: inline-block;
  margin: 2px 9px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-bottom: 6px solid black;

  ${({ isMax }) => isMax
    && `
    border-bottom-color: ${styles.colors.red};
  `};

  ${({ isMin }) => isMin
    && `
    transform: rotate(180deg);
    border-bottom-color: ${styles.colors.cyan};
  `};
`;

const Value = styled.span`
  font-weight: bold;
  font-size: ${styles.sizes.small};
  ${({ isMax }) => isMax
    && `
    color: ${styles.colors.red};
  `};
  ${({ isMin }) => isMin
    && `
    color: ${styles.colors.cyan};
  `};
`;

const Deg = styled.sup`
  margin: 0 1px;
`;

export { Arrow, Value, Deg };
