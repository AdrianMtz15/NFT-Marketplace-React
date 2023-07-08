import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ItemContext } from '../../Context';
import { MainLayout } from '../../Components/MainLayout';

function SignIn() {

  const {
    user,
    setSignOut
  } = useContext(ItemContext);

  return (
    <MainLayout>
      <section 
        className='w-[50%] flex flex-col justify-center items-center m-auto
        text-[2rem] relative'>

        <h1 className='text-[2.5rem] font-bold'>Sign In</h1>
        <form className='w-full flex flex-col relative'>

            <label className='w-full flex flex-col mb-10'>
              Email
              <input
                className='bg-[#D9D9D9] focus:outline-none p-3'
                type="email"
                name="email"
                placeholder='Enter your Email'
                defaultValue={user?.email}
                // onChange={handleInputChange}
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
                // onChange={handleInputChange}
              />
            </label>

          <Link 
            className='w-full' 
            to={'/'}
            onClick={() => {
              setSignOut(false);
              return <Navigate replace to={'/'}/>
            }}
          >
            <button 
              className='bg-[#0997FF] text-white font-bold p-3 w-full' 
              type="button"
              disabled={!user?.email}
            >
              Login
            </button>
          </Link>


          <Link className='w-full' to={'/sign-up'}>
            <button 
              className='bg-white text-[#0997FF] font-bold p-3 mt-5
              border border-[#0997FF] w-full' 
              type="button"
              disabled={user?.email}
            >
                SignUp
            </button>
          </Link>

        </form>
      </section>
    </MainLayout>
  )
}

export { SignIn }

