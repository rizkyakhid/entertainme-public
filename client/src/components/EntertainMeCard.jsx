// import { useMutation } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

function EntertainMeCard(props) {
  const { content, home } = props
  
  return (
    <div className="col-3">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{content.title}</h5>
          <p className="card-text">
            Overview: {content.overview} <br />
          </p>
          <p>
            Popularity: {content.popularity} <br />
            Tags: {content.tags}
          </p>
          {
            home &&
            <div>
              <Link to={`/details/${content._id}`} className='btn btn-primary'>Details</Link>
              <Link to={`/edit/${content._id}`} className='btn btn-info ml-1'>Edit</Link>
              <button className='btn btn-danger ml-1'>Delete</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default EntertainMeCard