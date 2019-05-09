import React from 'react';

import Header from './Header';
import Temperature from './Temperature';
import Humidity from './Humidity';

import StyledTable from './styles';

const data = {
  max: [20, 21, 20, 29, 20, 18, 23],
  min: [16, 22, 19, 18, 23, 24, 22],
  humidity: [18, 15, 23, 12, 16, 43, 61],
};

const Table = () => (
  <StyledTable cellSpacing="0">
    <Header />
    <tbody>
      <Temperature max data={data.max} />
      <Temperature min data={data.min} />
      <Humidity data={data.humidity} />
    </tbody>
  </StyledTable>
);

export default Table;
