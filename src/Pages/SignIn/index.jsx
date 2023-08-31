import React from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/api/firebase';

import { Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/global/MainLayout';
import { useSessionActions } from '../../utils/hooks/useSessionActions';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';

import isEmail from 'validator/lib/isEmail';

function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();
  const { sessionLogin } = useSessionActions();
  const { setKey } = useLocalStorage();

  const handleValidateInputs = () => {
    const isEmailValid = isEmail(email);

    if(!isEmailValid || email.length <= 0) {
      alert('Invalid Email');
      throw new Error('Invalid Email');
    }

    if(password.length <= 0) {
      alert('Invalid Password');
      throw new Error('Invalid Password');
    }
    
  }

  const handleSignIn = async () => {
    const username = email.substring(0, email.lastIndexOf('@'));

    try {
      handleValidateInputs();
      await signInWithEmailAndPassword(auth, email, password);
      sessionLogin(username, email, password);
      navigate('/');
      setKey('auth', {
        isAuth: true,
        user: {
          username,
          email,
          password
        }
      });
    } catch (error) {
      if(error.message == 'Firebase: Error (auth/wrong-password).' || error.message == 'Firebase: Error (auth/user-not-found).') {
        alert('Invalid Credentials');
      }
      console.error(error.message);
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

            <button 
              className='bg-[#0997FF] text-white font-bold p-3 w-full' 
              type="button"
              onClick={handleSignIn}
            >
              Login
            </button>

          <Link className='w-full' to={'/sign-up'}>
            <button 
              className='bg-white text-[#0997FF] font-bold p-3 mt-5
              border border-[#0997FF] w-full' 
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

export { SignIn }

