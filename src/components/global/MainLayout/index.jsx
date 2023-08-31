
import PropTypes from 'prop-types';
import { Sidebar } from '../Sidebar';
import { useAppSelector } from '../../../utils/hooks/useStore';


function MainLayout({
  children
}) {

  const isAuth = useAppSelector(state => state.session.isAuth);

  return(
    <main 
      className={`w-[100vw] relative flex-col pt-[12vh] lg:pt-5 items-center justify-center p-[2.5%] 
      lg:ml-[20vw] ${ isAuth ? 'lg:w-[50vw]' : 'lg:w-[75vw]'} h-[max-content] overflow-auto`}>
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