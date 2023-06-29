import { useContext } from "react";
import { ItemContext } from "../../Context";

function Checkout() {
  const { items } = useContext(ItemContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  const nft = items.find(obj => {
    return obj.id == index;
  });

  console.log(nft);

  return(
    <section>

    </section>
  );
}

export {
  Checkout
}