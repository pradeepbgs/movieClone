import { API_OPTIONS } from "../redux/constant"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../redux/movieSlice"
import { useEffect } from "react"

const  useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()

    const getMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const data = await res.json()
        const filterData = data.results.filter((video) => video.type === 'Trailer')
        const trailer = filterData.length ?  filterData[0]: data.results[0]
        dispatch(addTrailerVideo(trailer))
   }
 
   useEffect(() =>{
     getMovies()
   })
}

export default useMovieTrailer