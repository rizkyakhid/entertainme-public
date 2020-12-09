import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from '../components/Form'
import { ADD_MOVIE } from '../config/mutations'
import { GET_ENTERTAINMENT } from '../config/queries'

function AddMovies() {
  const history = useHistory()
  const [input, setInput] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: 0,
    tags: []
  })
  const [addMovie] = useMutation(ADD_MOVIE, {refetchQueries: [{query: GET_ENTERTAINMENT}]})

  function handleInput(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    setInput({
      ...input,
      [name]: name === 'popularity' ? +value : value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(input)
    addMovie({
      variables: { newAddedMovie: input }
    })
    history.push('/')
  }

  return (
    <div className="container">
      <Form 
        add={true} 
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
      />
    </div>
  )
}

export default AddMovies