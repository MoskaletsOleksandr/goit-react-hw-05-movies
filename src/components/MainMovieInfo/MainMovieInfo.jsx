import {
  MainInfo,
  MovieGenres,
  MovieInfo,
  MovieOverview,
  MoviePopularity,
  MovieSectionTitle,
  MovieTitle,
  PosterImage,
} from './MainMovieInfo.styled';

export const MainMovieInfo = ({ info }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';
  const placeholderImageUrl = 'https://via.placeholder.com/500x1000?text=Movie';
  const imageUrl = info.poster_path
    ? `${baseImageUrl}${info.poster_path}`
    : placeholderImageUrl;

  return (
    <MainInfo>
      <PosterImage src={imageUrl} alt="" />
      <MovieInfo>
        <MovieTitle>{info.title}</MovieTitle>
        <MoviePopularity>Popularity: {info.popularity}%</MoviePopularity>
        <MovieSectionTitle>Overview</MovieSectionTitle>
        <MovieOverview>{info.overview}</MovieOverview>
        <MovieSectionTitle>Genres</MovieSectionTitle>
        <MovieGenres>
          {info.genres.map(genre => genre.name).join(', ')}
        </MovieGenres>
      </MovieInfo>
    </MainInfo>
  );
};
