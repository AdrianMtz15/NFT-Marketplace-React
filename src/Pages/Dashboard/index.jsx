import React from "react";

import { MainLayout } from "../../components/global/MainLayout";
import { Browser } from "../../components/global/Browser";
import { CategoryBar } from "../../components/categories/components/CategoryBar";
import { ModalCard } from "../../components/nfts/components/ModalCard";
import { Banner } from "../../components/global/Banner/Banner";
import { PopularNfts } from "../../components/nfts/components/PopularNfts/PopularNfts";
import { useAppSelector } from "../../utils/hooks/useStore";

function Dashboard() {
  const [isSearching, setIsSearching] = React.useState(false);
  const [nftOpen, setNftOpen] = React.useState({
    isOpen: false,
    nft: {}
  });

  const search = useAppSelector(state => state.browser);

  React.useEffect(() => {
    if(search.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [search]);

  return (
    <MainLayout>
      <div className="z-20 relative">
        <Browser/>
      </div>
      
      {
        isSearching ? null : <Banner/>
      }

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

