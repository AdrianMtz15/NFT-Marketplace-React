import { NavLink, useLocation } from "react-router-dom";

import './index.css';

import arrowRightIcon from '../../assets/ico/arrow-right.png';

import { ReactComponent as HomeIcon } from '../../assets/ico/home.svg';
import { ReactComponent as CategoryIcon } from '../../assets/ico/category.svg';
import { ReactComponent as FolderIcon } from '../../assets/ico/folder.svg';
import { ReactComponent as SettingIcon } from '../../assets/ico/setting.svg';
import { ReactComponent as WalletIcon } from '../../assets/ico/wallet.svg';


function Navbar() {
    const navActive = 'text-[#0997FF] font-bold';
    const liFontSize = 'text-[16px]';
    const location = useLocation();

    const navLinkActive = (path) => {
      return location.pathname === path;
    };

    return(
        <>
            <nav className="overflow-auto fixed top-0 w-[20vw] h-[100vh] pt-[30px] border-solid border border-[#D9D9D9]">
                <ul className="ml-[20%]">
                    <li className={`${liFontSize} mb-6 font-sans max-w-max`}>
                        <NavLink to={'/'} className={({isActive}) => isActive ? navActive : undefined}>
                            <div className="flex flex-row justify-start">
                                <HomeIcon fill={navLinkActive('/') ? '#0997FF' : '#4D4A4A'}/>
                                <p className="ml-[1vw]">Dashboard</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className={`${liFontSize} mb-6 font-sans max-w-max`}>
                        <NavLink to={'/marketplace'} className={({isActive}) => isActive ? navActive: undefined}>
                            <div className="flex flex-row justify-start">
                                <CategoryIcon fill={navLinkActive('/marketplace') ? '#0997FF' : '#4D4A4A'}/>
                                <p className="ml-[1vw]">Marketplace</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className={`${liFontSize} mb-6 font-sans max-w-max`}>
                        <NavLink to={'/my-collection'} className={({isActive}) => isActive ? navActive: undefined}>
                            <div className="flex flex-row justify-start">
                                <FolderIcon fill={navLinkActive('/my-collection') ? '#0997FF' : '#4D4A4A'}/>
                                <p className="ml-[1vw]">My Collection</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className={`${liFontSize} mb-6 font-sans max-w-max`}>
                        <NavLink to={'/my-orders'} className={({isActive}) => isActive ? navActive: undefined}>
                            <div className="flex flex-row justify-start">
                                <WalletIcon fill={navLinkActive('/my-orders') ? '#0997FF' : '#4D4A4A'}/>
                                <p className="ml-[1vw]">Cart</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className={`${liFontSize} mb-60 font-sans max-w-max`}>
                        <NavLink to={'/my-account'} className={({isActive}) => isActive ? navActive: undefined}>
                            <div className="flex flex-row justify-start">
                                <SettingIcon fill={navLinkActive('/my-account') ? '#0997FF' : '#4D4A4A'}/>
                                <p className="ml-[1vw]">My Account</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>

                <section className={`cursor-default relative pb-[20px] mb-[30px] rounded-[12px] opacity-95 bg-[url('../../assets/img/nav-background.png')] bg-[#942BD9] pt-[30px] pl-[10px] bottom-0 right-0 left-0 w-[70%] m-[auto]`}>
                    <h1 className="text-white mb-[30px] font-bold text-[3rem]">Earn up to $100 worth of NFT</h1>
                    <div className="cursor-pointer relative flex justify-around items-center w-[70%] h-[6vh] min-h-[30px] rounded-[5px] bg-white">
                        <span className="text-[1.2rem] font-semibold">Learn More</span>
                        <img src={arrowRightIcon} alt='arrow-right' className="w-[20px]"/>
                    </div>
                </section>

            </nav>
        </>
    )
}

export {
    Navbar
}