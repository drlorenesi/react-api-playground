import React, { Fragment, useState } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService.mjs';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Movies() {
  // const [movies] = useState(getMovies());
  const [movies, setMovies] = useState(getMovies());
  let totalMovies = movies.length;

  const handleDelete = (movie) => {
    const index = deleteMovie(movie.id).id;
    setMovies(movies.filter((movie) => movie.id !== index));
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
