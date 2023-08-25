import { cloneElement } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


function NavItem({
  item,
}) {

  const navActive = 'text-[#0997FF] font-bold';
  const liFontSize = 'text-[16px]';

  return(
    <li className={`${liFontSize} mb-6 font-sans max-w-max`}>
        <NavLink 
          to={item.url} 
          // onClick={() => setSearchInput('')}
        >

          {({ isActive }) => {
            const icon = cloneElement(item.icon, {
              fill: isActive ? '#0997FF' : '#4D4A4A'
            })

            return(
              <div className="flex flex-row justify-start">
                {icon}
                <p 
                  id={`${item.url}-nav`} 
                  className={ `${isActive ? navActive : undefined} ml-[1vw]` }>
                    {item.title}
                </p>
              </div>
            )
          }}
        </NavLink>
    </li>
  )
}

export {
  NavItem
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};