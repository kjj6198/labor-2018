import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { select, axisBottom, axisLeft, format } from 'd3';

export default class NormalAxis extends Component {
  axisX = React.createRef();
  axisY = React.createRef();

  componentDidMount() {
    const {
      xScale,
      yScale,
      xTicks = 10,
      yTicks = 15,
      tickSize = 10,
      width,
      label,
    } = this.props;
    const x = select(this.axisX.current)
      .call(axisBottom(xScale).ticks(xTicks).tickFormat(format('d')).tickSize(tickSize));
    x.selectAll('.x.axis').attr('y', 15);

    const y = select(this.axisY.current);
    y.call(axisLeft(yScale).ticks(yTicks).tickSize(-width));
    y.append('text')
      .attr('dx', 4)
      .attr('y', 6)
      .attr('text-anchor', 'start')
      .text(label)
      .style('fill', '#111')
      .style('font-size', '20px')
      .style('font-weight', 'bold');
  }

  render() {
    const { height } = this.props;
    return (
      <Fragment>
        <g
          ref={this.axisX}
          className="axis x"
          transform={`translate(0, ${height})`}
        />
        <g
          ref={this.axisY}
          className="axis y"
        />
      </Fragment>
    );
  }
}

NormalAxis.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  xTicks: PropTypes.number,
  yTicks: PropTypes.number,
  tickSize: PropTypes.number,
  label: PropTypes.string,
};
