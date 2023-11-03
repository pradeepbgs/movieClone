import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

function SecondaryContainer() {
  const {nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies} = useSelector(state => state.movies)
  return (
    <div className='-mt-[250px]'>
      <MovieList title={"Now Playing"} movies = {nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies = {topRatedMovies} />
      <MovieList title={"Popular"} movies = {popularMovies} />
      <MovieList title={"upcoming"} movies = {upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer
