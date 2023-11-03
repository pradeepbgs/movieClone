import React from 'react'
import Moviecard from './Moviecard'

function MovieList({title, movies}) {
  return (
    <div className='bg-black text-white px-5 py-3 '>
        <h1 className='text-2xl font-bold'>{title}</h1>
       <div className='flex overflow-x-scroll '>
       <div className='flex '>
        {
            movies?.map((movie) => (
                <Moviecard key={movie?.id} id={movie?.id} poster_path={movie.poster_path} />
            ))
        }
       </div>
       </div>
    </div>
  )
}

export default MovieList
