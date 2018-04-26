import React from 'react';
import { hot } from 'react-hot-loader';
import ResponsiveSVG from './ResponsiveSVG';
import NormalAxis from './axis/NormalAxis';
import { generateAxis } from './axis/utils';
import { scaleLinear, select } from 'd3';
import LaborEvents from '../containers/LaborEvents';

const Root = () =>
  (
    <div id="svg">
      <p>hello world</p>
      <LaborEvents />
    </div>
  );

export default hot(module)(Root);

