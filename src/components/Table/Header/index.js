import React from 'react';
import getTableDates from '../../../utils/date';

import { Container, Week, Month } from './styles';
import { Row } from '../shared';

const Header = () => {
  const dates = getTableDates();
  return (
    <Container>
      <Row noBorder>
        {dates.map(date => (
          <th key={date.week}>
            <Week>{date.week}</Week>
            <Month>{date.month}</Month>
          </th>
        ))}
      </Row>
    </Container>
  );
};

export default Header;
