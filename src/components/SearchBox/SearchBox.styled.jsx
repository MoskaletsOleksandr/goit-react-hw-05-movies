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
