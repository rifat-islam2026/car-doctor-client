import { Outlet } from "react-router-dom"
import Footer from "../../pages/Shared/Footer/Footer"
import Navbar from "../../pages/Shared/Navbar/Navbar"

function Root() {
  return (
      <div className="max-w-6xl mx-auto">
          <Navbar />
          <Outlet />
          <Footer />
    </div>
  )
}

export default Root
