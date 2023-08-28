import React from 'react';

import { auth } from '../../utils/api/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/global/MainLayout';

function SignUp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar usuario', error);
    }
  }

  return (
    <MainLayout>
       <section 
        className='w-[50%] flex flex-col justify-center items-center m-auto
        text-[2rem]'
      >

        <h1 className='text-[2.5rem] font-bold'>Create Account</h1>

        <form 
          className='w-full flex flex-col'
          // ref={form}
        >

          <label className='w-full flex flex-col mb-10'>
            Email
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="text"
              name="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          {/* <label className='w-full flex flex-col mb-10'>
            Email
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="email"
              name="email"
              placeholder='Enter your Email'
              // value={formData.name}
              // onChange={handleInputChange}
            />
          </label> */}

          <label className='w-full flex flex-col mb-10'>
            Password
            <input
              className='bg-[#D9D9D9] focus:outline-none p-3'
              type="password"
              name="password"
              placeholder='Enter your Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <Link 
            to={'/'}
            className='w-full'
            // onClick={createAccount}
          >
            <button 
              className='bg-[#0997FF] text-white font-bold p-3 mt-5 w-full' 
              type="button"
              onClick={handleSignUp}
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

