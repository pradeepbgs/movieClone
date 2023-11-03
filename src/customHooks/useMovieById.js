import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {  addMovieId } from "../redux/movieSlice"
import { API_OPTIONS } from "../redux/constant"



const useMovieById  = (id) =>{
    const dispatch = useDispatch()
  const NowPlayingMovies = async () =>{
     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
     const data = await response.json()
     const filterData = data.results.filter((video) => video.type === 'Trailer')
     const trailer = filterData.length ?  filterData[0]: data.results[0]

  }

  useEffect( () =>{
    NowPlayingMovies()
  },[])
}



export default useMovieById;