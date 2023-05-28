import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  MovieWrapper,
  MovieName,
  MovieImage,
  PaginationWrapper,
  PaginationButton,
} from './MoviesList.styled';

export const MoviesList = ({
  movies,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';
  const placeholderImageUrl = 'https://via.placeholder.com/500x750?text=Movie';
  const location = useLocation();
  let toHref = '';

  if (location.pathname === '/') {
    toHref = 'movies/';
  }

  const handlePageChange = page => {
    onPageChange(page);
  };

  return (
    <Container>
      {movies.map(movie => {
        const imageUrl = movie.poster_path
          ? `${baseImageUrl}${movie.poster_path}`
          : placeholderImageUrl;

        return (
          <MovieWrapper key={movie.id}>
            <Link to={`${toHref}${movie.id}`} state={{ from: location }}>
              <MovieImage src={imageUrl} alt="" />
              <MovieName>{movie.title}</MovieName>
            </Link>
          </MovieWrapper>
        );
      })}
      {movies.length !== 0 && (
        <PaginationWrapper>
          {currentPage > 1 && (
            <PaginationButton onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </PaginationButton>
          )}
          {currentPage < totalPages && (
            <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </PaginationButton>
          )}
        </PaginationWrapper>
      )}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
