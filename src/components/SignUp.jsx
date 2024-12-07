import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
   const handleSignUp = (e) => {
    e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      createUser(email,password)
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.log("error",error.message)
      })
   }

    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;