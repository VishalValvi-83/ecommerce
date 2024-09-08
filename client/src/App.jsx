// import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './views/Home/Home'
import About from './views/About/About'
// import Review from './views/Review/Review'
import Login from './views/Login/Login'
import Products from './views/Products/Products'
import Offers from './views/Offers/Offers'
import SignUp from './views/SignUp/SignUp'
import Discus from './views/discussionforum/discuss'

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/offers",
      element:<Offers/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path :"/discuss",
      element:<Discus/>
    }
  ])
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
