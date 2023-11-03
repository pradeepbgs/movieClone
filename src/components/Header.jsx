import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../redux/firebase'

function Header() {
  const status = useSelector(state => state.auth.status)
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className=' absolute h-20 w-full flex justify-between items-center px-[12%]'>
      <Link>
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className='w-44'/>
      </Link>
      {
        !status ? <Link to='/login'>
        <button className='text-white bg-red-500 px-4 py-1 rounded-sm'>Sign in</button>
        </Link> : null
      }
      {status && 
      <button className='text-white bg-red-500 px-4 py-1 rounded-sm' onClick={handleSignOut}>Log out</button>
      }
    </div>
  )
}

export default Header
