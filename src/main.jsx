import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Components/Root/Root.jsx'
import ErrorPage from './Components/Root/ErrorPage/ErrorPage.jsx'
import HomePage from './Components/Root/HomePage/HomePage.jsx'
import DashBoard from './Components/Root/DashBoard/DashBoard.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },

      {
        path: "/DashBoard",
        element: <DashBoard></DashBoard>,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
