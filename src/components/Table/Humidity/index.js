import React from 'react';

import {
  Bar, BarWrapper, Container, Value,
} from './styles';
import { Row, Column } from '../shared';

const Humidity = ({ data }) => (
  <Row>
    {data.map(temperature => (
      <Column key={temperature * Math.random()}>
        <Container>
          <BarWrapper>
            <Bar active={temperature > 0} />
            <Bar active={temperature >= 20} />
            <Bar active={temperature >= 60} />
            <Bar active={temperature >= 80} />
            <Bar active={temperature >= 100} />
          </BarWrapper>
          <Value>{`${temperature}%`}</Value>
        </Container>
      </Column>
    ))}
  </Row>
);

export default Humidity;
