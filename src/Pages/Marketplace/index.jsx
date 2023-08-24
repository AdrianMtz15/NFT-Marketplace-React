import { Link } from 'react-router-dom';
import { MainLayout } from '../../Components/MainLayout';
import { Browser } from '../../Components/Browser';
import { Card } from '../../Components/Card';
import { CategoryBar } from '../../Components/CategoryBar';
import { useFilterNfts } from '../../hooks/useFilterNfts';

function Marketplace() {
  const nfts = useFilterNfts();

    return (
      <MainLayout>
        <Browser/>

        <CategoryBar/>

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
  