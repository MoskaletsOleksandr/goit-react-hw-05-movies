import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MainMovieInfo } from 'components/MainMovieInfo/MainMovieInfo';
import { searchMovieDetails } from 'services/themoviedb-api';
import BackLink from 'components/common/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

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
    <>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <MainMovieInfo info={movieDetails} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
