import React from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { ItemProvider, ItemContext } from '../../Context';

import { Navbar } from '../../Components/Navbar';
import { Dashboard } from '../Dashboard';
import { Marketplace } from '../Marketplace';
import { Checkout } from '../Checkout';
import { MyCollection } from '../MyCollection';
import { MyAccount } from '../MyAccount';
import { Wallet } from '../Wallet';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';

import './App.css';
import { useNftsActions } from '../../hooks/useNftsActions';
import { useUsersActions } from '../../hooks/useUsersActions';


const AppRoutes = () => {
  const context = React.useContext(ItemContext);
  const signOut = context.signOut;

  let routes = useRoutes([
    { path: '/', element: signOut ? <Navigate replace to={'/sign-in'}/> : <Dashboard/> },
    { path: '/marketplace', element: <Marketplace/> },
    { path: '/marketplace/checkout/:id', element: <Checkout/> },
    { path: '/my-collection', element: signOut ? <Navigate replace to={'/sign-in'}/> : <MyCollection/> },
    { path: '/my-account', element: signOut ? <Navigate replace to={'/sign-in'}/> : <MyAccount/> },
    { path: '/wallet', element: signOut ? <Navigate replace to={'/sign-in'}/> : <Wallet/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/sign-up', element: <SignUp/> },
    { path: '/*', element: <NotFound/> },
  ]);

  return routes
}

function App() {
  const { getAllNfts } = useNftsActions()
  const { getAllUsers } = useUsersActions();

  React.useEffect(() => {
    getAllNfts();
    getAllUsers();

  },[])

  return (
    <ItemProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
      </BrowserRouter>
    </ItemProvider>

  )
}

export { App }
