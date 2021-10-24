import { Link } from 'react-router-dom';
import s from './FilmList.module.css';
export default function FilmList(props) {
  const { movies, location } = props;

  return (
    props && (
      <ul>
        {movies.map(
          movie =>
            // проверка отсутствия названия фильма
            movie.title && (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/${movie.id}`,
                    state: { from: location },
                  }}
                  className={s.movieLink}
                >
                  {movie.title}
                </Link>
              </li>
            ),
        )}
      </ul>
    )
  );
}
