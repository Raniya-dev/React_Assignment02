import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './components/UserApp/Home.jsx'
import About from './components/UserApp/About.jsx'
import UsersList from './components/UserApp/UsersList.jsx'
import UserDetail from './components/UserApp/UserDetail.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,

    children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"user",element:<UsersList/>},
      {path:"user/:id",element:<UserDetail/>}
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)



