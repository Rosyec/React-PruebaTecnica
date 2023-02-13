import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { RouterApp } from './router/RouterApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={ RouterApp }/>
  </React.StrictMode>,
)
