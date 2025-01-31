// import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart.jsx';
import Points from './pages/Points/Points.jsx';

import StoreContextProvider from './context/StoreContext.jsx';
import Restaurants from './pages/Restaurants/Restaurants.jsx';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/kitchen/',
    element: <App />,
    children: [
      {
        path: '/kitchen/',
        element: <Home />,
      },
      {
        path: '/kitchen/cart',
        element: <Cart />,
      },
      {
        path: '/kitchen/points',
        element: <Points />,
      },
      {
        path: '/kitchen/restaurants',
        element: <Restaurants />,
      },
    ],
  },
]);
// import App from '../AppTest/AppTest.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  </React.StrictMode>
);
