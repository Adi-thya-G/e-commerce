import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {store }from '../src/store/store.ts'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx'
import Products_Page from './pages/Products_Page.tsx'
import Product_Details_Page from './pages/Product_Details_Page.tsx'
import Cart from './pages/Cart.tsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:"",
      element:<Home/>
    },
      {
        path:"shop",
        element:<Products_Page/>,
      },
      {
        path:"shop/:id",
        element:<Product_Details_Page/>
      },{
        path:"cart",
        element:<Cart/>
      }

    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
