import * as d3 from 'd3';
import React, { Component } from 'react';
import DataContext from './DataContext';

export default class DataProvider extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const q = d3.queue();
    q
      .defer(d3.csv, './client/data/events.csv')
      .await((err, eventData) => {
        if (err) {
          this.setState({ error: err, loading: false });
        } else {
          this.setState({ eventData, loading: false });
        }
      });
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {React.Children.only(this.props.children)}
      </DataContext.Provider>
    );
  }
}
