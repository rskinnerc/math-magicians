import { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends Component {
  render() {
    const { handleClick, buttonName, btnClass } = this.props;
    return (
      <li
        aria-hidden
        onClick={() => handleClick(buttonName)}
        className={btnClass}
      >
        {buttonName}
      </li>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
};

Button.defaultProps = {
  btnClass: '',
};
