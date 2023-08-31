import React from 'react';

import { auth } from '../../utils/api/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

import { MainLayout } from '../../components/global/MainLayout';
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

import isEmail from 'validator/lib/isEmail';
import { Link, useNavigate } from 'react-router-dom';


function SignUp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleValidateInputs = () => {
    const isEmailValid = isEmail(email);

    if(!isEmailValid || email.length <= 0) {
      alert('Invalid Email');
      throw new Error('Invalid Email');
    }

    if(password.length <= 5) {
      alert('Invalid Password: at least 6 characters');
      throw new Error('Invalid Password');
    }
  }

  const handleSignUp = async () => {
    try {
      handleValidateInputs();
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      console.log('Usuario registrado exitosamente');
    } catch (error) {
      if(error.message == 'Firebase: Error (auth/email-already-in-use).') {
        alert('Email already used');
      }
      console.error(error);
    }
  }

  return (
    <MainLayout>
       <section 
        className='w-[50%] flex flex-col justify-center items-center m-auto
        text-[2rem] mt-[5rem]'
      >
        <Link className="absolute flex flex-row top-[10rem] lg:top-[5rem] left-5" to={'/sign-in'}>
          <ArrowLeftOnRectangleIcon 
            width={'30px'} 
            height={'30px'} 
            className="hover:cursor-pointer"/>
        </Link>

        <h1 className='text-[2.5rem] font-bold'>Create Account</h1>

        <form className='w-full flex flex-col'>

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

          <button 
            className='bg-[#0997FF] text-white font-bold p-3 mt-5 w-full' 
            type="button"
            onClick={handleSignUp}
          >
              SignUp
          </button>

        </form>
      </section> 
    </MainLayout>
  )
}

export { SignUp }

