import * as api from '../../services/ApiService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import noImage from '../../images/No_image.png';

export default function Cast() {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    credits &&
    credits.cast.map(i => (
      <div key={i.id}>
        <img
          style={{ width: '100px' }}
          src={i.profile_path ? `https://image.tmdb.org/t/p/w300/${i.profile_path}` : noImage}
          alt=""
        />
        <p>{i.name}</p>
      </div>
    ))
  );
}
