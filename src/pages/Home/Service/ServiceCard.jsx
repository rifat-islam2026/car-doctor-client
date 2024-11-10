import { FiArrowRight } from "react-icons/fi";

function ServiceCard({ service }) {
    const { title, img, price } = service;
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
        </div>
      </div>
    </div>
  );
}

export default ServiceCard
