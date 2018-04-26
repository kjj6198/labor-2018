import React from 'react';
import DataContext from './DataContext';

const withData = Component => function WrappedComponent(props) {
  return (
    <DataContext.Consumer>
      {data => !data.loading && <Component {...props} data={data} />}
    </DataContext.Consumer>
  );
};

export default withData;
