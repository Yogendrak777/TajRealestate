import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import HomeHeader from './Components/NewHome/HomeHeader';
import ProductListPage from './Components/ProductList/ProductListPage';
import ProductIndex from './Components/ProductScreen/ProductIndex';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <HomeHeader/> ,
  },
  {
    path: "/productList",
    element:  <ProductListPage/> ,
  },
  {
    path: "/product",
    element: <ProductIndex/>,
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
