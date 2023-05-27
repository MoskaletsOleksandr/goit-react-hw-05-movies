import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  min-width: 150px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    background-color: #2c3e91;
    outline: none;
    transform: scale(1.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonLabel = styled.span``;