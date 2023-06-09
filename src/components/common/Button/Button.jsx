import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};

export default Button;
