import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { Button } from "../../components/global/Button";
import { CheckoutItem } from "../../components/nfts/components/CheckoutItem";
import { MainLayout } from '../../components/global/MainLayout';
import { SellerLabel } from "../../components/users/components/SellerLabel";
import { useAppSelector } from "../../utils/hooks/useStore";

import "./index.css"

function Checkout() {
  const navigate = useNavigate();
  const isAuth = useAppSelector(state => state.session.isAuth);
  const nfts = useAppSelector((state) => state.nfts.allNfts);
  const [nftInCart, setNftInCart] = React.useState(null);

  React.useEffect(() => {
    const currentPath = window.location.hash;
    const index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    const nft = nfts.find(obj => {
      return obj.id === index
    });


    setNftInCart(nft);
  }, [nfts]);

  const handleBuy = () => {
    if(!isAuth) {
      return navigate('/sign-in');
    }
  }


  return(
    <MainLayout>
      <section className="flex flex-row items-center">
        <Link to={'/marketplace'}>
          <ArrowLeftOnRectangleIcon 
            width={'30px'} 
            height={'30px'} 
            className="hover:cursor-pointer"/>
        </Link>
      </section>


      <section 
        className="w-full relative flex flex-col justify-between 
        bg-[#F6FAFF] px-7 pt-[10%] pb-7 border border-[#D9D9D9]
        rounded-[12px] mt-10"
      >
        <h3 
          className="absolute top-0 right-0 left-0 w-full bg-white h-[50px]
          text-[2rem] font-bold text-center rounded-t-[12px] text-[#0997FF]
          flex items-center justify-center">
          {nftInCart && nftInCart.title}
        </h3>

        <article className=" w-full flex flex-row justify-between mb-[5%] flex-wrap">

          <div id="desc-container" className="flex relative justify-between flex-col w-[100%] min-w-[200px] order-1">
            <h3 className="text-[1.8rem] font-bold">Description</h3>

            <p className="text-[1.5rem] max-h-[170px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, nesciunt! Quibusdam quisquam maiores quis asperiores porro.
            </p>

            <div className="relative bottom-0 right-0 left-0 w-full mt-3">
              {nftInCart && <SellerLabel sellerData={nftInCart.user}/>}
            </div>
          </div>

          <div id="nft-container" className="w-[100%] min-w-[220px] order-2">
            { nftInCart ? <CheckoutItem item={nftInCart}/> : null }
          </div>

        </article>

        <article onClick={handleBuy}>
          <Button
            text="BUY NOW"
            textColor={"white"}
            bgColor={"[#0997FF]"}
            // borderColor={}
          />
        </article>

      </section>
     
    </MainLayout>
  );
}

export {
  Checkout
}