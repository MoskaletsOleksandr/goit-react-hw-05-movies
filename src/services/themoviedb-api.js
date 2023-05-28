const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODY4YWQ5YTU3MjQwNWQ1M2E0ZWM5ZDgxNjc2ODhkYyIsInN1YiI6IjY0NzI0MmFkZGQ3MzFiMDBkZGYwODJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLy8SYeThyR1frJL8mDfZVKg4zxEpmO8tEYvPLKmkbo';
const opt = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const searchMovies = async query => {
  const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  try {
    const response = await fetch(url, opt);

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchMovieDetails = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  try {
    const response = await fetch(url, opt);

    if (!response.ok) {
      throw new Error('Failed to fetch details of movie');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const searchTrendMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day?language=en-US`;

  try {
    const response = await fetch(url, opt);

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchMovieCast = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

  try {
    const response = await fetch(url, opt);

    if (!response.ok) {
      throw new Error('Failed to fetch details of movie');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
