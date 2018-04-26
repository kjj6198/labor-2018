import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Story extends Component {
  render() {
    const { props } = this;
    return (
      <div>
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
