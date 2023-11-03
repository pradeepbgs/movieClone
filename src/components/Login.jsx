import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import Input from './Input'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../redux/firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);
  const {register, handleSubmit} = useForm();
  const[error, setError] = useState('');
  const navigate = useNavigate()

 function signup(data){
   if(!isSignInForm){
     createUserWithEmailAndPassword(auth, data.email, data.password)
       .then((userCredential) => {
         const user = userCredential.user;
        navigate('/browse')
         console.log(user)
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setError(errorCode+"-"+errorMessage)
       });

  try {
    
  } catch (error) {
    setError(error)
  }

   } 

   else{
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // if(user){
      //   dispatch(login(user))
      // }
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode+"-"+errorMessage)
    });
   }
 }


 const toggleMenu = () => {
  setIsSignInForm(!isSignInForm)
 }


  return (
    <div className=''>
      <div className=''>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      </div>
      <div className='text-white bg-black absolute top-20 left-[30%] w-[30%] h-[80%] rounded-md p-3 bg-opacity-80'>
        <div className='flex flex-col items-center justify-center w-full'>
          <div>
        <h1 className='text-white mt-8  font-bold text-4xl'>{isSignInForm? 'Sign In' : 'Sign up'}</h1>
        </div>
        <div>
        <form className='mt-10 ml-9' onSubmit={ handleSubmit(signup) } >
          {!isSignInForm && <Input
          type='text'
          placeholder='name'
          {...register('name',{
            required: true,
          })}
          />}
          <Input
          type='email'
          placeholder='email'
          {...register('email',{
            required: true,
            validate: {
                matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be a valid address",
            }
        })}
          />
          <Input
          type='password'
          placeholder='password'
          {...register('password',{
            required: true,
          })}
          />
          {error && <p className='text-red-500'>{error}</p>}
          <button type='submit'
          className='bg-red-500 text-white px-4 py-2 rounded-md mt-5 w-[90%] text-1xl'
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className='mt-2 cursor-pointer' onClick={toggleMenu}> {isSignInForm ? 'New to Netflix ? Sign up' : 'Already a user Sign in'}</p>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
