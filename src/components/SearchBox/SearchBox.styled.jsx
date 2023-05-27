import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';

export const Form = styled.form`
  display: flex;
  margin-right: auto;
  margin-left: auto;

  text-align: center;

  padding: 15px;

  border: 1px solid black;
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  right: 6px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  min-width: 50px;
  height: 32px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    background-color: #2c3e91;
    outline: none;
    transform: scale(1.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  }
`;
