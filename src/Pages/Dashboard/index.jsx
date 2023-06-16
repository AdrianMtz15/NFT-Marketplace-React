import { Browser } from "../../Components/Browser";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Card";
import { useState, useEffect } from "react";

import banner from "../../assets/img/dashboard-banner.png";
// import profilePhoto from "../../assets/img/prueba-perfil.png";

const usersPhotos = [
  "https://drive.google.com/uc?export=download&id=1kSYwUFFZf-I8A2nBdK2caihdxkMd2hjn",
  "https://drive.google.com/uc?export=download&id=1wZzvXsMPlFz871Mm1ZhzSZJgnNYiuxhC",
  "https://drive.google.com/uc?export=download&id=1Wo9fekCeppNJsKvX-nWK1kWKuEfYKAP5",
  "https://drive.google.com/uc?export=download&id=1dqtZlJnJFe-OZBhQGrNhkLWoWZoKFpx7",
  "https://drive.google.com/uc?export=download&id=162tW47YgJZaE6MOGBM_yLytzUDw5HChD"
]

const defaultItems = [
  {
    id: 1,
    title: "The Future wave #23",
    endingIn: "12h 14m 3s",
    currentBid: "0.24 BTC",
    imgSrc: "https://drive.google.com/uc?export=download&id=1taGz_RAL3M2GMVERsseUrU2YzYobDRIj",
    profile: {
      username: "",
      imgSrc: usersPhotos[2]
    }
  },
  {
    id: 2,
    title: "Astro World #244",
    endingIn: "12h 14m 3s",
    currentBid: "0.24 BTC",
    imgSrc: "https://drive.google.com/uc?export=download&id=1CPCX9e5KhmrueKv7e8i3nmghfr_jB2GE",
    profile: {
      username: "",
      imgSrc: usersPhotos[0]
    }
  },
  {
    id: 3,
    title: "Cyber Art #234",
    endingIn: "12h 14m 3s",
    currentBid: "0.24 BTC",
    imgSrc: "https://drive.google.com/uc?export=download&id=1dHewh9_BC1mH3-w6FK8yeoLYQuJMASiB",
    profile: {
      username: "",
      imgSrc: usersPhotos[4]
    }
  }
]



function Dashboard() {
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    const fetchData = async() => {
      try {
        fetch('https://fakestoreapi.com/users?limit=5')
        .then(response => response.json())
        .then(data => {
          let i = 0;
          const newItems = [...items];
          newItems.map((item) => {
            item.profile.username = data[i].username
            i++;
          })

          setItems(newItems);
          console.log(newItems);
        })
      }catch(err){
        console.log(err);
      }

    }

    fetchData();

  }, []);

  return (
    <section className="relative p-[2.5%] ml-[20vw] w-[50vw]">
      <Browser/>

      <div className="mt-[3.1vh] relative flex flex-row bg-[url('../../assets/img/banner-mask.png')] min-h-[max-content] py-[2.4vh] px-[2.6vw] w-[100%] h-[29vh] bg-[#0997FF] opacity-90 rounded-[12px]">
        <div className="z-10 w-[100%] cursor-default">
          <h1 className="font-bold text-[2.7rem] text-white leading-[3rem] w-[50%]">Discover, Collect & Create your own NFT</h1>
          <p className="text-white mt-[2vh] text-[1.2rem]">Search items, collection, accounts</p>

          <div className=" mt-[2vh]">
            <Button text='Discover Now' bgColor='white' textColor='[#0997FF]'/>
            <Button borderColor='white' text='Create your NFT' bgColor='[transparent]' textColor='white'/>
          </div>
        </div>
        <img className="absolute bottom-0 right-[1.5vw] w-[25vw]" src={banner} alt="banner" />
      </div>

    <div className="relative grid gap-[2rem] grid-cols-3 w-full h-max-h">
      {
        items.map((item) => (
          <Card key={item.id} data={item}/>
        ))
      }
    </div>


    </section>
  )
}

export { Dashboard }

