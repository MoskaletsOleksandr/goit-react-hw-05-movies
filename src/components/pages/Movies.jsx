import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/themoviedb-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const queryWord = searchParams.get('query') ?? '';
  const currentPage = searchParams.get('page') ?? '';
  // setSearchParams({...searchParams, page: 1})

  useEffect(() => {
    if (queryWord === '') {
      return;
    }

    const fetchMovies = async () => {
      try {
        const data = await searchMovies(queryWord, currentPage);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [queryWord, currentPage]);

  const updateQueryString = word => {
    setSearchParams({page: 1, query: word });
  };

  const handlePageChange = page => {
    setSearchParams({query: queryWord, page: page.toString()});
  };


  return (
    <>
      <SearchBox onSubmit={updateQueryString} />
      <MoviesList
        movies={movies}
        currentPage={Number(currentPage)}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Movies;
