
function Balance() {
  return(
    <div className="relative w-[24vw] bg-white min-h-[30vh] h-[max-content] rounded-[12px] mt-[4.2vh] p-[7%]">
      <p className="font-sans text-[1.6rem] font-medium text-[#1B1A1E] cursor-default">Your Balance</p>
      <h2 className="font-bold text-[3.5rem] text-[#1B1A1E] cursor-default">$350,000.20</h2>

      <section className="flex flex-row items-center justify-start cursor-default">
        <p className="font-sans text-[1.4rem] font-medium text-[#C4C4C4] mr-[15px]">Total Offers</p>
        <p className="font-sans text-[1.4rem] font-medium text-[#130F26] mr-[5px]">USD 158,000</p>
        <p className="font-sans text-[1.4rem] font-medium text-[#73C255]">(59.11%)</p>
      </section>

      <section className="flex flex-row items-center justify-start cursor-pointer mt-[10%]">
        <p className="font-sans text-[1.4rem] font-medium text-[#C4C4C4]">sdfgcghjhkb21687udwhjknscnkjkj....</p>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0997FF" className="w-[2rem] h-[2.4rem]">
          <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </section>

      <section className="cursor-pointer flex flex-row justify-center items-center mt-[5%] w-[100%] h-[7vh] rounded-[8px] bg-[#0997FF]">
        <article className="shadow-sm shadow-black w-[25px] h-[25px] rounded-[8px] mr-[10px] border-solid border-[#093aff] border-[1px] flex justify-center items-center bg-white/30 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        </article>

        <p className="font-sans text-[1.7rem] font-medium text-white">TopUp Balance</p>
      </section>
    </div>
  );
}

export {
  Balance
}