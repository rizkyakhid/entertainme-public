import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import EntertainMeCard from '../components/EntertainMeCard'
import NavButtons from '../components/NavButtons'
import { DELETE_MOVIE } from '../config/mutations'
import { GET_ENTERTAINMENT } from '../config/queries'
import Swal from 'sweetalert2' 

function Home() {

  const { data, loading, error, refetch } = useQuery(GET_ENTERTAINMENT)
  const [deleteMovie] = useMutation(DELETE_MOVIE, { refetchQueries: [{ query: GET_ENTERTAINMENT }] })

  function handleDelete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to delete this movie from the list",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, go on!',
      cancelButtonText: 'Nonono, my bad'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMovie({
          variables: { id }
        })
        refetch()
        Swal.fire(
          'Deleted!',
          'Your movie has been deleted from the list!',
          'success'
        )
      }
    })
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
      <div className='container my-2'>
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