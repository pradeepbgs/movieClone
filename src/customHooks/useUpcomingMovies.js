import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {  addUpcomingMovies } from "../redux/movieSlice"
import { API_OPTIONS } from "../redux/constant"


const useUpcomingMovies  = () =>{
    const dispatch = useDispatch()
  const NowPlayingMovies = async () =>{
     const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
     const data = await response.json()
     dispatch(addUpcomingMovies(data.results))
  }

  useEffect( () =>{
    NowPlayingMovies()
  },[])
}

export default useUpcomingMovies;