import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, {githubInfo} from './components/Github/Github'

//  const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       }
//     ]
//   }
//  ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element ={<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/user/:userId' element = {<User/>}/>
      <Route loader={githubInfo} path = '/github' element = {<Github/>}/>

    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
