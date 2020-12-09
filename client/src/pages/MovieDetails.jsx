import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsCard from '../components/DetailsCard'
import { GET_MOVIE_BY_ID } from '../config/queries'

function MovieDetails() {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: { id }
  })


  if (error) {
    return (
      <h1>ERROR</h1>
    )
  }

  else if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }


  else {
    return (
      <DetailsCard data={data.movie} />
    )
  }

}

export default MovieDetails