import PropTypes from 'prop-types';
import { createContext } from "react";

const CartContext = createContext();

function CartProvider({children}) {
  return(
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export {
  CartProvider
}