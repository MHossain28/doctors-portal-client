import React, { useState } from "react";
import AbilableAppoinment from "../AbilableAppoinment/AbilableAppoinment";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";

const Appoinment = () => {
  const [selectedDate, setSlectedDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSlectedDate={setSlectedDate}
      ></AppoinmentBanner>
      <AbilableAppoinment selectedDate={selectedDate}></AbilableAppoinment>
    </div>
  );
};

export default Appoinment;
