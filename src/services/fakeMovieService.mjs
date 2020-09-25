import * as genresAPI from './fakeGenreService.mjs';

const movies = [
  {
    id: 1,
    title: 'Terminator',
    genre: { id: 1, name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: '2018-01-03T19:04:28.809Z',
  },
  {
    id: 2,
    title: 'Die Hard',
    genre: { id: 1, name: 'Action' },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    id: 3,
    title: 'Get Out',
    genre: { id: 3, name: 'Thriller' },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    id: 4,
    title: 'Trip to Italy',
    genre: { id: 2, name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    id: 5,
    title: 'Airplane',
    genre: { id: 2, name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    id: 6,
    title: 'Wedding Crashers',
    genre: { id: 2, name: 'Comedy' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    id: 7,
    title: 'Gone Girl',
    genre: { id: 3, name: 'Thriller' },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    id: 8,
    title: 'The Sixth Sense',
    genre: { id: 3, name: 'Thriller' },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    id: 9,
    title: 'The Avengers',
    genre: { id: 1, name: 'Action' },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m.id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m.id === movie.id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find((g) => g.id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb.id) {
    movieInDb.id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m.id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
