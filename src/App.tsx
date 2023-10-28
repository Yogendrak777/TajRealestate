import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ProductListPage from './Components/ProductList/ProductListPage';
import ProductIndex from './Components/ProductScreen/ProductIndex';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Index from './Components/NewHomePage/Index';
import HomeHeader from './Components/NewHome/HomeHeader';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Navbar/> ,
    children: [
      {
        path: "/",
        element:  <Index/> ,
      },
      {
        path: "/Old",
        element:  <HomeHeader/> ,
      },
      {
        path: "/productList",
        element:  <ProductListPage/>,
      },
      {
        path: "/product",
        element: <ProductIndex/>,
      },
    ]
  },
]);

function App() {
  return (
    <div>

      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
