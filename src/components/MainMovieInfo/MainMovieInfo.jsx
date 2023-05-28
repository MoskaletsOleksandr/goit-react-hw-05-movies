import { MainInfo, MovieGenres, MovieInfo, MovieOverview, MoviePopularity, MovieSectionTitle, MovieTitle, PosterImage } from "./MainMovieInfo.styled";

export const MainMovieInfo = ({info}) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';

    return (
    <MainInfo>
        <PosterImage src={`${baseImageUrl}${info.poster_path}`} alt="" />
        <MovieInfo>
          <MovieTitle>{info.title}</MovieTitle>
          <MoviePopularity>Popularity: {info.popularity}%</MoviePopularity>
          <MovieSectionTitle>Overview</MovieSectionTitle>
          <MovieOverview>{info.overview}</MovieOverview>
          <MovieSectionTitle>Genres</MovieSectionTitle>
          <MovieGenres>{info.genres.map(genre => genre.name).join(', ')}</MovieGenres>
        </MovieInfo>
      </MainInfo>
    )
}