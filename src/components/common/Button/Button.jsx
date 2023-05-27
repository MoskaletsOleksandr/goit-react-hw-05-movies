import PropTypes from 'prop-types';
import { ButtonStyled, ButtonLabel } from './Button.styled';

export const Button = ({ children }) => {
  return (
    <ButtonStyled>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
