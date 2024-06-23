/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingsTable from './BookingsTable';
import Swal from 'sweetalert2';
import axios from 'axios';

const Bookings = () => {

  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])

  const url = `http://localhost:5000/bookings?email=${user?.email}`

  useEffect(() => {

    axios.get(url, {withCredentials:true})
    .then(res =>{
      setBookings(res.data)
    })
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     setBookings(data)
    //   })
  }, [url])

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Delete this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => console.log(data))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",

        });
        const remaining = bookings.filter(booking => booking._id !== id)
        setBookings(remaining)
      }
    });
  }

  const handleBookingsUpdate = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'Confirm'})
    })
    .then(res =>res.json())
    .then(data =>{
      if (data.modifiedCount >0){
        const remaining = bookings.filter(booking => booking._id !== id)
        const updated = bookings.find(booking =>booking._id === id)
        updated.status='Confirm'
        const newBookings = [updated, ...remaining]
        setBookings(newBookings);
      }
    })
  }
  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl text-center font-bold mb-8">All Your Bookings</h2>
      <table className="table">
        {/* head */}
        {/* <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead> */}
        <tbody>
          {
            bookings.map(booking => <BookingsTable

              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingsUpdate={handleBookingsUpdate}
            ></BookingsTable>)
          }
        </tbody>



      </table>
    </div>
  );
};

export default Bookings;