import React from 'react'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './movies/MainContainer'
import SecondaryContainer from './movies/SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import useUpcomingMovies from '../customHooks/useUpcomingMovies'
import useTopRatedMovies from '../customHooks/useTopRatedMovies'
import GptSearch from '../components/GPT/GptSearch'
import { useSelector } from 'react-redux'


function Browse() {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  const value = useSelector(state => state.gpt.showGptSearch)
  
  return (
    <div className=''>
      {
        value ? <GptSearch/> : <><MainContainer/>
        <SecondaryContainer/></>
      }
  
      
    </div>
  )
}

export default Browse
