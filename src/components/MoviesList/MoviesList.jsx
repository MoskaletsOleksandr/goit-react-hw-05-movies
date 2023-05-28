import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  MovieWrapper,
  MovieName,
  MovieImage,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <MovieWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{from: location}}>
            <MovieImage src={`${baseImageUrl}${movie.poster_path}`} alt="" />
            <MovieName>{movie.title}</MovieName>
          </Link>
        </MovieWrapper>
      ))}
    </Container>
  );
};
