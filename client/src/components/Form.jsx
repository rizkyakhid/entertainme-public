import React from 'react'
import { Link } from 'react-router-dom'

function Form(props) {
  const { add, edit, handleSubmit, handleInput, input } = props

  return (
    <div className="d-flex justify-content-center my-2">
      <form style={{ width: '50%' }} onSubmit={(e) => handleSubmit(e)}>
        { add && <h1>Add Movies</h1> }
        { edit && <h1>Edit Movies</h1> }
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" className="form-control" value={edit ? input.title : undefined} onChange={(e) => handleInput(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="overview">Overview</label>
          <textarea name="overview" id="overview" cols="30" rows="3" className="form-control" value={edit ? input.overview : undefined} onChange={(e) => handleInput(e)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="poster_path">Poster Path</label>
          <input type="text" name="poster_path" id="poster_path" className="form-control" value={edit ? input.poster_path : undefined} onChange={(e) => handleInput(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="popularity">Popularity</label>
          <input type="number" name="popularity" id="popularity" className="form-control" value={edit ? input.popularity : undefined} onChange={(e) => handleInput(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input type="text" name="tags" id="tags" className="form-control" value={edit ? input.tags.join(', ') : undefined} onChange={(e) => handleInput(e)} />
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