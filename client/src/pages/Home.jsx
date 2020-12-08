import { useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import EntertainMeCard from '../components/EntertainMeCard'
import { getEntertainment } from '../config/queries'

function Home() {

  const { data, loading, error } = useQuery(getEntertainment)

  if (error) {
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
      <div className='container'>
        <Link to='/add' className='btn btn-primary mt-2'>Add Movies</Link>
        <Link to='/movies' className='btn btn-primary mt-2 ml-2'>All Movies</Link>
        <Link to='/series' className='btn btn-primary mt-2 ml-2'>All Series</Link>
        <h1 className='my-2'>Movies:</h1>
        <div className="row">
          {
            data.movies.map((movie, movId) => (<EntertainMeCard key={movId} content={movie} home={true}/>))
          }
        </div>
        <h1 className='my-2'>Series:</h1>
        <div className="row">
          {
            data.series.map((ser, serId) => (<EntertainMeCard key={serId} content={ser}/>))
          }
        </div>
      </div>
    )
  }
}

export default Home