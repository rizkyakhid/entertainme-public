import { useQuery } from '@apollo/client'
import React from 'react'
import EntertainMeCard from '../components/EntertainMeCard'
import NavButtons from '../components/NavButtons'
import { GET_FAVORITES } from '../config/queries'

function Favorites() {
  const { data, loading, error } = useQuery(GET_FAVORITES)
  console.log(data)
  return (
    <div className="container my-2">
      <NavButtons />
      <hr />
      <h1 className='my-2'>Favorites</h1>
      <div className="row">
        {
          data.favorites.map((fav, favId) => (<EntertainMeCard key={favId} content={fav} />))
        }
      </div>
    </div>
  )
}

export default Favorites