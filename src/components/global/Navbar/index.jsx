import { NavItem } from "../NavItem";
import './index.css';

import arrowRightIcon from '../assets/ico/arrow-right.png';
import navBackground from '../assets/img/nav-background.png';

import { ReactComponent as HomeIcon } from '../assets/ico/home.svg';
import { ReactComponent as CategoryIcon } from '../assets/ico/category.svg';
// import { ReactComponent as FolderIcon } from '../assets/ico/folder.svg';
import { ReactComponent as SettingIcon } from '../assets/ico/setting.svg';
// import { ReactComponent as WalletIcon } from '../assets/ico/wallet.svg';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { useAppSelector } from '../../../utils/hooks/useStore';

function Navbar() {
  const isNavActive = useAppSelector(state => state.session.navActive);
  const isAuth = useAppSelector(state => state.session.isAuth);
  const navLinks = [
    {
      title: "Dashboard",
      url: '/',
      icon: <HomeIcon/>
    },
    {
      title: "Marketplace",
      url: '/marketplace',
      icon: <CategoryIcon/>,
      defaultNav: true
    },
    // {
    //   title: "My Collection",
    //   url: '/my-collection',
    //   icon: <FolderIcon/>
    // },
    // {
    //   title: "Wallet",
    //   url: '/wallet',
    //   icon: <WalletIcon/>
    // },
    {
      title: "My Account",
      url: '/my-account',
      icon: <SettingIcon/>
    },
    {
      title: "Sign In",
      url: '/sign-in',
      icon: <ArrowRightOnRectangleIcon width={'24px'}/>,
      defaultNav: true
    },
  ]


  return(
    <nav 
      className={`shadow overflow-auto fixed top-0 ${isNavActive ? 'left-0' : 'left-[-100%]'}  
      w-[100vw] h-[90vh] lg:h-[100vh] mt-[10vh] lg:mt-0 pt-[30px] border-solid border 
      border-[#D9D9D9] lg:left-0 lg:w-[20vw] z-30 bg-white`}
    >

      <ul className="ml-[10%] mb-60 lg:ml[20%]">
        {
          navLinks.map((item) => {
            if(isAuth) {
              if(item.url === '/sign-in') {
                return null
              }

              return(
                <NavItem 
                  key={item.url} 
                  item={item} 
                />
              )
            } else {
              if(item.defaultNav) {
                return <NavItem key={item.url} item={item}/>
              } else {
                return null
              } 
            }
          })
        }
      </ul>

      <section 
        className={`cursor-default absolute bottom-0 left-[10%] mx-auto pb-[20px] mb-[30px] 
        rounded-[12px] opacity-95 bg-[url('../assets/nav-background-f13a24ef')] 
        bg-[#942BD9] pt-[30px] pl-[10px] w-[75%] max-w-[200px]`}>

          <h1 className="text-white mb-[30px] font-bold text-[3rem]">Earn up to $100 worth of NFT</h1>

          <div 
            className="cursor-pointer relative flex justify-around items-center 
            w-[70%] h-[6vh] min-h-[30px] rounded-[5px] bg-white"
          >
              <span className="text-[1.2rem] font-semibold">Learn More</span>
              <img src={arrowRightIcon} alt='arrow-right' className="w-[20px]"/>
          </div>
      </section>
    </nav>
  )
}

export {
    Navbar
}
