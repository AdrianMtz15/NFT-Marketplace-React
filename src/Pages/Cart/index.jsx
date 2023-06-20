import { useContext } from "react";
import { ItemContext } from "../../Context";

import { Card } from "../../Components/Card";

function Cart() {
  const itemsContext = useContext(ItemContext);

  return (
    <div className="relative p-[2.5%] ml-[20vw] w-[50vw]">
      <div className="relative grid gap-[2rem] grid-cols-3 w-full h-max-h">
        {
          itemsContext.items?.map((item) => (
            item.isInCart ? <Card key={item.id} item={item}/> : null
          ))
        }
      </div>
    </div>
  )
}

export { Cart }

