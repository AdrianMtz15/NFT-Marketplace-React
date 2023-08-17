import React from "react";

import { MainLayout } from "../../Components/MainLayout";
import { Browser } from "../../Components/Browser";
import { CategoryBar } from "../../Components/CategoryBar";
import { ModalCard } from "../../Components/ModalCard";
import { Banner } from "../../Components/Banner/Banner";
import { PopularNfts } from "../../Components/PopularNfts/PopularNfts";

function Dashboard() {
  const [nftOpen, setNftOpen] = React.useState({
    isOpen: false,
    nft: {}
  });



  return (
    <MainLayout>
      <div className="z-20 relative">
        <Browser/>
      </div>

      <Banner/>

      <CategoryBar/>

      <PopularNfts setNftOpen={setNftOpen}/>

      {/* Nfts Modal */}
      <section 
        id="nft-modal" 
        className={`flex items-center justify-center top-0 left-0 
        bg-[#F6FAFF]/80 w-full h-full z-20 ${nftOpen.isOpen ? 'absolute': 'hidden'}`}>
          
        <ModalCard 
          data={nftOpen} 
          closeModal={() => {
            setNftOpen({
              isOpen: false,
              nft: {}
            })
          }}/>
      </section>
    </MainLayout>
  )
}

export { Dashboard }

