import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import { Create } from '../components/create/Create';
import { Home } from '../components/home/Home';

export const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ '/app/home' }/>,
  },
  {
    path: '/app',
    element: <App/>,
    children: [
      {
        path: 'home', 
        element: <Home/>
      },
      {
        path: 'create',
        element: <Create/>
      },
      {
        path: 'edit/:id',
        element: <Create/>
      },
      {
        path: '*',
        element: <Navigate to={ '/app/home' }/>
      }
    ]
  }
]);
