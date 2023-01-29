import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p style={{ textAlign: 'center' }}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
