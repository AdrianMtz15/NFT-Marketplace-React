import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../Context';

import { MainLayout } from '../../Components/MainLayout';
import { Browser } from '../../Components/Browser';
import { Card } from '../../Components/Card';

function Marketplace() {
  const {
    renderItems
  } = useContext(ItemContext);

    return (
      <MainLayout>
        <Browser/>

        <div className="relative grid gap-[2rem] grid-cols-3 w-full mt-[70px]">
          {
            renderItems()?.map((item) => {
                return(
                  <Link key={item.id} to={'/marketplace/checkout/' + item.id} >
                    <Card item={item}/>
                  </Link>
                )
            })
          }
        </div>
      </MainLayout>
    )
  }
  
  export { Marketplace }
  