import { useContext } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';

import { ItemProvider, ItemContext } from '../../Context';

import { Navbar } from '../../Components/Navbar';
import { Dashboard } from '../Dashboard';
import { Marketplace } from '../Marketplace';
import { Checkout } from '../Checkout';
import { MyCollection } from '../MyCollection';
import { MyAccount } from '../MyAccount';
import { Cart } from '../Cart';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Sidebar } from '../../Components/Sidebar';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Dashboard/> },
    { path: '/marketplace', element: <Marketplace/> },
    { path: '/marketplace/checkout/:id', element: <Checkout/> },
    { path: '/my-collection', element: <MyCollection/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/wallet', element: <Cart/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> },
  ]);

  return routes
}

function App() {

  return (
    <ItemProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        {/* <Sidebar/> */}
      </BrowserRouter>
    </ItemProvider>

  )
}

export { App }
