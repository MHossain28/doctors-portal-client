import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppoinmentBanner = ({ selectedDate, setSlectedDate }) => {
  return (
    <header>
      <div className="hero my-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            width="full"
            src={chair}
            className="max-w-sm  rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSlectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
