import About from "../About/About"
import Slider from "../Banner/Slider"
import Service from "../Service/Service"

function Home() {
  return (
    <div>
          {/* Banner */}
          <Slider />
          {/* About */}
          <About />
          {/* Service */}
          <Service/>
    </div>
  )
}

export default Home
