
import Header from './components/Header'
import { Outlet , useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login , logout} from './redux/authSlice.js'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./redux/firebase";



function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() =>{
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
        const {uid, email, password, displayName} = user;
        dispatch(login({uid:uid, email:email,password:password, displayName:displayName}))
        navigate('/browse')
      } else {
      // User is signed out
      dispatch(logout())
      navigate('/')
     }
    });

    return () => unsubscribe();
    
  },[])

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
