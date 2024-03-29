import { Button } from "../Button";
import banner from "../assets/img/dashboard-banner.png";
import bannerMask from "../assets/img/banner-mask.png"

export function Banner() {
  return(
    <div className="mt-[3.1vh] relative flex flex-row 
      bg-[url('../assets/banner-mask-19f97f75.png')]  py-[2.5rem] 
      px-[3rem] w-[100%] max-w-[700px] h-[max-content] bg-[#0997FF] opacity-90 
      rounded-[12px] mx-auto">

      <div className="z-10 w-[100%] cursor-default h-max">
        <h1 
          className="font-bold text-[2.5em] text-white 
          leading-[3rem] h-[50%] w-[50%]">
            Discover, Collect & Create your own NFT
        </h1>

        <p className="text-white mt-[2vh] text-[1.2rem]">Search items, collection, accounts</p>

        <div className="flex flex-row mt-[2vh]">
          <section className="w-[25%] mr-[15px] min-w-[70px]">
            <Button text='Discover Now' bgColor='white' textColor='[#0997FF]'/>
          </section>
          <section className="w-[25%]  min-w-[70px]">
            <Button borderColor='white' text='Create your NFT' bgColor='[transparent]' textColor='white'/>
          </section>
        </div>
      </div>

      <img 
        className=" absolute bottom-0 right-[1.5vw] h-[120%] min-w-[345px]" 
        src={banner} 
        alt="banner" />
    </div>

  )
}
