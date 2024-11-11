import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

function Service() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-7">
      <div className="text-center space-y-3 py-5">
        <h3 className="text-xl font-semibold text-orange-500">Service</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 lg:p-0 md:p-5">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Service;
