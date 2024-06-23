/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Swal from 'sweetalert2';

const BookingsTable = ({ booking, handleDelete, handleBookingsUpdate }) => {

  const { _id, customerName, date, img, service_name, email, price, status } = booking;

  
  return (
    <tr>
      <th>
        <label>
          <button onClick={() =>handleDelete(_id)} className="btn bg-orange-500">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_name}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>{customerName}
        <br />
        <span>{email}</span>
      </td>
      <td>${price}</td>
      <th>
        {
          status === 'Confirm'? <span>Confirmed</span>:
          
          <button onClick={() =>handleBookingsUpdate(_id)} className="btn bg-orange-500">Approve</button>}
      </th>
    </tr>
  );
};

export default BookingsTable;