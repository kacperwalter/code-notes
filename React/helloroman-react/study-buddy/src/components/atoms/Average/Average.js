import React from 'react';
import { StyledAverage } from './Average.styles';

const Average = (props) => <StyledAverage avgValue={props.avgData}>{props.avgData}</StyledAverage>;

export default Average;
