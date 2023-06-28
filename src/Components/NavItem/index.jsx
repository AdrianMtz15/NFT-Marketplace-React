import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

function NavItem({
  children,
  navTitle,
  navUrl
}) {
  const navActive = 'text-[#0997FF] font-bold';
  const liFontSize = 'text-[16px]';

  return(
    <li className={`${liFontSize} mb-6 font-sans max-w-max`}>
        <NavLink 
          to={navUrl} 
          className={({isActive}) => isActive ? navActive : undefined}
        >

          <div className="flex flex-row justify-start">
              {children}
              <p className="ml-[1vw]">{navTitle}</p>
          </div>
        </NavLink>
    </li>
  )
}

export {
  NavItem
}

NavItem.propTypes = {
  children: PropTypes.element.isRequired,
  navTitle: PropTypes.string.isRequired,
  navUrl: PropTypes.string.isRequired,
};