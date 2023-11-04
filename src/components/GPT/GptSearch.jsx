import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'


function GptSearch() {
  return (
    <div className=''>
        <div className=''>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      </div>
        <div className='-mt-[55%]'>
      <GptSearchBar/>
      <GptMovieSuggestion/>
        </div>
    </div>
  )
}

export default GptSearch
