import React,{useEffect} from 'react'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './movies/MainContainer'
import SecondaryContainer from './movies/SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import useUpcomingMovies from '../customHooks/useUpcomingMovies'
import useTopRatedMovies from '../customHooks/useTopRatedMovies'
import GptSearch from '../components/GPT/GptSearch'
import { useSelector } from 'react-redux'
import {API_OPTIONS} from "../redux/constant";
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../redux/movieSlice"

function Browse() {
  // useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  const dispatch = useDispatch()

  const value = useSelector(state => state.gpt.showGptSearch)
  const NowPlayingMovies = async () =>{
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const data = await response.json()
    dispatch(addNowPlayingMovies(data.results))
 }
  useEffect(() => {
    NowPlayingMovies();
  })
  
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
