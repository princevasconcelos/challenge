import React from 'react';
import t from 'prop-types';

import { Row, Column } from '../shared';
import { Arrow, Value, Deg } from './styles';

const propTypes = {
  max: t.bool,
  min: t.bool,
};

const defaultProps = {
  max: false,
  min: false,
};

const Temperature = ({ max, min, data }) => (
  <Row>
    {data.map(temperature => (
      <Column key={temperature * Math.random()}>
        <Arrow isMax={max} isMin={min} />
        <Value isMax={max} isMin={min}>
          {temperature}
          <Deg>o</Deg>
          <span>C</span>
        </Value>
      </Column>
    ))}
  </Row>
);

Temperature.propTypes = propTypes;
Temperature.defaultProps = defaultProps;

export default Temperature;
