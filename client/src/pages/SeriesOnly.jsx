import React from 'react'
import { useQuery } from '@apollo/client'
import EntertainMeCard from '../components/EntertainMeCard'
import { GET_ENTERTAINMENT } from '../config/queries'
import NavButtons from '../components/NavButtons'

function SeriesOnly() {
  const { data, loading } = useQuery(GET_ENTERTAINMENT)

  if(loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="container">
      <NavButtons/>
      <hr/>
      <h1 className="my-2">Series</h1>
      <div className="row my-2">
        {
          data.series.map((ser, serId) => (<EntertainMeCard key={serId} content={ser} />))
        }
      </div>
    </div>
  )
}

export default SeriesOnly