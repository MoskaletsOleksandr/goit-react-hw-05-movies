import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getMovies } from 'dataAPI';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const movies = getMovies();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryWord = searchParams.get('query') ?? '';

  const updateQueryString = word => {
    setSearchParams({ query: word });
    
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWVhMTJhYjE5YzRmY2I3M2ZkZmE5N2YwYjk4YjIwZCIsInN1YiI6IjY0NzI0MmFkZGQ3MzFiMDBkZGYwODJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oRaRBs1ZZwlxBcTzonRfu-pGp99IQkXlU08WAq9fi3k'
  }
};

fetch(`https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => console.log(response.results))
  .catch(err => console.error(err));
  };

  return (
    <main>
      <SectionTitle title="Movies" />
      <SearchBox onSubmit={updateQueryString} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
