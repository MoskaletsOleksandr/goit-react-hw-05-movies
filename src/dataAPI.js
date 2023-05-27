const movies = [
  { id: 'abc123', name: 'The Shawshank Redemption' },
  { id: 'def456', name: 'The Godfather' },
  { id: 'ghi789', name: 'Pulp Fiction' },
  { id: 'jkl012', name: 'The Dark Knight' },
  { id: 'mno345', name: 'Fight Club' },
  { id: 'pqr678', name: 'Inception' },
  { id: 'stu901', name: 'The Matrix' },
  { id: 'vwx234', name: 'Interstellar' },
  { id: 'yza567', name: 'The Lord of the Rings: The Fellowship of the Ring' },
  { id: 'bcd890', name: 'The Avengers' },
];

export const getMovies = () => {
  return movies;
};

export const getMovieById = movieId => {
  return movies.find(movie => movie.id === movieId);
};
