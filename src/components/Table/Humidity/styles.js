import styled from 'styled-components';
import styles from '../../../utils/constraints';

const Bar = styled.div`
  display: inline-block;
  width: 4px;
  height: 18px;
  background-color: ${styles.colors.gray};
  border-radius: 1000px;
  margin: 0 1px;

  ${({ active }) => active && `background-color: ${styles.colors.blue}`}
`;

const BarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${styles.screens.largePhone}) {
    flex-direction: row;
  }
`;

const Value = styled.span`
  font-size: ${styles.sizes.small};
  margin-top: 2px;

  font-weight: bold;
  color: ${styles.colors.black};

  @media (min-width: ${styles.screens.largePhone}) {
    margin-left: 8px;
  }
`;

export {
  Bar, BarWrapper, Container, Value,
};
