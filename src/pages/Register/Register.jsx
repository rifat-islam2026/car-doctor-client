import { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

function Register() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
        const handelFromSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          // console.log(name,email, password);
          createUser(email,password)
            .then(result => {
              console.log(result.user)
              toast.success('Register Successful')
              navigate('/login')
            })
            .catch(err => {
              console.log(err.message)
              toast.error(err?.message)
          })
        };
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
              <h1 className="text-xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                  type="submit"
                  value="SingIn"
                />
              </div>
              <div className="text-center space-y-4 my-3">
                <p className="font-semibold">Or Sign Up with</p>
                <span className="flex gap-4 justify-center text-2xl">
                  <FaGoogle />
                  <FaFacebook />
                  <FaLinkedin />
                </span>
              </div>
              <p className="text-center">
                Already have an account?
                <span className="font-bold text-orange-500">
                  <Link to="/login"> Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register
