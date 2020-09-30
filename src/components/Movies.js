import React, { Fragment, useState } from 'react';
import { getMovies } from '../services/fakeMovieService.mjs';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// Like
import Like from './common/Like';

function Movies() {
  const [movies, setMovies] = useState(getMovies());
  let totalMovies = movies.length;

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m.id !== movie.id));
  };
  const handleLike = (movie) => {
    const likedMovies = [...movies];
    const index = likedMovies.indexOf(movie);
    likedMovies[index] = { ...likedMovies[index] };
    likedMovies[index].liked = !likedMovies[index].liked;
    setMovies(likedMovies);
  };

  if (movies.length === 0)
    return (
      <Fragment>
        <h1>Movies</h1>
        <p>There are no movies in the database.</p>
      </Fragment>
    );

  return (
    <Fragment>
      <h1>Movies</h1>
      <p>Showing {totalMovies} movies in the Database</p>
      <table className='table table-sm align-middle table-striped table-hover'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => handleLike(movie)} />
              </td>
              <td>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => handleDelete(movie)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Movies;
