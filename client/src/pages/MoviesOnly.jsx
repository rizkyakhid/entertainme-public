import { useQuery } from '@apollo/client'
import React from 'react'
import EntertainMeCard from '../components/EntertainMeCard'
import NavButtons from '../components/NavButtons'
import { GET_ENTERTAINMENT } from '../config/queries'

function MoviesOnly() {
  const { data, loading } = useQuery(GET_ENTERTAINMENT)

  if(loading) {
    console.log('Loading..')
  }

  return (
    <div className="container">
      <NavButtons/>
      <hr/>
      <h1 className="my-2">Movies</h1>
      <div className="row my-2">
        {
          data.movies.map((movie, movId) => (<EntertainMeCard key={movId} content={movie} home={true} />))
        }
      </div>
    </div>
  )
}

export default MoviesOnly