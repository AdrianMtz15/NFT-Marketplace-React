import { useContext } from 'react';
import { ItemContext } from '../../Context';

import { MainLayout } from '../../Components/MainLayout';
import { Browser } from '../../Components/Browser';
import { Card } from '../../Components/Card';

function Marketplace() {
  const {
    items
  } = useContext(ItemContext);

    return (
      <MainLayout>
        <Browser/>

        <div className="relative grid gap-[2rem] grid-cols-3 w-full mt-[70px]">
          {
            items?.map((item) => {
                return(
                  item.isInCart ? null : <Card key={item.id} item={item}/>
                )
            })
          }
        </div>
      </MainLayout>
    )
  }
  
  export { Marketplace }
  