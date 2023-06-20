import { ProfileBar } from "../ProfileBar"

function Sidebar() {
    return(
        <aside className="fixed top-0 right-0 w-[30vw] h-[max-content] min-h-[100vh] bg-[#F6FAFF]">
            <ProfileBar/>
            <div></div>
            <div></div>
        </aside>
    )
}

export {
    Sidebar
}