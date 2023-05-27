import Home from 'components/pages/Home';
import MovieDetails from 'components/pages/MovieDetails';
import Movies from 'components/pages/Movies';
import NotFound from 'components/pages/NotFound';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies" end>
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
