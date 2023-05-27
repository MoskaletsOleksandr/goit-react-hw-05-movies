const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer f684babe55506f9e81f51cf72ea747dd',
  },
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
