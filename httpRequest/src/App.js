import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [err, setError] = useState(null)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films/')

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json();

      // const loadedMovies = []

      // for (const key in data) {
      //   loadedMovies.push({
      //     id: key,
      //     title: data[key].title,
      //     openingText: data[key].openingText,
      //     releaseDate: data[key].releaseDate,
      //   })
      // }
      // console.log(loadedMovies)

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        }
      })
      setMovies(transformedMovies)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (err) {
    content = <p>{err}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
