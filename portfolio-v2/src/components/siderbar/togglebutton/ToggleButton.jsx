import PropTypes from 'prop-types';

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      Button
    </button>
  )
}

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired
};

export default ToggleButton;
