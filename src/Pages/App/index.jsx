import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Navbar } from '../../components/global/Navbar';
import { Dashboard } from '../Dashboard';
import { Marketplace } from '../Marketplace';
import { Checkout } from '../Checkout';
import { MyCollection } from '../MyCollection';
// import { MyAccount } from '../MyAccount';
import { Wallet } from '../Wallet';
import { NotFound } from '../NotFound';
// import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';

import './App.css';
import { useUsersActions } from '../../components/users/hooks/useUsersActions';
import { useNftsActions } from '../../components/nfts/hooks/useNftsActions';


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Dashboard/> },
    { path: '/marketplace', element: <Marketplace/> },
    { path: '/marketplace/checkout/:id', element: <Checkout/> },
    { path: '/my-collection', element: <MyCollection/> },
    // { path: '/my-account', element: <MyAccount/> },
    { path: '/wallet', element: <Wallet/> },
    // { path: '/sign-in', element: <SignIn/> },
    { path: '/sign-up', element: <SignUp/> },
    { path: '/*', element: <NotFound/> },
  ]);

  return routes
}

function App() {
  const { fetchNfts } = useNftsActions();
  const { setAllUsers } = useUsersActions();

  React.useEffect(() => {
    fetchNfts();
    setAllUsers();

  },[])

  return (
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
      </BrowserRouter>
  )
}

export { App }
