import { Link, useNavigate } from "react-router-dom";

import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { MainLayout } from "../../components/global/MainLayout"
import { Button } from '../../components/global/Button';
import { useAppSelector } from "../../utils/hooks/useStore";
import { useSessionActions } from "../../utils/hooks/useSessionActions";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

function MyAccount() {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.session.user);

  const { sessionLogout } = useSessionActions();
  const { setKey } = useLocalStorage();

  const handleLogout = () => {
    sessionLogout();
    setKey('auth', {
      isAuth: false,
      user: null
    });
    navigate('/sign-in');
  }

  return (
    <MainLayout>
      <section 
        className={`flex flex-row w-[80%] justify-evenly items-center`}>

        <article>
          <img 
            src='https://firebasestorage.googleapis.com/v0/b/nft-marketplace-94b84.appspot.com/o/users-photos%2FEllipse%204.png?alt=media&token=853964c0-4bf2-4e58-9c60-e17a08448003'
            alt="profile-img" 
          />
        </article>

        <article className="text-[2rem]">
          <h1 className="">{user?.username}</h1>
          <p>{user?.email}</p>
        </article>
      </section>

      {/* <section
        className={`text-[#0997FF] relative w-[50%] mt-10 m-auto`}
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
      </section> */}

      <section
        onClick={handleLogout}
        className={`text-[#d74b4b] relative w-[50%] mt-10 m-auto`}
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

      {/* <section 
        className={`w-[50%] flex flex-col justify-center items-center m-auto
        text-[2rem] ${!editActive && 'hidden'}`}
      >

        <h1 className='text-[2.5rem] font-bold'>Edit Account</h1>

        <form 
          className='w-full flex flex-col'
        >

          <label className='w-full flex flex-col mb-10'>
            Username
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="text"
              name="username"
              placeholder='Enter your Username'
              defaultValue={user.username}
              onChange={(e) => {
                const newData = {
                  ...editData,
                  username: e.target.value
                }

                setEditData(newData);
              }}
            />
          </label>

          <label className='w-full flex flex-col mb-10'>
            Email
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="email"
              name="email"
              placeholder='Enter your Email'
              defaultValue={editData.email}
              onChange={(e) => {
                const newData = {
                  ...editData,
                  email: e.target.value
                }

                setEditData(newData);
              }}
            />
          </label>

          <label className='w-full flex flex-col mb-10'>
            Password
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="password"
              name="password"
              placeholder='Enter your Password'
              defaultValue={editData.password}
              onChange={(e) => {
                const newData = {
                  ...editData,
                  password: e.target.value
                }

                setEditData(newData);
              }}
            />
          </label>

          <section 
            className='w-full'
          >
            <button 
              className='bg-[#0997FF] text-white font-bold p-3 mt-5 w-full' 
              type="button"
              onClick={handleEdit}
            >
                Edit
            </button>
          </section>

        </form>
      </section> */}
    </MainLayout>
  )
}

export { MyAccount }

