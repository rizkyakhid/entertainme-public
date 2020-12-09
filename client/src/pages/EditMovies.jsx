import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Form from '../components/Form'
import { EDIT_MOVIE } from '../config/mutations'
import { GET_ENTERTAINMENT, GET_MOVIE_BY_ID } from '../config/queries'

function EditMovies() {
  const { id } = useParams()
  const history = useHistory()
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: { id }
  })
  const [input, setInput] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: '',
    tags: []
  })
  const [editMovie] = useMutation(EDIT_MOVIE, { refetchQueries: [{ query: GET_ENTERTAINMENT }] })

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
    console.log(input, 'ini yg diinput ke mutation')
    editMovie({
      variables: { id, newEditedMovie: input }
    })
    history.push('/')
  }


  useEffect(() => {
    if (!loading) {
      setInput({
        title: data.movie.title || '',
        overview: data.movie.overview || '',
        poster_path: data.movie.poster_path || '',
        popularity: data.movie.popularity || 0,
        tags: data.movie.tags || []
      })
    }
  }, [data])


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
      <div className="container">
        <Form
          edit={true}
          input={input}
          setInput={setInput}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </div>
    )
  }

}

export default EditMovies