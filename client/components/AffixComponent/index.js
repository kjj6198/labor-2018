import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AffixComponent extends Component {
  state = {
    affix: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const { affix } = this.state;
    const { offset, offsetBottom } = this.props;
    const { scrollTop } = document.documentElement;

    if (!affix && (scrollTop >= offset) && (scrollTop <= offsetBottom)) {
      this.setState(
        { affix: true },
        () => this.props.onAffix && this.props.onAffix(e),
      );
    }

    if ((affix && scrollTop < offset) || (affix && scrollTop > offsetBottom)) {
      this.setState(
        { affix: false },
        () => this.props.onUnfix && this.props.onUnfix(e),
      );
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div className={this.state.affix ? 'affix' : className}>
        {this.props.children(this.state.affix)}
      </div>
    );
  }
}

AffixComponent.defaultProps = {
  offset: 0,
  className: null,
};

AffixComponent.propTypes = {
  children: PropTypes.func,
  onAffix: PropTypes.func,
  onUnfix: PropTypes.func,
  offset: PropTypes.number,
  offsetBottom: PropTypes.number,
  className: PropTypes.string,
};
