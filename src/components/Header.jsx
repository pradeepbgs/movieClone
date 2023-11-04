import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../redux/firebase'
import { useDispatch } from 'react-redux'
import { changeLang } from '../redux/languageSlice'
import { setGpt } from '../redux/gptSlice'
import { SUPPORTED_LANGUAGE } from '../redux/constant'

function Header() {
  // const [input, setInput] = useState(null)
  const status = useSelector(state => state.auth.status)
  const showGptSearch = useSelector(state => state.gpt.showGptSearch)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log(error)
    });
  }

  const handleGptSearchClick = () => {
    dispatch(setGpt())
  }

  const languageChange = (e) => {
    dispatch(changeLang(e.target.value))
  }

  return (
    <div className=' absolute h-20 w-full flex justify-between items-center px-[12%]'>
      <div>
      <Link>
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className='w-44'/>
      </Link>
      </div>
      <div>
       { showGptSearch &&  <select onChange={languageChange} className='mr-2 py-1 px-1 bg-slate-500 text-white rounded-sm'>
          {SUPPORTED_LANGUAGE.map((lang) => 
          (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
          )}
        </select>}
      {
        !status ? <Link to='/login'>
        <button className='text-white bg-red-500 px-4 py-1 rounded-sm'>Sign in</button>
        </Link> : null
      }
      {status && (
        <>
          <button className='bg-blue-500 p-1 px-6 rounded-sm text-white mr-5' onClick={handleGptSearchClick}>{ showGptSearch ? 'HOME' : 'GPT'}</button>
          <button className='text-white bg-red-500 px-4 py-1 rounded-sm' onClick={handleSignOut}>Log out</button> 
      </>
      )
    }
    </div>
    </div>
  )
}

export default Header
