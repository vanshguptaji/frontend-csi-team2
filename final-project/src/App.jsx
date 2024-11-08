import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Signup from './components/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const browserRouter = createBrowserRouter([
  {
  path:"/",
  element:<MainLayout />,
  children:[
    {
      path:'/',
      element:<Home />
    }
  ]
},
{
  path:'/signup',
  element:<Signup />
}

])


function App() {


  return (
    <>
 <RouterProvider router={browserRouter}/>
    </>
  )
}

export default App
