import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ProductListPage from './Components/ProductList/ProductListPage';
import ProductIndex from './Components/ProductScreen/ProductIndex';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Index from './Components/NewHomePage/Index';
import { isMobile } from 'react-device-detect';
import AddIndex from './Components/AddProperty/AddIndex';

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
        path: "/addData/:id",
        element:  <AddIndex/> ,
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

const Mobilerouter = createBrowserRouter([
  {
    path: "/",
    element:  <Navbar/> ,
    children: [
      {
        path: "/",
        element:  <Index/> ,
      },
      
    ]
  },
]);


function App() {
  return (
    <div>

      <RouterProvider router={ isMobile ? Mobilerouter : router }/>
     
    </div>
  );
}

export default App;
