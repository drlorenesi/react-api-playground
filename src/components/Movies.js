import React, { Fragment, useState } from 'react';
import { getMovies } from '../services/fakeMovieService.mjs';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faFileExcel } from '@fortawesome/free-solid-svg-icons';
// Like
import Like from './common/Like';
// Download
import { saveAs } from 'file-saver';
import XLSX from 'xlsx';

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

  const handleDownload = (data) => {
    /* make the worksheet */
    let ws = XLSX.utils.json_to_sheet(data);
    /* add to workbook */
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* write workbook (use type 'binary') */
    let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    /* generate a download */
    function s2ab(s) {
      let buf = new ArrayBuffer(s.length);
      let view = new Uint8Array(buf);
      for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }
    saveAs(
      new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
      'download.xlsx'
    );
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
      <button
        className='btn btn-success'
        onClick={() => handleDownload(movies)}
      >
        <FontAwesomeIcon icon={faFileExcel} />
      </button>
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
