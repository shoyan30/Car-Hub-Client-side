import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const CheckOut = () => {
    const services = useLoaderData()
    const {_id, title, img, price } = services;
    const {user} = useContext(AuthContext)

    const handleBookingService = event =>{
        event.preventDefault
        const form = event.target
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;

        // console.log(name, date, phone, email);

        const booking={
            customerName: name, date, phone, email, img, service_name:title, service_id:_id, price, 
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div className="bg-base-200">

            <form onSubmit={handleBookingService} className="card-body">
                <h2 className="text-center text-3xl font-bold">Service Name: {title}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 gap-6'>
                    <div className="form-control">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="Date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="phone" id="phone" placeholder="Your Phone" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <input type="email" name="email" id="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />

                    </div>
                </div>

                <div className="form-control mt-2">
                    <textarea className="rounded-md p-1.5 h-[200px] input input-bordered" name="message" id="message" placeholder="Your Message"></textarea>
                </div>
                <input className="btn bg-red-500 mt-4 text-white font-si" type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default CheckOut;