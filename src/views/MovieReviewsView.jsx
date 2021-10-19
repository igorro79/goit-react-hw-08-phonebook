import * as api from '../services/ApiService';
import { useState, useEffect } from 'react';

export default function MovieReviewsView(movieId) {
  const [review, setReview] = useState(null);

  //   useEffect(() => {
  //     api.fetchMovieDetail(movieId).then(setReview).then(console.log(review));
  //   });

  return (
    <div>
      <p>Reviewssss</p>
    </div>
  );
}
