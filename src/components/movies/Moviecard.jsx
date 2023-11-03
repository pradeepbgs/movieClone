import React from 'react'
import {Link} from 'react-router-dom'
import {IMG_CDN} from '../../redux/constant'

function Moviecard({id,poster_path}) {
  
  return (
    <Link to={`/browse/${id}`}>
    <div className='w-44 px-1 py-1 hover:scale-125 duration-300'>
      <img src={IMG_CDN+poster_path} alt="movie card" className='rounded-md' />
    </div>
    </Link>
  )
}

export default Moviecard
