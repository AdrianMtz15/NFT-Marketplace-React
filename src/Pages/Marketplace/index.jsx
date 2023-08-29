import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/global/MainLayout';
import { Browser } from '../../components/global/Browser';
import { Card } from '../../components/nfts/components/Card';
import { CategoryBar } from '../../components/categories/components/CategoryBar';
import { useFilterNfts } from '../../components/nfts/hooks/useFilterNfts';

function Marketplace() {
  const nfts = useFilterNfts();

    return (
      <MainLayout>
        <Browser/>

        <CategoryBar/>

        <div className="relative w-full mt-[70px] flex flex-row justify-center flex-wrap">
          {
            nfts?.map((item) => {
              return(
                <Link key={item.id} to={'/marketplace/checkout/' + item.id} >
                  <div className='w-[200px] p-3'>
                    <Card item={item}/>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </MainLayout>
    )
  }
  
  export { Marketplace }
  