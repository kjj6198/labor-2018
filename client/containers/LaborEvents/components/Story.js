import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Story extends Component {
  element = React.createRef();
  componentDidMount() {
    this.io = new IntersectionObserver(console.log);
    this.io.observe(this.element.current);
  }

  componentWillUnmount() {
    this.io.unobserve(this.element.current);
  }

  render() {
    const { props } = this;
    return (
      <div ref={this.element}>
        <time>{props.date}</time>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    );
  }
}

Story.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};
