import React from 'react'
import Input from '../Input'
import {useForm} from 'react-hook-form'
import lang from '../../redux/languageConstant'
import { useSelector } from 'react-redux'

function GptSearchBar() {
    const {register, handleSubmit} = useForm()
    const language = useSelector(state => state.lang.language)

    const searching = (data) => {
        console.log(data)
    }



  return (
    <div className=' bg-gray-300 mt-20 ml-[450px] w-fit rounded-md h-32 flex items-center justify-center'>
      <form onSubmit={handleSubmit(searching)} className='p-4'>
        <Input 
        type='text'
        placeholder={lang[language].placeHolder}
        width='w-96'
        {...register('search')}
        />
        <button type='submit' className='ml-3 bg-red-400 py-3 px-10 rounded-md'>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
