import { RouterProvider } from 'react-router-dom'
import { RouterApp } from './router/RouterApp'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <RouterProvider router={ RouterApp }/>
    </QueryClientProvider>
  </React.StrictMode>,
)
