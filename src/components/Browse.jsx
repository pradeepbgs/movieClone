import React from 'react'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './movies/MainContainer'
import SecondaryContainer from './movies/SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import useUpcomingMovies from '../customHooks/useUpcomingMovies'
import useTopRatedMovies from '../customHooks/useTopRatedMovies'


function Browse() {
   
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()
  
  return (
    <div className=''>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
