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
import MobNavbar from './MobileComponents/MobNavBar/MobNavbar';
import MobHomeIndex from './MobileComponents/MobNewHomePage/MobHomeIndex';
import ProfileIndex from './MobileComponents/MobProfile/ProfileIndex';
import MobShortlistIndex from './MobileComponents/MobShortlist/MobShortlistIndex';
import MobAddPropIndex from './MobileComponents/MobAddPropertyData/MobAddPropIndex';
import MobAddIndex from './MobileComponents/MobAddPropertyData/MobAddIndex';
import MobPDIndex from './MobileComponents/MobProjectDetails/MobPDIndex';
import MobSignIn from './MobileComponents/MobLogin/MobSignIn';
import MobSignUp from './MobileComponents/MobLogin/MobSignUp';
import MobPList from './MobileComponents/MobProjectList/MobPList';
import MobPLBudget from './MobileComponents/MobProjectList/MobPLBudget';
import MobPLApartments from './MobileComponents/MobProjectList/MobPLApartments';
import MobPLMainSearch from './MobileComponents/MobProjectList/MobPLMainSearch';

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
    element:  <MobNavbar/> ,
    children: [
      {
        path: "/",
        element: <MobHomeIndex/> ,
      },
      {
        path: "/mobSignIn",
        element: <MobSignIn/>,
      },
      {
        path: "/mobSignUp",
        element: <MobSignUp/> ,
      },
      {
        path: "/profile",
        element: <ProfileIndex/> ,
      },
      {
        path: "/mobPLBudget/:queryParam",
        element: <MobPLBudget/> ,
      },
      {
        path: "/mobPLApartments/:queryParam",
        element: <MobPLApartments/> ,
      },
      {
        path: "/shortlist",
        element: <MobShortlistIndex/> ,
      },
      {
        path: "/mobProjectList",
        element: <MobPList/>,
      },
      { 
        path: "/addDataDivision",
        element: <MobAddPropIndex/> ,
      },
      {
        path: "/addProjectData",
        element: <MobAddIndex/> ,
      },
      {
        path: "/productSearch/:queryParam",
        element: <MobPDIndex/> ,
      },
      {
        path: "/mainSearch/:queryParam",
        element: <MobPLMainSearch/>,
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
