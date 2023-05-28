import { Link } from 'react-router-dom';
import {
  Container,
  MovieWrapper,
  MovieName,
  MovieImage,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Container>
      {movies.map(movie => (
        <MovieWrapper key={movie.id}>
          <Link to={`${movie.id}`}>
            <MovieImage src={`${baseImageUrl}${movie.poster_path}`} alt="" />
            <MovieName>{movie.title}</MovieName>
          </Link>
        </MovieWrapper>
      ))}
    </Container>
  );
};
