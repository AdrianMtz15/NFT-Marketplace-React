import { useContext } from "react";

import { MainLayout } from "../../Components/MainLayout";
import { Browser } from "../../Components/Browser";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Card";
import { Modal } from "../../Components/Modal";

import { ItemContext } from "../../Context";

import banner from "../../assets/img/dashboard-banner.png";
// import profilePhoto from "../../assets/img/prueba-perfil.png";


function Dashboard() {
  const { 
    items,
    isNftOpen,
    closeNftModal,
   } = useContext(ItemContext);
  
  return (
    <MainLayout>
      {/* buscador */}
      <Browser/>

      {/* Banner */}
      <div className="mt-[3.1vh] relative flex flex-row bg-[url('../../assets/img/banner-mask.png')]  py-[2.5rem] px-[3rem] w-[100%] h-[max-content] bg-[#0997FF] opacity-90 rounded-[12px]">
        <div className="z-10 w-[100%] cursor-default">
          <h1 className="font-bold text-[2.5em] text-white leading-[3rem] h-[50%] w-[50%]">Discover, Collect & Create your own NFT</h1>
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

        <img className="absolute bottom-0 right-[1.5vw] h-[120%]" src={banner} alt="banner" />
      </div>


      {/* Categorias de NFT's */}
      {/* <div>
        <section>
          <article>
            <h2>ALL NFTS</h2>
            <p>2,345,678 items</p>
          </article>
          <p>See all</p>
        </section>

        <section>
          
        </section>
      </div> */}



      {/* Nfts Modal */}
      <section id="nft-modal" className={`flex items-center justify-center top-0 left-0 bg-[#F6FAFF]/80 w-full h-full z-20 ${isNftOpen ? 'absolute': 'hidden'}`}>
        <Modal isOpen={isNftOpen} closeModal={closeNftModal}>
        </Modal>
      </section>
 
    

      {/* Cards de NFT's */}
      <div className="relative grid gap-[2rem] grid-cols-3 w-full h-max-h mt-[70px]">
        {
          items?.map((item) => {
              return(
                item.isInCart ? null : <Card key={item.itemId} item={item}/>
              )
          })
        }
      </div>
    </MainLayout>
  )
}

export { Dashboard }

