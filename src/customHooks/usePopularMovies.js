import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addPopularMovies } from "../redux/movieSlice"
import { API_OPTIONS } from "../redux/constant"


const usePopularMovies = () =>{
    const dispatch = useDispatch()
  const NowPlayingMovies = async () =>{
     const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
     const data = await response.json()
     dispatch(addPopularMovies(data.results))
  }

  useEffect( () =>{
    NowPlayingMovies()
  },[])
}

export default usePopularMovies;