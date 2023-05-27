import { Link } from 'react-router-dom';
import { Container, MovieWrapper, MovieName } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map(movie => (
        <MovieWrapper key={movie.id}>
          <Link to={`${movie.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <MovieName>{movie.name}</MovieName>
          </Link>
        </MovieWrapper>
      ))}
    </Container>
  );
};
