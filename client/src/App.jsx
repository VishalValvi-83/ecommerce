import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './views/Home/Home'
import About from './views/About/About'
import Review from './views/Review/Review'
import Login from './views/Login/Login'
import Products from './views/Products/Products'
import Offers from './views/Offers/Offers'

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/products",
      element:<Products></Products>
    },
    {
      path:"/offers",
      element:<Offers></Offers>
    },
    {
      path:"/signup",
      element:<SignUp></SignUp>
    },
  ])
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
