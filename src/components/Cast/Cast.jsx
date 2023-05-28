import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieCast } from 'services/themoviedb-api';
import {
  CastList,
  CastItem,
  ActorImg,
  ActorName,
  CharacterName,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';
  const placeholderImageUrl = 'https://via.placeholder.com/500x500?text=Actor';

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await searchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <CastList>
      {cast.map(character => {
        const imageUrl = character.profile_path
          ? `${baseImageUrl}${character.profile_path}`
          : placeholderImageUrl;

        return (
          <CastItem key={character.credit_id}>
            <ActorImg src={imageUrl} alt={character.name} />
            <ActorName>{character.name} as</ActorName>
            <CharacterName>{character.character}</CharacterName>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
