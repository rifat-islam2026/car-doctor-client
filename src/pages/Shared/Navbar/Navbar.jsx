import { CiSearch } from "react-icons/ci"
import { MdOutlineShoppingBag } from "react-icons/md"
import { Link } from "react-router-dom"
import logo from "../../../assets/logo.svg"

function Navbar() {
    const links = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </>
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
                          stroke="currentColor">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                  </div>
                  <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
                      {links}
                  </ul>
              </div>
              <Link to="/">
                  <img src={logo} className="h-20" />
              </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-semibold">
                  {links}
              </ul>
          </div>
          <div className="navbar-end space-x-2">
              <div className="lg:flex items-center gap-3 text-xl hidden">
                  <span><MdOutlineShoppingBag /></span>
                  <span><CiSearch /></span>
              </div>
              <Link className="px-5 py-3 border border-orange-500 rounded-md text-[#FF3811] font-semibold hover:bg-orange-500 hover:text-white duration-500">Appointment</Link>
          </div>
          <div className="dropdown dropdown-end ms-2">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                      <img
                          alt="Tailwind CSS Navbar component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
              </div>
              <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                      <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                      </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
              </ul>
          </div>
      </div>
  )
}

export default Navbar
