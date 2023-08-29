import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { useAppSelector } from '../../../utils/hooks/useStore';

function ProfileBar() {
  const user = useAppSelector(state => state.session.user);

  return(
    <div className="shadow border-solid border-[#D9D9D9] border-l 
      z-10 h-[10vh] w-[30vw] bg-white flex flex-row justify-center 
      items-center fixed top-0 right-0 "
    >
      {/* <BellIcon className="w-[2rem] h-[2rem] mx-[8px] cursor-pointer"/> */}

      <div className="mx-[8px] flex flex-row items-center justify-center cursor-pointer">

        <img 
          className="mx-[8px] w-[2.5vw]" 
          src="https://firebasestorage.googleapis.com/v0/b/nft-marketplace-94b84.appspot.com/o/users-photos%2FEllipse%204.png?alt=media&token=853964c0-4bf2-4e58-9c60-e17a08448003" 
          alt="user-photo" 
        />

        <p 
          className="text-[1.6rem] font-medium text-[#4D4A4A] 
          font-sans mr-[5px]">
            {user?.username}
        </p>
        
        {/* <ChevronDownIcon className="w-[2rem] h-[2rem]"/> */}
      </div>
    </div>
  );
}

export {
  ProfileBar
}