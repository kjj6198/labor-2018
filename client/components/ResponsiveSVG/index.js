import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { select, scaleLinear } from 'd3';
import NormalAxis from '../axis/NormalAxis';

export default class ResponsiveSVG extends Component {
  svg = React.createRef();

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    const svg = this.svg.current;
    this.setupSVG(svg);
  }

  componentWillUnmount() {
    select(window).on(`resize.${this.container.attr('id')}`, null);
  }

  setupSVG(svg) {
    const selectedSVG = select(svg);

    this.container = select(selectedSVG.node().parentNode);

    const width = parseInt(selectedSVG.style('width'), 10);
    const height = parseInt(selectedSVG.style('height'), 10);
    this.ratio = width / height;

    this.setState({
      width,
      height,
    });

    select(window).on(`resize.${this.container.attr('id')}`, this.resize);
  }

  resize = () => {
    const targetWidth = parseInt(this.container.style('width'), 10);
    this.svg.current.setAttribute('width', targetWidth);
    this.svg.current.setAttribute('height', Math.round(targetWidth / this.ratio));
  }

  render() {
    const { width, height, margin } = this.props;
    return (
      <svg
        ref={this.svg}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
        viewBox={`0 0 ${this.state.width} ${this.state.height}`}
        preserveAspectRatio="xMinYMid"
      >
        {this.props.axisComponent ? this.props.axisComponent(this.svg) : null}
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {this.props.children}
        </g>
      </svg>
    );
  }
}

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

ResponsiveSVG.defaultProps = {
  margin: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
};

ResponsiveSVG.propTypes = {
  axisComponent: PropTypes.func,
  width: stringOrNumber,
  height: stringOrNumber,
  margin: PropTypes.shape({
    top: stringOrNumber,
    bottom: stringOrNumber,
    left: stringOrNumber,
    right: stringOrNumber,
  }),
};
