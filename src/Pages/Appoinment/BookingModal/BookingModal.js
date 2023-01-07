import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, setTreatement, selectedDate }) => {

    const date = format(selectedDate, 'PP')

    const { name: services, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appoinmentDate: date,
            customerName: name,
            services,
            slot,
            email,
            phone
        }
        console.log(booking)
        setTreatement(null)
    }

    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-black font-bold">{services}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={date} className="input input-bordered input-primary w-full text-black font-bold" />
                        <select name='slot' className="select select-primary w-full text-black">

                            {
                                slots?.map((slot, index) => <option
                                    key={index}
                                    value={slot}>
                                    {slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-primary w-full" required />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered input-primary w-full" required />
                        <input name='phone' type="text" placeholder="Phone No" className="input input-bordered input-primary w-full" required />
                        <input type="submit" className='w-full btn btn-primary' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;