import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../../Context";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { MainLayout } from "../../Components/MainLayout"
import { Button } from '../../Components/Button';
import profileImg from '../../assets/img/profile-img.png'


function MyAccount() {
  const {
    setSignOut
  } = useContext(ItemContext);


  return (
    <MainLayout>
      <section>
        <article>
          <img src={profileImg} alt="profile-img" />
        </article>

        <article>
          <h1>Sam Lee</h1>
          <p></p>
        </article>

      </section>

      <section
        onClick={() => {
          setSignOut(true)
        } }
        className="text-[#d74b4b] relative w-[50%]"
      >
        <Link to={'/sign-in'}>
          <Button 
            text={'SIGN-OUT'} 
            bgColor={'[#45246f]'}
          />
        </Link>


        <ArrowLeftOnRectangleIcon 
          className="absolute top-0 bottom-0 m-auto" 
          width={'25px'}
        />

      </section>
    </MainLayout>
  )
}

export { MyAccount }

