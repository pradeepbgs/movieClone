import React from 'react'

function VideoTitle({title, overview, txtColor}) {
  return (
    <div className=' mt-[150px] px-10 absolute '>
      <h1 className={`text-4xl font-bold ${txtColor}`}>{title}</h1>
      <p className={`w-[40%] py-10 text-1xl ${txtColor} font-semibold`}>{overview}</p>
      <div className=''>
        <button className='bg-white text-black font-semibold p-3 px-10 text-lg mr-2 opacity-80 rounded-md hover:bg-opacity-70'> ▶️ play</button>
        <button className='bg-white text-black font-semibold p-3 px-10 text-lg mr-2 opacity-80 rounded-md hover:bg-opacity-70'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
