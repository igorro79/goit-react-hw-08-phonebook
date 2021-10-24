import * as api from '../../services/ApiService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api.fetchMovieReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return reviews.length === 0 ? (
    <div>
      <h4>No reviews</h4>
    </div>
  ) : (
    reviews.map(i => (
      <div key={i.id}>
        <h4>{i.author}</h4>
        <p>{i.content}</p>
      </div>
    ))
  );
}
