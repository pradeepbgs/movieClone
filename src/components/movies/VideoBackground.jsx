import { useSelector } from 'react-redux'
import React from 'react'
import useMovieTrailer from '../../customHooks/useMovieTrailer'

function VideoBackground({movieId}) {

  const trailer = useSelector(state => state.movies?.trailerVideo)

  useMovieTrailer(movieId)

  return (
    <div className=''>
      <iframe 
      className='w-full aspect-video min-h-screen'
      src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&loop=1&rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1&"}
      
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground
