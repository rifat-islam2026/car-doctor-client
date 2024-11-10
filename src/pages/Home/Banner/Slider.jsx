import slider1 from "../../../assets/images/banner/1.jpg";
import slider2 from "../../../assets/images/banner/2.jpg";
import slider3 from "../../../assets/images/banner/3.jpg";
import slider4 from "../../../assets/images/banner/4.jpg";

function Slider() {
  return (
    <div className="carousel w-full h-[600px] my-7">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full" />
        <div className="absolute flex items-center ps-10 h-full left-0 right-5 w-1/2 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-5 text-white">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-5 -translate-y-1/2 transform">
          <a href="#slide4" className="btn btn-circle hover:bg-orange-500">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:bg-orange-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full" />
        <div className="absolute flex items-center ps-10 h-full left-0 right-5 w-1/2 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-5 text-white">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-5 -translate-y-1/2 transform">
          <a href="#slide1" className="btn btn-circle hover:bg-orange-500">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-orange-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full" />
        <div className="absolute flex items-center ps-10 h-full left-0 right-5 w-1/2 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-5 text-white">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-5 -translate-y-1/2 transform">
          <a href="#slide2" className="btn btn-circle hover:bg-orange-500">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-orange-500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full" />
        <div className="absolute flex items-center ps-10 h-full left-0 right-5 w-1/2 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-5 text-white">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex justify-end gap-5 -translate-y-1/2 transform">
          <a href="#slide3" className="btn btn-circle hover:bg-orange-500">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-orange-500">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
