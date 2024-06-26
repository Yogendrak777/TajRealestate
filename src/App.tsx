import React, {useState, useEffect} from 'react';
import loadable from '@loadable/component';
import { isMobile } from 'react-device-detect';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import './App.css';
import MobRequestProp from './MobileComponents/MobRequestProp/MobRequestProp';
import ProcessingStatus from './MobileComponents/MobStatus/ProcessingStatus';
const ChartIndex = loadable(()=> import('./MobileComponents/MobChart/ChartIndex'));
const Navbar = loadable(()=> import('./Components/NavBar/Navbar'));
const Index = loadable(()=> import('./Components/NewHomePage/Index'));
const AddIndex = loadable(()=> import('./Components/AddProperty/AddIndex'));
const ShortListIndex = loadable(()=> import('./Components/ShortlistPage/ShortlistIndex'));
const IndexSearch = loadable(()=> import('./Components/ProductSearch/IndexSearch'));
const NoInternetIndex = loadable(()=> import('./Components/NoInternet/NoInternetIndex'));
const BudgetSearch = loadable(()=> import('./Components/ProductSearch/BudgetSearch'));
const ProductFullInfoIndex = loadable(()=> import('./Components/ProductFullInfo/ProductFullInfoIndex'));
const SignIn = loadable(()=> import('./Components/Login/SignIn'));
const SignUp = loadable(()=> import('./Components/Login/SignUp'));
const MobNavbar = loadable(()=> import('./MobileComponents/MobNavBar/MobNavbar'));
const ProfileIndex = loadable(()=> import('./MobileComponents/MobProfile/ProfileIndex'));
const MobShortlistIndex = loadable(()=> import('./MobileComponents/MobShortlist/MobShortlistIndex'));
const MobAddPropIndex = loadable(()=> import('./MobileComponents/MobAddPropertyData/MobAddPropIndex'));
const MobAddIndex = loadable(()=> import('./MobileComponents/MobAddPropertyData/MobAddIndex'));
const MobPDIndex = loadable(()=>import('./MobileComponents/MobProjectDetails/MobPDIndex'));
const MobSignIn = loadable(()=>import('./MobileComponents/MobLogin/MobSignIn'));
const MobSignUp = loadable(()=> import('./MobileComponents/MobLogin/MobSignUp'));
const MobPList = loadable(()=> import('./MobileComponents/MobProjectList/MobPList'));
const MobPLBudget = loadable(()=>import('./MobileComponents/MobProjectList/MobPLBudget'));
const MobPLApartments = loadable(()=>import('./MobileComponents/MobProjectList/MobPLApartments'));
const MobPLMainSearch = loadable(()=>import('./MobileComponents/MobProjectList/MobPLMainSearch'));
const LoaderPD = loadable(()=> import('./MobileComponents/MobNewHomePage/LoaderPD'));
const MobHomeIndex = loadable(() => import('./MobileComponents/MobNewHomePage/MobHomeIndex'), {fallback: <LoaderPD/>});
const MobBrokerIndex = loadable(()=> import('./MobileComponents/MobBrocker/MobBrokerIndex'));

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
        path: "/signIn/:queryParam",
        element:  <SignIn/> ,
      },
      {
        path: "/profile",
        element: <ProfileIndex/> ,
      },
      {
        path: "/chartWithUs",
        element: <ChartIndex/>,
      },
      {
        path: "/signUp/:queryParam",
        element:  <SignUp/> ,
      },
      {
        path: "/addProjectData",
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
        path: "/shortlist",
        element: <ShortListIndex/> ,
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
        path: "/signIn/:queryParam",
        element: <MobSignIn/>,
      },
      {
        path: "/signUp/:queryParam",
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
      {
        path: "/chartWithUs",
        element: <ChartIndex/>,
      },
      {
        path: "/requestProp",
        element: <MobRequestProp/>,
      },
      {
        path: "/addBroker",
        element: <MobBrokerIndex/>,
      },
      {
        path: "/processingScreen",
        element: <ProcessingStatus/>,
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
        path: "/addProjectData",
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
    <>
      <RouterProvider router={ Online ? isMobile ? MobileRouter : router : NoConnection }/>
    </>
  );
}

export default App;
