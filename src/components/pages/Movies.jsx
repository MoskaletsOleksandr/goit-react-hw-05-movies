import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMovies } from 'dataAPI';

const Movies = () => {
  const movies = getMovies();
  return (
    <main>
      <SectionTitle title="Movies" />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
