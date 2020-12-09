import React from 'react'
import { Link } from 'react-router-dom'

function DetailsCard(props) {
  const { data } = props

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="card mb-3" style={{ width: '80%' }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={data.poster_path} className="card-img" alt="Should Be Poster_Path" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p>Overview: <br />{data.overview}</p>
                <p className='card-subtitle'>Popularity: {data.popularity}</p>
                <p className='card-subtitle'>Tags: {data.tags.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-center mt-2'>
        <Link to='/' className='btn btn-primary'>Home</Link>
      </div>
    </div>
  )
}

export default DetailsCard