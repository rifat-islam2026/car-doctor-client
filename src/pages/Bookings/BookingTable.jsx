
function BookingTable({ bookings, handelDelete, handelConfirm }) {
  return (
    <div>
      <div className="overflow-x-auto p-10">
        <h1 className="text-lg font-bold mb-3">Booking :{bookings.length}</h1>
        <table className="table shadow-lg">
          {/* head */}
          <thead>
            <tr className="bg-gray-900 text-white">
              <th></th>
              <th></th>
              <th>Customer Name</th>
              <th>@Email</th>
              <th>Service</th>
              <th>Price</th>
              <th>Phone</th>
              <th>date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => (
              <tr className="bg-base-100 hover" key={book._id}>
                <th>
                  <button
                    onClick={() => handelDelete(book._id)}
                    className="rounded-full p-1 bg-stone-600 hover:bg-red-600 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <th>
                  <img src={book.img} className="w-20 rounded-md" />
                </th>
                <td>{book.customerName}</td>
                <td>{book.email}</td>
                <td>{book.service}</td>
                <td>
                  <strong>$</strong> {book.price}
                </td>
                <td>{book.phone}</td>
                <td>{book.date}</td>
                <td>
                  {book.status === 'Confirm'? (
                    <button className="btn btn-xs btn-disabled text-success">Confirmed</button>
                  ) : (
                    <button
                      onClick={() => handelConfirm(book._id)}
                      className="btn btn-xs btn-info"
                    >
                      Please Confirm
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingTable
