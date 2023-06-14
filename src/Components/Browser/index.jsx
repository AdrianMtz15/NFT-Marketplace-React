import { ReactComponent as SearchIcon } from '../../assets/ico/search.svg'

function Browser() {
    return(
        <section className="ml-[15%] bg-[#F6FAFF] w-[45%] h-[40px] rounded-[12px] relative">
            <SearchIcon alt="browser-icon" className="absolute m-auto top-0 bottom-0 left-[3%]"/>
            <input className=" rounded-[12px] outline-[2px] outline-[#0997FF] bg-[transparent] pl-[14%]  w-[100%] h-[100%] text-[1.4rem]" type="text" placeholder="Search items, collection, accounts"/>
        </section>
    )
}

export {
    Browser
}