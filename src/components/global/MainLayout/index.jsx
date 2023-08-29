
import PropTypes from 'prop-types';
import { Sidebar } from '../Sidebar';
import { useAppSelector } from '../../../utils/hooks/useStore';


function MainLayout({
  children
}) {

  const isAuth = useAppSelector(state => state.session.isAuth);

  return(
    <main 
      className={`relative p-[2.5%] ml-[20vw] ${ isAuth ? 'w-[50vw]' : 'w-[75vw]'} 
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