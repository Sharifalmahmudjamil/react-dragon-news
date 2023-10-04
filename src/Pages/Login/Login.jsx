import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

  const {signIn}= useContext(AuthContext);
  const location = useLocation();
  const naviGate=useNavigate();
 

    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email= form.get("email");
        const password= form.get("password");
        console.log(email,password);

        // signIn
        signIn(email,password)
        .then(result=>{
          console.log(result.user);

            // Navigate after login
            naviGate(location?.state ?location.state :"/");

        })
        .catch(error =>{
          console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:w-1/2 ">
        <h2 className="text-4xl font-semibold">Login your account </h2>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form onSubmit={handleLogin} className="card-body w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mb-8">Do not Have An Account ? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;