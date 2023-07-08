import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../Context';
import { MainLayout } from '../../Components/MainLayout';

function SignUp() {

  const {
    form,
    createAccount
  } = useContext(ItemContext);

  return (
    <MainLayout>
      <section 
        className='w-[50%] flex flex-col justify-center items-center m-auto
        text-[2rem]'
      >

        <h1 className='text-[2.5rem] font-bold'>Create Account</h1>

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
              // value={formData.name}
              // onChange={handleInputChange}
            />
          </label>

          <label className='w-full flex flex-col mb-10'>
            Email
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="email"
              name="email"
              placeholder='Enter your Email'
              // value={formData.name}
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
              // value={formData.email}
              // onChange={handleInputChange}
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
                SignUp
            </button>
          </Link>

        </form>
      </section>
    </MainLayout>
  )
}

export { SignUp }

