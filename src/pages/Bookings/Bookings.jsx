import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/Provider/AuthProvider";
import BookingTable from "./BookingTable";

function Bookings() {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
        console.log(bookings)
    },[])

    const handelDelete = id => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,{
                  method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your Oder has been deleted.",
                          icon: "success",
                        });
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                    }
                })   
          }
        });
    }
    const handelConfirm = id => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Confirmed it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method: "PATCH",
                    headers: {
                    'content-type':'application/json'
                    },
                    body: JSON.stringify({status:'Confirm'})
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                          Swal.fire({
                            title: "Confirmed!",
                            text: "Your Oder has been Confirm.",
                            icon: "success",
                          });
                          const remaining = bookings.filter(
                            (booking) => booking._id !== id
                            );
                            const updated = bookings.find(booking => booking._id === id);
                            updated.status = 'Confirm';
                            const newBooking = [updated,...remaining];
                          setBookings(newBooking);
                        }
                })   
          }
        });
    }

  return (
    <div className="my-7 bg-base-200 ">
          <BookingTable bookings={bookings} handelDelete={handelDelete} handelConfirm={ handelConfirm} />
    </div>
  );
}

export default Bookings
