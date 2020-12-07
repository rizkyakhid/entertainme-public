import { useQuery } from '@apollo/client'
import React from 'react'
import { getEntertainment } from '../config/queries'

function Home() {

  const { data, loading, error } = useQuery(getEntertainment)

  if(error) {
    console.log(error)
    return (
      <h1>Error</h1>
    )
  }

  else if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  else {
    return (
      <div>
        <h1>Movies:</h1>
        <div className="row">
          {
            data.movies.map((movie, movId) => (
              <div className="col-3" key={movId}>
                <div class="card" style={{ width: '18rem' }}>
                  <div class="card-body">
                    <h5 class="card-title">{movie.title}</h5>
                    <p class="card-text">
                      Overview: {movie.overview} <br />
                    Popularity: {movie.popularity} <br />
                    Tags: {movie.tags.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            )
            )
          }
        </div>
        <h1>Series:</h1>
        <div className="row">
          {
            data.series.map((movie, movId) => (
              <div className="col-3" key={movId}>
                <div class="card" style={{ width: '18rem' }}>
                  <div class="card-body">
                    <h5 class="card-title">{movie.title}</h5>
                    <p class="card-text">
                      Overview: {movie.overview} <br />
                    Popularity: {movie.popularity} <br />
                    Tags: {movie.tags.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>
    )
  }
}

export default Home