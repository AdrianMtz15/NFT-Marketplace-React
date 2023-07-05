import { useContext } from "react";

import { MainLayout } from "../../Components/MainLayout";
import { Browser } from "../../Components/Browser";
import { Button } from "../../Components/Button";
import { CategoryBar } from "../../Components/CategoryBar";
import { Card } from "../../Components/Card";
import { ModalCard } from "../../Components/ModalCard";
import { ItemContext } from "../../Context";
import banner from "../../assets/img/dashboard-banner.png";

function Dashboard() {
  const { 
    renderItems,
    isNftOpen,
    closeNftModal,
    openNftModal,
    setNftActive,
   } = useContext(ItemContext);

  return (
    <MainLayout>
      {/* buscador */}
      <div className="z-20 relative">
        <Browser/>
      </div>

      {/* Banner */}
      <div className="mt-[3.1vh] relative flex flex-row 
        bg-[url('../../assets/img/banner-mask.png')]  py-[2.5rem] 
        px-[3rem] w-[100%] h-[max-content] bg-[#0997FF] opacity-90 
        rounded-[12px] ">

        <div className="z-10 w-[100%] cursor-default">
          <h1 
            className="font-bold text-[2.5em] text-white 
            leading-[3rem] h-[50%] w-[50%]">
              Discover, Collect & Create your own NFT
          </h1>

          <p className="text-white mt-[2vh] text-[1.2rem]">Search items, collection, accounts</p>

          <div className="flex flex-row mt-[2vh]">
            <section className="w-[25%] mr-[15px]">
              <Button text='Discover Now' bgColor='white' textColor='[#0997FF]'/>
            </section>
            <section className="w-[25%]">
              <Button borderColor='white' text='Create your NFT' bgColor='[transparent]' textColor='white'/>
            </section>
          </div>
        </div>

        <img 
          className=" absolute bottom-0 right-[1.5vw] h-[120%]" 
          src={banner} 
          alt="banner" />
      </div>

      {/* Categorias de NFT's */}
      <CategoryBar/>

      {/* Cards de NFT's */}
      <div className="relative grid gap-[2rem] grid-cols-3 w-full h-max-h mt-[30px]">
        {
          renderItems?.map(item => (
            <Card 
              key={item.id} 
              item={item} 
              onClick={() => {
                openNftModal();
                setNftActive(item);
              }}
            />
          )) 
        }
      </div>

      {/* Nfts Modal */}
      <section 
        id="nft-modal" 
        className={`flex items-center justify-center top-0 left-0 
        bg-[#F6FAFF]/80 w-full h-full z-20 ${isNftOpen ? 'absolute': 'hidden'}`}>
          
        <ModalCard 
          isOpen={isNftOpen} 
          closeModal={closeNftModal}/>
      </section>
    </MainLayout>
  )
}

export { Dashboard }

