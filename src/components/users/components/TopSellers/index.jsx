import { useAppSelector } from "../../../../utils/hooks/useStore";
import { SellerLabel } from "../SellerLabel";


function TopSellers() {
  const sellers = useAppSelector(state => state.users)
  
  return(
    <div className="bg-white w-[85%] h-[max-content] 
      rounded-[10px] mt-[50px] px-[7%] py-[5%] shadow-xl 
      border border-solid border-[#C4C4C4] mx-auto"
    >

      <section className="flex flex-row justify-between items-end">
        <h2 className="font-sans text-[2.4rem] font-bold text-[#1B1A1E]">Top Sellers</h2>
        <p className="font-sans text-[1.6rem] text-[#24D4FB] cursor-pointer hover:underline">See all</p>
      </section>

      <ul>
        {
          sellers?.map((seller) => {
            return(
              <li key={seller.id} className='mt-[20px] flex flex-row justify-between items-center'>
                <SellerLabel sellerData={seller}/>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export {
  TopSellers
}