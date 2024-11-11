import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function ServiceCard({ service }) {
    const { title, img, price,_id } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow border rounded-md">
        <figure className="px-7 pt-7">
          <img src={img} alt="Services" className="rounded-md h-[190px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions text-orange-500 flex justify-between items-center">
            <p className="font-bold">$Price:$ {price}</p>
            <span className="text-xl">
              <FiArrowRight />
            </span>
          </div>
          <Link to={`/checkOut/${_id}`}> 
          <button className="py-2 w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold ">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard
