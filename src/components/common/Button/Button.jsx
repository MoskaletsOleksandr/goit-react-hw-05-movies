import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ children }) => {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  );
};

// Button.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default Button;