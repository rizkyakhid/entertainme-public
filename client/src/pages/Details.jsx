import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_BY_ID } from '../config/queries'

function Details() {
  const { id } = useParams()
  const { data } = useQuery(GET_BY_ID, {
    variables: { id }
  })

  console.log(data)

  return (
    <h1>Ini details</h1>
  )
}

export default Details