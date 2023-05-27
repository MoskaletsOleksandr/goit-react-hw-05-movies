import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import { getMovieById } from 'dataAPI';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);
  return (
    <main>
      <SectionTitle title="MovieDetails" />
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Movie - {movie.name} - {movieId}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};

export default MovieDetails;
