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

  return (
    <>
    <div className="container">
      <h1>Lista films</h1>
      <div className="">
        

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
