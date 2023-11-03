import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {  addTopRateMovies } from "../redux/movieSlice"
import { API_OPTIONS } from "../redux/constant"


const useTopRatedMovies  = () =>{
    const dispatch = useDispatch()
  const NowPlayingMovies = async () =>{
     const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
     const data = await response.json()
     dispatch(addTopRateMovies(data.results))
  }

  useEffect( () =>{
    NowPlayingMovies()
  },[])
}

export default useTopRatedMovies;