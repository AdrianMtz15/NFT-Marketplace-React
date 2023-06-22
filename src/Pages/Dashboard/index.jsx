import { useContext } from "react";

import { MainLayout } from "../../Components/MainLayout";
import { Browser } from "../../Components/Browser";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Card";

import { ItemContext } from "../../Context";

import banner from "../../assets/img/dashboard-banner.png";
// import profilePhoto from "../../assets/img/prueba-perfil.png";


function Dashboard() {
  const { items } = useContext(ItemContext);
  
  return (
    <MainLayout>
      {/* buscador */}
      <Browser/>

      {/* Banner */}
      <div className="mt-[3.1vh] relative flex flex-row bg-[url('../../assets/img/banner-mask.png')] min-h-[max-content] py-[2.4vh] px-[2.6vw] w-[100%] h-[29vh] bg-[#0997FF] opacity-90 rounded-[12px]">
        <div className="z-10 w-[100%] cursor-default">
          <h1 className="font-bold text-[2.7rem] text-white leading-[3rem] w-[50%]">Discover, Collect & Create your own NFT</h1>
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
        <img className="absolute bottom-0 right-[1.5vw] w-[25vw]" src={banner} alt="banner" />
      </div>


      {/* Categorias de NFT's */}
      <div>
        <section>
          <article>
            <h2>ALL NFTS</h2>
            <p>2,345,678 items</p>
          </article>
          <p>See all</p>
        </section>

        <section>
          
        </section>
      </div>

    

      {/* Cards de NFT's */}
      <div className="relative grid gap-[2rem] grid-cols-3 w-full h-max-h">
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

