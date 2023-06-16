import { useContext } from "react";
import { ItemContext } from "../../Context";

import { Card } from "../../Components/Card";

function Cart() {
  const itemsContext = useContext(ItemContext);

  return (
    <div className="relative grid gap-[2rem] grid-cols-3 w-full h-max-h">
      {
        itemsContext.items?.map((item) => (
          item.isInCart ? <Card key={item.id} data={item}/> : null
        ))
      }
    </div>
  )
}

export { Cart }

