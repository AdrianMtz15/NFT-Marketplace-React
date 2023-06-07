import { NavLink } from "react-router-dom"

function Header() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        Shopi
                    </NavLink>
                    <NavLink to={'/'}>
                        All
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}