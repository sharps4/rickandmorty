import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCross, faLocationDot, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './pages/Home';
import Single from './pages/Single';
import Error404 from './pages/Error404';
import './styles/index.css';

library.add(fas, faCross, faLocationDot, faChevronLeft, faChevronRight);

const router = createBrowserRouter([
  {
    path:    '/',
    element: <Home/>,
  },
  {
    path:    '/details/:id',
    element: <Single/>,
  },
  {
    path:    '*',
    element: <Error404/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


// import reportWebVitals from './reportWebVitals';
// reportWebVitals();