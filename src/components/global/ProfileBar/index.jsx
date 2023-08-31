import { useSessionActions } from '../../../utils/hooks/useSessionActions';
import { useAppSelector } from '../../../utils/hooks/useStore';
import { Bars3Icon } from '@heroicons/react/24/solid';

function ProfileBar() {
  const isNavActive = useAppSelector(state => state.session.navActive);
  const user = useAppSelector(state => state.session.user);
  const isAuth = useAppSelector(state => state.session.isAuth);
  const { sessionToggleNav } = useSessionActions();

  return(
    <div className={`shadow border-solid border-[#D9D9D9] border-l 
      z-30 h-[10vh] w-[100vw] bg-white flex flex-row justify-center 
      items-center fixed top-0 right-0 left-0 m-auto lg:right-0 lg:left-auto 
      lg:m-0 lg:w-[30vw] lg:${isAuth ? null : 'hidden'}`}
    >
      <Bars3Icon
        width='40px' 
        color={`${isNavActive ? '#0997FF' : '#4D4A4A'}`}
        onClick={sessionToggleNav}
        className="cursor-pointer absolute top-0 bottom-0 left-5 m-auto
          lg:hidden"
      />

      <div className="mx-[8px] flex flex-row items-center justify-center cursor-pointer">

        <img 
          className={`mx-[8px] w-[50px] ${isAuth ? null : 'hidden'}`}
          src="https://firebasestorage.googleapis.com/v0/b/nft-marketplace-94b84.appspot.com/o/users-photos%2FEllipse%204.png?alt=media&token=853964c0-4bf2-4e58-9c60-e17a08448003" 
          alt="user-photo" 
        />

        <p 
          className="text-[1.6rem] font-medium text-[#4D4A4A] 
          font-sans mr-[5px]">
            {user?.username}
        </p>
        
      </div>
    </div>
  );
}

export {
  ProfileBar
}