import React from 'react'
import { Link } from 'react-router-dom'

function NavButtons() {
  return (
    <div>
      <Link to='/' className='btn btn-primary'>Home</Link>
      <Link to='/add' className='btn btn-primary ml-2'>Add Movies</Link>
      <Link to='/movies' className='btn btn-primary ml-2'>All Movies</Link>
      <Link to='/series' className='btn btn-primary ml-2'>All Series</Link>
      <Link to='/favorites' className='btn btn-primary ml-2'>Favorites</Link>
    </div>
  )
}

export default NavButtons