import { useState, useEffect } from 'react';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchTrendMovies } from 'services/themoviedb-api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const trendMovies = await searchTrendMovies();
        setMovies(trendMovies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <main>
      <SectionTitle title="Home" />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
