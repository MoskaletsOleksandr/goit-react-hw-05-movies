import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MainMovieInfo } from 'components/MainMovieInfo/MainMovieInfo';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { searchMovieDetails } from 'services/themoviedb-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await searchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <SectionTitle title="MovieDetails" />
      <MainMovieInfo info={movieDetails} />
    </main>
  );
};

export default MovieDetails;
