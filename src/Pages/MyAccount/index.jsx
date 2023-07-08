import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "../../Context";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { MainLayout } from "../../Components/MainLayout"
import { Button } from '../../Components/Button';
import profileImg from '../../assets/img/profile-img.png'


function MyAccount() {
  const [editActive, setEditActive] = useState(false);

  const {
    setSignOut,
    user,
    form,
    createAccount
  } = useContext(ItemContext);


  return (
    <MainLayout>
      <section 
        className={`flex flex-row w-[80%] justify-evenly items-center
        ${editActive && 'hidden'}`}>

        <article>
          <img src={profileImg} alt="profile-img" />
        </article>

        <article className="text-[2rem]">
          <h1 className="">{user?.name}</h1>
          <p>{user?.email}</p>
        </article>
      </section>

      <section
        className={`text-[#0997FF] relative w-[50%] mt-10 m-auto
        ${editActive && 'hidden'}`}
        onClick={() => {
          setEditActive(true);
        }}
      >

        <Button 
          text={'Edit Account'} 
          bgColor={'[#45246f]'}
        />

        <PencilSquareIcon 
          className="absolute top-0 bottom-0 left-3 m-auto" 
          width={'25px'}
        />
      </section>

      <section
        onClick={() => {
          setSignOut(true)
        }}
        className={`text-[#d74b4b] relative w-[50%] mt-10 m-auto
        ${editActive && 'hidden'}`}
      >

        <Link to={'/sign-in'}>
          <Button 
            text={'SIGN-OUT'} 
            bgColor={'[#45246f]'}
          />
        </Link>

        <ArrowLeftOnRectangleIcon 
          className="absolute top-0 bottom-0 left-3 m-auto" 
          width={'25px'}
        />

      </section>

      <section 
        className={`w-[50%] flex flex-col justify-center items-center m-auto
        text-[2rem] ${!editActive && 'hidden'}`}
      >

        <h1 className='text-[2.5rem] font-bold'>Edit Account</h1>

        <form 
          className='w-full flex flex-col'
          ref={form}
        >

          <label className='w-full flex flex-col mb-10'>
            Name
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="text"
              name="name"
              placeholder='Enter your Name'
              defaultValue={user?.name}
            />
          </label>

          <label className='w-full flex flex-col mb-10'>
            Email
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="email"
              name="email"
              placeholder='Enter your Email'
              defaultValue={user?.email}
            />
          </label>

          <label className='w-full flex flex-col mb-10'>
            Password
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="password"
              name="password"
              placeholder='Enter your Password'
              defaultValue={user?.password}
            />
          </label>

          <Link 
            to={'/'}
            className='w-full'
            onClick={createAccount}
          >
            <button 
              className='bg-[#0997FF] text-white font-bold p-3 mt-5 w-full' 
              type="button"
            >
                Edit
            </button>
          </Link>

        </form>
      </section>
    </MainLayout>
  )
}

export { MyAccount }

