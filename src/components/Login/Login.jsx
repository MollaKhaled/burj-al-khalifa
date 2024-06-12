import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProviders';
import { BsGoogle } from "react-icons/bs";


const auth = getAuth();

const Login = () => {
  const emailRef = useRef()
const {login, googleLogin} = useContext(AuthContext)
  const handleOnLogin =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
   
    login(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset('');
    })
    .catch(error =>{
      console.log(error);
    })
  }
  const handleGoogleLogIn = () =>{
     googleLogin()
     .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
     })
     .catch(error => {
      console.log(error);
     })
  }
  const handleResetPassword =()=>{
    const email = emailRef.current.value;
    if(!email){
      alert('PLease provide your email address to reset password')
      return;
    }
    sendPasswordResetEmail(auth, email)
    .then(()=>{
     alert('Please check your email')
    })
    .catch(error =>{
      console.log(error);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1> 
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleOnLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" ref={emailRef} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <button onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password? </button>
          </label>
          <label className="label">
            <p><small>New to this website?Please </small><Link to='/register' className="label-text-alt link link-hover">Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       
      </form>
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogIn} className="btn btn-active btn-link"><BsGoogle />  </button>
          </div>
        
     
    </div>
  </div>
</div>
  );
};

export default Login;