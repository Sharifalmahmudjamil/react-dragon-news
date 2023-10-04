import { Link } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

  const {createUser}= useContext(AuthContext);


    const handleRegister=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email= form.get("email");
        const name= form.get("name");
        const photo= form.get("photo");
        const password= form.get("password");
        console.log(email,password,name,photo);


      // create user
      createUser(email,password)
      .then(result =>{
        console.log(result.user);
      })
      .catch(error => console.error(error));


    }
    return (
        <div>
             <Navbar></Navbar>
            
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:w-1/2 ">
        <h2 className="text-4xl font-semibold">Register your account</h2>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form onSubmit={handleRegister} className="card-body w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter your PhotoUrl" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Register</button>
        </div>
      </form>
      <p className="text-center mb-8">Already  Have An Account ? <Link className="text-pink-600 font-bold" to="/login">Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;