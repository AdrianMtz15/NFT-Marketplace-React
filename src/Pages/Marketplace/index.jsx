import { Link } from 'react-router-dom';
import { MainLayout } from '../../Components/MainLayout';
import { Browser } from '../../Components/Browser';
import { Card } from '../../Components/Card';
import { useNftsRender } from '../../hooks/useNftsRender';

function Marketplace() {
  const [nfts] = useNftsRender()

    return (
      <MainLayout>
        <Browser/>

        <div className="relative grid gap-[2rem] grid-cols-3 w-full mt-[70px]">
          {
            nfts?.map((item) => {
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
  