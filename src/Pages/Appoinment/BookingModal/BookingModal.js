import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  // Booking Handle
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appoinmentDate: date,
      teratment: name,
      patient: name,
      slot,
      email,
      phone,
    };

    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-secondary font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="text-center my-3">
            <input
              type="text"
              value={date}
              disabled
              className="input w-full my-4 text-center input-bordered"
            />
            <select
              name="slot"
              className="select select-bordered w-full text-center"
            >
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full my-4 text-center input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full my-4 text-center input-bordered"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone Number"
              className="input w-full my-4 text-center input-bordered"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn w-full btn-primary rounded py-2 text-bold text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
