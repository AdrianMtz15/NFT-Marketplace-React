import { ProfileBar } from "../ProfileBar";
import { Balance } from "../../users/components/Balance";
import { TopSellers } from "../../users/components/TopSellers";

function Sidebar() {
    return(
        <aside 
            className="shadow border-solid border-[#D9D9D9] border-l 
            overflow-auto fixed top-[10vh] right-0 h-[90vh] w-[30vw] bg-[#F6FAFF] 
            flex flex-col justify-start items-center pb-[30px]">
            <ProfileBar/>
            <Balance/>
            <TopSellers/>
        </aside>
    )
}

export {
    Sidebar
}