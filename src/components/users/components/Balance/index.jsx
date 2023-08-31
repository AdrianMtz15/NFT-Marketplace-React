import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import { PlusIcon } from '@heroicons/react/24/solid';


function Balance() {
  return(
    <div className="relative w-[85%] bg-white h-[max-content] rounded-[12px] 
    mt-[4.2vh] p-[7%] shadow-xl border border-solid border-[#C4C4C4] flex 
    flex-col items-center mx-auto">
      <p className="font-sans text-[1.6rem] font-medium text-[#1B1A1E] cursor-default">
        Your Balance
      </p>
      <h2 className="font-bold text-[3.5rem] text-[#1B1A1E] cursor-default">$350,000.20</h2>

      <section className="flex flex-row items-center justify-start cursor-default">
        <p className="font-sans text-[1.4rem] font-medium text-[#C4C4C4] mr-[15px]">Total Offers</p>
        <p className="font-sans text-[1.4rem] font-medium text-[#130F26] mr-[5px]">USD 158,000</p>
        <p className="font-sans text-[1.4rem] font-medium text-[#73C255]">(59.11%)</p>
      </section>

      <section className="flex flex-row items-center justify-start 
       cursor-pointer mt-[10%] w-max">
        <p className="font-sans text-[1.4rem] font-medium text-[#C4C4C4]">sdfgcghjhkb21687udwhjkns....</p>
        
        <ClipboardDocumentListIcon fill='#0997FF' className="w-[2rem] h-[2.4rem]"/>
      </section>

      <section 
        className="cursor-pointer flex flex-row justify-center items-center 
        mt-[5%] w-[100%] h-[7vh] rounded-[8px] bg-[#0997FF]">

        <article className="shadow-sm shadow-black w-[25px] h-[25px] rounded-[8px] 
          mr-[10px] border-solid border-[#093aff] border-[1px] flex justify-center 
          items-center bg-white/30 ">

          <PlusIcon fill='white' className="w-6 h-6"/>
        </article>

        <p className="font-sans text-[1.7rem] font-medium text-white">TopUp Balance</p>
      </section>
    </div>
  );
}

export {
  Balance
}