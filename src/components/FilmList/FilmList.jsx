import { Link } from 'react-router-dom';
import s from './FilmList.module.css';
export default function FilmList(props) {
  const { movies } = props;

  return (
    props && (
      <ul>
        {movies.map(
          movie =>
            // проверка отсутствия названия фильма
            movie.title && (
              <>
                <li key={movie.id}>
                  <Link to={`/${movie.id}`} className={s.movieLink}>
                    {movie.title}
                  </Link>
                </li>
              </>
            ),
        )}
      </ul>
    )
  );
}
