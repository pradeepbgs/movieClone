import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './components/Login.jsx'
import Browse from './components/Browse.jsx'
import Body from './components/Body.jsx'
import {Provider} from 'react-redux'
import store from './redux/authStore.js'




const router = createBrowserRouter([
  {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Body/>
        },
          {
            path:'/login',
            element:<Login/> ,
          },
          {
              path:'/browse',
              element:<Browse/>
          }
      ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
