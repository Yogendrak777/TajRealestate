import React, {useState, useEffect} from 'react';
import loadable from '@loadable/component';
import { isMobile } from 'react-device-detect';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import './App.css';
const Navbar = loadable(()=> import('./Components/NavBar/Navbar'));
const Index = loadable(()=> import('./Components/NewHomePage/Index'));
const AddIndex = loadable(()=> import('./Components/AddProperty/AddIndex'));
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
