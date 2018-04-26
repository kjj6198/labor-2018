import { axisLeft, axisBottom, format } from 'd3';

export const generateAxis = (svg, width, height, options = {}) => {
  const {
    xScale,
    yScale,
    xTicks = 10,
    yTicks = 15,
    label = '',
    formatter = format('d'),
    tickSize = 10,
  } = options;
  svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .attr('class', 'x axis')
    .call(axisBottom(xScale).ticks(xTicks).tickFormat(formatter).tickSize(tickSize));

  svg.selectAll('.x.axis text')
    .attr('y', 15);

  svg
    .append('g')
    .attr('class', 'y axis')
    .call(axisLeft(yScale).ticks(yTicks).tickSize(-width))
    .append('text')
    .attr('dx', 4)
    .attr('y', 6)
    .attr('text-anchor', 'start')
    .text(label)
    .style('fill', '#111')
    .style('font-size', '20px')
    .style('font-weight', 'bold');
};

export const numToCurrency = () => {

};
