import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Home from './routes/Home'
import ErrorPage from './routes/ErrorPage'
import Product from './routes/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/Cardapio/',
        element: <Home />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Cardapio/product/:productName',
        element: <Product />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)