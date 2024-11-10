import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import Navbar from "../Shared/Navbar/Navbar";

function Login() {
    const handelFromSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="text-center lg:text-left">
            <img src={image} />
          </div>
          <div className="card w-full max-w-sm shrink-0 border">
            <form onSubmit={handelFromSubmit} className="card-body">
              <h1 className="text-xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="Password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                  type="submit"
                  value="SingUp"
                />
              </div>
              <div className="text-center space-y-4 my-3">
                <p className="font-semibold">Or Sign In with</p>
                <span className="flex gap-4 justify-center text-2xl">
                  <FaGoogle />
                  <FaFacebook />
                  <FaLinkedin />
                </span>
              </div>
              <p className="text-center">
                Have an account?
                <span className="font-bold text-orange-500">
                  <Link to="/register"> Sign In</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
