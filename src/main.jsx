import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Detail from './components/Details/Detail.jsx'
import ErrorPage from './components/Error/ErrorPage.jsx'
import Donations from './components/Donations/Donations.jsx'
import Statistics from './components/Statistic/Statistics.jsx'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import DonationStatistics from './components/DonationState/StateDonate.jsx'
import { HelmetProvider } from 'react-helmet-async';
import StateDonate from './components/DonationState/StateDonate.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },{
        path:'/item/:id',
        element:<Detail></Detail>,
        loader:()=>fetch('../donation.json')
      },{
        path:'/donate',
        element:<Donations></Donations>,
        loader:()=>fetch('/donation.json')
      },{
        path:'/state',
        element:<Statistics></Statistics>
      },{
        path:'/mystate',
        element:<StateDonate></StateDonate>,
        loader:()=>fetch('/donation.json')

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <HelmetProvider>
    <RouterProvider router={router}/>

    </HelmetProvider>
  

  </React.StrictMode>,
)
