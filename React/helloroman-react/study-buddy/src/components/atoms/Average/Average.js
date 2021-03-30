import React from 'react';
import { StyledAverage } from './Average.styles';

const Average = (props) => (
  <StyledAverage avgValue={props.avgData}>
    <p>{props.avgData}</p>
  </StyledAverage>
);

export default Average;
