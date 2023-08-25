import { useContext } from "react";
import { ItemContext } from "../../Context";
import { NavItem } from "../NavItem";

import './index.css';

import arrowRightIcon from '../../assets/ico/arrow-right.png';
import { ReactComponent as HomeIcon } from '../../assets/ico/home.svg';
import { ReactComponent as CategoryIcon } from '../../assets/ico/category.svg';
import { ReactComponent as FolderIcon } from '../../assets/ico/folder.svg';
import { ReactComponent as SettingIcon } from '../../assets/ico/setting.svg';
import { ReactComponent as WalletIcon } from '../../assets/ico/wallet.svg';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';


function Navbar() {

  const {
    signOut
  } = useContext(ItemContext)

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
      {
        title: "My Collection",
        url: '/my-collection',
        icon: <FolderIcon/>
      },
      {
        title: "Wallet",
        url: '/wallet',
        icon: <WalletIcon/>
      },
      {
        title: "My Account",
        url: '/my-account',
        icon: <SettingIcon/>
      },
      {
        title: "Sign In",
        url: '/sign-in',
        icon: <ArrowRightOnRectangleIcon width={'24px'}/>
      },
    ]

    // const renderLinks = () => {
    //   if
    // }

    return(
      <nav 
        className="shadow overflow-auto fixed top-0 w-[20vw] h-[100vh] 
        pt-[30px] border-solid border border-[#D9D9D9]"
      >

        <ul className="ml-[20%] mb-60">
          {
            signOut ?
            navLinks.map((item) => {
              if(item.defaultNav || item.url == '/sign-in')
                return(
                  <NavItem 
                    key={item.url} 
                    item={item} 
                  />
                )
            }) :
            navLinks.map((item) => {
              if(item.url != '/sign-in') {
                return(
                  <NavItem 
                    key={item.url} 
                    item={item} 
                  />
                )
              }
            })
          }
        </ul>

        <section 
          className={`cursor-default relative pb-[20px] mb-[30px] 
          rounded-[12px] opacity-95 bg-[url('../../assets/img/nav-background.png')] 
          bg-[#942BD9] pt-[30px] pl-[10px] bottom-0 right-0 left-0 w-[70%] m-[auto]`}>

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