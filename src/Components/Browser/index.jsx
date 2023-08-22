import { ReactComponent as SearchIcon } from '../../assets/ico/search.svg';
import { useAppSelector } from '../../hooks/store';
import { useBrowserActions } from '../../hooks/useBrowserActions';
import { useFilterNfts } from '../../hooks/useFilterNfts';
import { useNftsActions } from '../../hooks/useNftsActions';
import { useNftsRender } from '../../hooks/useNftsRender';

function Browser() {
    const browserSearch = useAppSelector(state => state.browser);
    const [nfts] = useNftsRender();

    const { setFilterNftsState } = useNftsActions();
    const { filterByTitle } = useFilterNfts();
    const { setSearchText } = useBrowserActions();

    const handleOnSearch = (search) => {
        if(search.length > 0) {
            const filteredNfts = filterByTitle(search, nfts);
            setFilterNftsState(filteredNfts);
        } else {
            setFilterNftsState([]);
        }
        setSearchText(search);
    }

    return(
        <section className="ml-[15%] bg-[#F6FAFF] w-[45%] h-[40px] rounded-[12px] relative">
            <SearchIcon alt="browser-icon" className="absolute m-auto top-0 bottom-0 left-[3%]"/>
            
            <input 
                className=" rounded-[12px] outline-[2px] outline-[#0997FF] 
                    bg-[transparent] pl-[14%]  w-[100%] h-[100%] text-[1.4rem]" 
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