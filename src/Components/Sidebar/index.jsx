import { ProfileBar } from "../ProfileBar";
import { Balance } from "../Balance";

function Sidebar() {
    return(
        <aside className="fixed top-0 right-0 w-[30vw] h-[max-content] min-h-[100vh] bg-[#F6FAFF] flex flex-col justify-start items-center">
            <ProfileBar/>
            <Balance className=""/>
            <div></div>
        </aside>
    )
}

export {
    Sidebar
}