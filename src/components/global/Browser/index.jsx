import { ReactComponent as SearchIcon } from '../assets/ico/search.svg';
import { useAppSelector } from '../../../utils/hooks/useStore';
import { useBrowserActions } from './hooks/useBrowserActions';

function Browser() {
    const browserSearch = useAppSelector(state => state.browser);
    const { setSearchText } = useBrowserActions();

    const handleOnSearch = (search) => {
        setSearchText(search);
    }

    return(
        <section className="mx-auto bg-[#F6FAFF] w[80%] max-w-[700px] lg:w-[45%] h-[60px] 
        rounded-[12px] relative">
            <SearchIcon alt="browser-icon" className="absolute m-auto top-0 bottom-0 left-[3%]"/>
            
            <input 
                className="rounded-[12px] outline-[2px] outline-[#0997FF] bg-[transparent] pl-[14%]  w-[100%] h-[100%] text-[1.4rem]" 
                type="text" 
                placeholder="Search items, collection, accounts"
                value={browserSearch}
                onChange={(event) => {
                    handleOnSearch(event.target.value)
                }}
            />
        </section>
    )
}

export {
    Browser
}