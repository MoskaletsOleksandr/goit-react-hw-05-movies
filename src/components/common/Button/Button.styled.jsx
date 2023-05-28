import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  transition: transform 0.3s ease-in-out;
  min-width: 100px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  background-color: #e6e6e6;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #2c3e91;
    outline: none;
    transform: scale(1.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  }
`;
