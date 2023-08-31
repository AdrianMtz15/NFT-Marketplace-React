import React from 'react';
import { useRoutes, HashRouter, Navigate } from 'react-router-dom';

import { Navbar } from '../components/global/Navbar';
import { Dashboard } from '../pages/Dashboard';
import { Marketplace } from '../pages/Marketplace';
import { Checkout } from '../pages/Checkout';
// import { MyCollection } from '../pages/MyCollection';
import { MyAccount } from '../pages/MyAccount';
// import { Wallet } from '../pages/Wallet';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

import { useAppSelector } from '../utils/hooks/useStore';
import { useUsersActions } from '../components/users/hooks/useUsersActions';
import { useNftsActions } from '../components/nfts/hooks/useNftsActions';

import './App.css';

const AppRoutes = () => {
  const isAuth = useAppSelector(state => state.session.isAuth);

  let routes = useRoutes([
    { path: '/', element: isAuth ? <Dashboard/> : <Navigate to={'/sign-in'}/> },
    { path: '/marketplace', element: <Marketplace/> },
    { path: '/marketplace/checkout/:id', element: <Checkout/> },
    // { path: '/my-collection', element: isAuth ? <MyCollection/> : <Navigate to={'/sign-in'}/> },
    { path: '/my-account', element: isAuth ? <MyAccount/> : <Navigate to={'/sign-in'}/> },
    // { path: '/wallet', element: isAuth ? <Wallet/> : <Navigate to={'/sign-in'}/>},
    { path: '/sign-in', element: isAuth ? <Navigate to={'/'}/> : <SignIn/> },
    { path: '/sign-up', element: isAuth ? <Navigate to={'/'}/> : <SignUp/> },
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
      <HashRouter>
        <AppRoutes/>
        <Navbar/>
      </HashRouter>
  )
}

export { App }
