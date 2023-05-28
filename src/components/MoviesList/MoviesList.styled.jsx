import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const MovieWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  border: none;
  background-color: #e0e0e0;
  color: #333;
  padding: 8px 16px;
  margin: 0 5px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
