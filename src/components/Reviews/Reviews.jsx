import * as api from '../../services/ApiService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api.fetchMovieReviews(movieId).then(setReview);
  }, [movieId]);

  return review ? (
    review.results.map(i => (
      <div key={i.id}>
        <h4>{i.author}</h4>
        <p>{i.content}</p>
      </div>
    ))
  ) : (
    <div>
      <h4>No reviews</h4>
    </div>
  );
}
