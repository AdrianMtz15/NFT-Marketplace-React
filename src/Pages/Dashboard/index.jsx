import { Browser } from "../../Components/Browser";
import { Button } from "../../Components/Button";

import banner from "../../assets/img/dashboard-banner.png";

function Dashboard() {

  return (
    <section className="relative p-[2.5%] ml-[20vw] w-[50%]">
      <Browser/>

      <div className="mt-[3.1vh] relative flex flex-row bg-[url('../../assets/img/banner-mask.png')] min-h-[max-content] py-[2.4vh] px-[2.6vw] w-[100%] h-[29vh] bg-[#0997FF] opacity-90 rounded-[12px]">
        <div className="z-10 w-[100%] cursor-default">
          <h1 className="font-bold text-[2.7rem] text-white leading-[3rem] w-[50%]">Discover, Collect & Create your own NFT</h1>
          <p className="text-white mt-[2vh] text-[1.2rem]">Search items, collection, accounts</p>

          <div className=" mt-[2vh]">
            <Button text='Discover Now' bgColor='white' textColor='[#0997FF]'/>
            <Button borderColor='white' text='Create your NFT' bgColor='[transparent]' textColor='white'/>
          </div>
        </div>
        <img className="absolute bottom-0 right-[1.5vw] w-[25vw]" src={banner} alt="banner" />
      </div>
    </section>
  )
}

export { Dashboard }

