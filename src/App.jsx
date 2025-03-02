import { useState, useEffect } from "react";

const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [genre, setGener ] = useState('');

  useEffect( () => {
    if (genre !== ''){
      const selectedMovies = initialMovies.filter ( (movie) => movie.genre === genre)
      setFilteredMovies(selectedMovies)
    } else {
      setFilteredMovies(initialMovies)
    }

  }, [genre] )

  return (
    <>
    <div className="container">
      <h1>Lista films</h1>

      <div className="mb-5">
        <select className="form-control" name="" onChange={(e) => setGener(e.target.value) }>
          <option value="">Tutti</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
        

      </div>

      <ul className="list-group">
        {
          filteredMovies.map( (movie) => {
            return(
              <li key={movie} className="list-group-item">
                {movie.title} - {movie.genre}

              </li>
            )
          } )
        }
      </ul>




    </div>
      
      
      
    </>
  )
}

export default App
