import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTIONS } from '../../redux/constant'
import VideoTitle from './VideoTitle'

function MoviePlaying() {
  const [video, setVideo] = useState(null)
  const [movie, setMovie] = useState(null)
  const {slug} = useParams()



const fetchVideos = async (slug) =>{
  const response = await fetch(`https://api.themoviedb.org/3/movie/${slug}/videos?language=en-US`, API_OPTIONS)
   const data = await response.json()
   const filterData = data.results.filter((video) => video.type === 'Trailer')
   const trailer = filterData.length ?  filterData[0]: data.results[0]
   setVideo(trailer)
 }

 const fetchMovieDetails = async () =>{
   const response = await fetch(`https://api.themoviedb.org/3/movie/${slug}?language=en-US`, API_OPTIONS)
   const data = await response.json()
   setMovie(data)
 }

useEffect(() =>{
   fetchVideos()
   fetchMovieDetails(slug)
},[slug])

  return video? (
    <div className='w-screen aspect-video'>
       {/* <iframe src={`https://www.youtube.com/embed/${video?.key}`}
       className='w-screen h-screen aspect-video'
       >
       </iframe> */}
          <div>
       <iframe 
      className='w-full aspect-video min-h-screen'
      src={"https://www.youtube.com/embed/"+video?.key+"?autoplay=1&mute=1&loop=1&rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1&"}
      
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      <div className='absolute top-0 w-full'>
        <VideoTitle title={movie?.original_title} overview={movie?.overview} txtColor={'text-white'} />
      </div>
    </div>

  ): null
}

export default MoviePlaying
