import { NavLink } from "react-router-dom";

import './index.css';

import arrowRightIcon from '../../assets/ico/arrow-right.png';

import { ReactComponent as HomeIcon } from '../../assets/ico/home.svg';
// import homeIcon from '../../assets/ico/home.svg';
// import categoryIcon from '../../assets/ico/category.svg';
// import folderIcon from '../../assets/ico/folder.svg';
// import settingIcon from '../../assets/ico/setting.svg';
// import walletIcon from '../../assets/ico/wallet.svg';

function Navbar() {
    const navActive = 'text-[#0997FF] font-bold';
    const liFontSize = 'text-[16px]';

    return(
        <>
            <nav className="overflow-auto fixed top-0 w-[20vw] h-[100vh] pt-32 border-solid border border-[#D9D9D9]">
                <ul className="ml-[20%]">
                    <li className={`${liFontSize} mb-6 font-sans`}>
                        <NavLink to={'/'} className={({isActive}) => isActive ? navActive: undefined}>
                            <div className="flex flex-row w-[15vw] justify-start">
                                {/* <img src={homeIcon} alt="home-icon" fill=""/> */}
                                {/* <svg src={homeIcon} alt="home-icon" fill="4D4A4A"/> */}
                                <HomeIcon fill='#4D4A4A'/>
                                <p className="ml-[1vw]">Dashboard</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className={`${liFontSize} mb-6 font-sans`}>
                        <NavLink to={'/marketplace'} className={({isActive}) => isActive ? navActive: undefined}>
                            Marketplace
                        </NavLink>
                    </li>
                    <li className={`${liFontSize} mb-6 font-sans`}>
                        <NavLink to={'/my-collection'} className={({isActive}) => isActive ? navActive: undefined}>
                            My Collection
                        </NavLink>
                    </li>
                    <li className={`${liFontSize} mb-6 font-sans`}>
                        <NavLink to={'/my-orders'} className={({isActive}) => isActive ? navActive: undefined}>
                            Cart
                        </NavLink>
                    </li>
                    <li className={`${liFontSize} mb-60 font-sans`}>
                        <NavLink to={'/my-account'} className={({isActive}) => isActive ? navActive: undefined}>
                            My Account
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