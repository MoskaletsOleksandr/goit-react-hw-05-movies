import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MainMovieInfo } from 'components/MainMovieInfo/MainMovieInfo';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { searchMovieDetails } from 'services/themoviedb-api';
import BackLink from 'components/common/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
      <BackLink to={backLinkHref}>Go back</BackLink>
      <SectionTitle title="MovieDetails" />
      <MainMovieInfo info={movieDetails} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
