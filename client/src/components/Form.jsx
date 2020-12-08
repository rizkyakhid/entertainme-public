import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ADD_MOVIE } from '../config/mutations'
import { GET_ENTERTAINMENT } from '../config/queries'

function Form(props) {
  const { add, edit } = props
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
      [name]: name === 'tags' ? [value] : value,
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
    <div className="d-flex justify-content-center my-2">
      <form style={{ width: '50%' }} onSubmit={(e) => handleSubmit(e)}>
        { add && <h1>Add Movies</h1> }
        { edit && <h1>Edit Movies</h1> }
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" className="form-control" onChange={(e) => handleInput(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="overview">Overview</label>
          <textarea name="overview" id="overview" cols="30" rows="3" className="form-control" onChange={(e) => handleInput(e)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="poster_path">Poster Path</label>
          <input type="text" name="poster_path" id="poster_path" className="form-control" onChange={(e) => handleInput(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="popularity">Popularity</label>
          <input type="number" name="popularity" id="popularity" className="form-control" onChange={(e) => handleInput(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input type="text" name="tags" id="tags" className="form-control" onChange={(e) => handleInput(e)} />
        </div>
        {
          add &&
          <button className="btn btn-primary">Add Movie</button>
        }
        {
          edit &&
          <button className="btn btn-primary">Update Movie</button>
        }
        <Link to="/" className="btn btn-primary ml-1">Back to Home</Link>
      </form>
    </div>
  )
}

export default Form