import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../redux/movieSlice"
import { API_OPTIONS } from "../redux/constant"


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
  const NowPlayingMovies = async () =>{
     const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
     const data = await response.json()
     dispatch(addNowPlayingMovies(data.results))
  }

  useEffect( () =>{
    NowPlayingMovies()
  },[])
}

export default useNowPlayingMovies;