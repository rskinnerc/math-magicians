import PropTypes from 'prop-types';

export default function Button(props) {
  const { buttonName, btnClass, handleClick } = props;
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

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
};

Button.defaultProps = {
  btnClass: '',
};
