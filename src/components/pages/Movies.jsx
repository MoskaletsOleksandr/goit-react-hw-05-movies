import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/themoviedb-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryWord = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryWord === '') {
      return;
    }

    const fetchMovies = async () => {
      try {
        const results = await searchMovies(queryWord);
        setMovies(results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [queryWord]);

  const updateQueryString = word => {
    setSearchParams({ query: word });
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
