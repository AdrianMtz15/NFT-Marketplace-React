
import PropTypes from 'prop-types';
import { Sidebar } from '../Sidebar';


function MainLayout({
  children
}) {

  return(
    <main 
      className={`relative p-[2.5%] ml-[20vw] ${ 'w-[50vw]'} 
      h-[100vh] overflow-auto`}>
      {children}
      <Sidebar/>
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export {
  MainLayout
}