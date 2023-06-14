import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Navbar } from '../../Components/Navbar';
import { Dashboard } from '../Dashboard';
import { Marketplace } from '../Marketplace';
import { MyCollection } from '../MyCollection';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Sidebar } from '../../Components/Sidebar';

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Dashboard/> },
    { path: '/marketplace', element: <Marketplace/> },
    { path: '/my-collection', element: <MyCollection/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> },
  ]);

  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <Sidebar/>
    </BrowserRouter>
  )
}

export { App }
