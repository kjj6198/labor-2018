import React from 'react';
import { render } from 'react-dom';

import DataProvider from './HOCs/DataProvider';
import Root from './components/Root';

render(
  <DataProvider>
    <Root />
  </DataProvider>,
  document.querySelector('#root'),
);

