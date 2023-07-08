import { useContext } from 'react';
import { ItemContext } from '../../Context';

import PropTypes from 'prop-types';
import { Sidebar } from '../Sidebar';


function MainLayout({
  children
}) {

  const {
    signOut,
  } = useContext(ItemContext);

  return(
    <main 
      className={`relative p-[2.5%] ml-[20vw] ${signOut ? 'w-[80vw]' : 'w-[50vw]'} 
      h-[100vh] overflow-auto`}>
      {children}
      {signOut ? null : <Sidebar/>}
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export {
  MainLayout
}