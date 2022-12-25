import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppoinmentOptions from "./AppoinmentOptions";

const AbilableAppoinment = ({ selectedDate }) => {
  // const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  // query set
  const {
    data: appoinmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },

    // fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
    //   (res) => res.json()
    // ),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AbilableAppoinment;
