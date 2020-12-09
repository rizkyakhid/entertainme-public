import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import EntertainMeCard from '../components/EntertainMeCard'
import NavButtons from '../components/NavButtons'
import { DELETE_MOVIE } from '../config/mutations'
import { GET_ENTERTAINMENT } from '../config/queries'

function Home() {

  const { data, loading, error, refetch } = useQuery(GET_ENTERTAINMENT)
  const [deleteMovie] = useMutation(DELETE_MOVIE, { refetchQueries: [{ query: GET_ENTERTAINMENT }] })

  function handleDelete(id) {
    deleteMovie({
      variables: { id }
    })
    refetch()
  }

  if (error) {
    console.log(error)
    return (
      <h1>Error</h1>
    )
  }

  else if (loading) {
    refetch()
    return (
      <h1>Loading...</h1>
    )
  }

  else {
    return (
      <div className='container'>
        <NavButtons />
        <hr />
        <h1 className='my-2'>Movies</h1>
        <div className="row">
          {
            data.movies.map((movie, movId) => (<EntertainMeCard key={movId} content={movie} home={true} handleDelete={handleDelete} />))
          }
        </div>
        <hr />
        <h1 className='my-2'>Series</h1>
        <div className="row">
          {
            data.series.map((ser, serId) => (<EntertainMeCard key={serId} content={ser} ser={true}/>))
          }
        </div>
      </div>
    )
  }
}

export default Home