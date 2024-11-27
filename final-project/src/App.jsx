import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profilepage from './components/Profilepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SplashScreen from './components/splashscreen'
const browserRouter = createBrowserRouter(
 
  
  [
  {
  path:"/",
  element:<MainLayout />,
  children:[
    {
      path:'/',
      element:<Home />
    }
  ],
},
{
  path:'/signup',
  element:<Signup />
},
{
  path:'/signin',
  element:<Signin />
},
{
  path:'/profilepage',
  element:<Profilepage />
},
{
  path:'/splashscreen',
  element:<SplashScreen />
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
