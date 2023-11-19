import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import ProductIndex from './Components/ProductScreen/ProductIndex';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Index from './Components/NewHomePage/Index';
import { isMobile } from 'react-device-detect';
import AddIndex from './Components/AddProperty/AddIndex';
import IndexSearch from './Components/ProductSearch/IndexSearch';
import NoInternetIndex from './Components/NoInternet/NoInternetIndex';
import BudgetSearch from './Components/ProductSearch/BudgetSearch';
import ProductFullInfoIndex from './Components/ProductFullInfo/ProductFullInfoIndex';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SignUp';

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
        path: "/signIn",
        element:  <SignIn/> ,
      },
      {
        path: "/signUp",
        element:  <SignUp/> ,
      },
      {
        path: "/addData",
        element:  <AddIndex/> ,
      },
      {
        path: "/productSearch/:queryParam",
        element:  <IndexSearch/>,
      },
      {
        path: "/BudgetSearch/:queryParam",
        element:  <BudgetSearch/>,
      },
      {
        path: "/product",
        element: <ProductIndex/>,
      },
      {
        path: "/productFullInfo/:queryParam",
        element: <ProductFullInfoIndex/>,
      },
    ]
  },
]);

const MobileRouter = createBrowserRouter([
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

const NoConnection = createBrowserRouter([
  {
    path: "/",
    element:  <Navbar/> ,
    children: [
      {
        path: "/",
        element:  <NoInternetIndex/> ,
      },
      {
        path: "/addData",
        element:  <NoInternetIndex/> ,
      },
      {
        path: "/productList",
        element:  <NoInternetIndex/>,
      },
      {
        path: "/productSearch/:queryParam",
        element:  <NoInternetIndex/>,
      },
      {
        path: "/product",
        element: <NoInternetIndex/>,
      },
    ]
  },
]);


function App() {

  const [Online, setOnline] = useState<any>(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => {
      setOnline(true);
    });
    window.addEventListener('offline', () => {
      setOnline(false);
    });
  }, []);

  return (
    <div>
      <RouterProvider router={ Online ? isMobile ? MobileRouter : router : NoConnection }/>
    </div>
  );
}

export default App;
