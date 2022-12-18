import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppoinmentOptions from "./AppoinmentOptions";

const AbilableAppoinment = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appoinmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppoinmentOptions(data));
  }, []);

  return (
    <section className="mt-16">
      <p className="text-center text-xl text-primary">
        You have selected date {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-4 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appoinmentOptions.map((option) => (
          <AppoinmentOptions
            key={option._id}
            appoinmentOption={option}
            setTreatment={setTreatment}
          ></AppoinmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AbilableAppoinment;
