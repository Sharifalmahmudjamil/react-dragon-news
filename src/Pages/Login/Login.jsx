import { Link } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";


const Login = () => {

    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        console.log(form.get("password"))
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