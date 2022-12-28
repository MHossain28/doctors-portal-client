import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
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
      teratment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };
    // console.log(booking);
    fetch("https://doctor-portal-server-ashy.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.massage);
        }
      });
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
          <h3 className="text-lg text-secondary font-bold">{treatmentName}</h3>
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
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full my-4 text-center input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              disabled
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
