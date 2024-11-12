import { useContext } from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../providers/Provider/AuthProvider";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const handelSignOut = () => {
    logOut().then(toast.success('Sign Out Successful')).catch();
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} className="h-20" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className="lg:flex items-center gap-3 text-xl hidden">
          <span>
            <MdOutlineShoppingBag />
          </span>
          <span>
            <CiSearch />
          </span>
        </div>
        <Link className="px-5 py-3 border border-orange-500 rounded-md text-[#FF3811] font-semibold hover:bg-orange-500 hover:text-white duration-500">
          Appointment
        </Link>
      </div>
      {user?.email ? (
        <div className="dropdown dropdown-end ms-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Profile"
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1731313842~exp=1731317442~hmac=0288e72da9ffbbe6634439cbad341f200b319713417eaba70cbacff789a3c3ca&w=740"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="py-2">
              <Link to='/bookings'>My Booking</Link>
            </li>
            <li> 
              <a className="flex justify-center bg-warning" onClick={handelSignOut}>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login">
          <button className="btn btn-primary m-3">Login</button>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
