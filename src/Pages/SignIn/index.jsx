import React from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/api/firebase';

import { Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/global/MainLayout';
import { useSessionActions } from '../../utils/hooks/useSessionActions';

function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();
  const { sessionLogin } = useSessionActions();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      sessionLogin(email, password);
      navigate('/');
    } catch (error) {
      console.error('Error al logear usuario', error);
    }
  }

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
                defaultValue={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label className='w-full flex flex-col mb-10'>
              Password
              <input
                className='bg-[#D9D9D9] focus:outline-none p-3'
                type="password"
                name="password"
                placeholder='Enter your Password'
                defaultValue={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

          {/* <Link 
            className='w-full' 
            to={'/'}
            onClick={() => {
              // setSignOut(false);
              return <Navigate replace to={'/'}/>
            }}
          > */}
            <button 
              className='bg-[#0997FF] text-white font-bold p-3 w-full' 
              type="button"
              onClick={handleSignIn}
            >
              Login
            </button>
          {/* </Link> */}


          <Link className='w-full' to={'/sign-up'}>
            <button 
              className='bg-white text-[#0997FF] font-bold p-3 mt-5
              border border-[#0997FF] w-full' 
              type="button"
              // disabled={user?.email}
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

