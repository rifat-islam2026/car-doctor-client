import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Provider/AuthProvider";
import CheckOutBanner from "../Shared/CheckOutBanner/CheckOutBanner";

function CheckOut() {
     const [startDate, setStartDate] = useState(new Date());
  const services = useLoaderData();
  const { _id, title, price, img } = services;

  const { user } = useContext(AuthContext);

  const handelFromSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = new Date(startDate).toLocaleDateString();
    const phone = form.phone.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      date,
      phone,
      img: img,
      services_id: _id,
      service: title,
      price: parseFloat(price),
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
    .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                toast.success('Services Booking Successful')
            }
    })
  };
  return (
    <div>
      <CheckOutBanner text="Check Out" />
      <div className="bg-base-200 rounded-lg my-20">
        <h2 className="text-3xl font-bold text-center pt-5">
          Services: {title}
        </h2>
        <form onSubmit={handelFromSubmit} className="card-body">
          <div>
            <div className="lg:flex gap-7">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                              <DatePicker
                                  className="input input-bordered w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="lg:flex gap-7">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Your Phone</span>
                </label>
                <input
                  name="phone"
                  type="phone"
                  placeholder="Your Phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="from-control mt-6">
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold"
              type="submit"
              value="Oder Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;
