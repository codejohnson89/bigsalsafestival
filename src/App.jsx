import './App.scss'

import { RouterProvider } from 'react-router-dom'
import { NavRoutes } from './NavRoutes'


export default function App() {

  return (
    <>
      <RouterProvider router={NavRoutes}/>
    </>
  )
}
