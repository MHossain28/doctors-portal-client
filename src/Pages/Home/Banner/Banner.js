import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div className="hero my-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="rounded-lg shadow-2xl lg:w-1/2 w-auto "
            alt=""
          />
          <div className="">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              We’re a consumer health marketing agency whose sole purpose is to
              build trusted brands that impact the nation’s health and
              wellbeing.
            </p>
            <Link
              to="/appoinment"
              className="btn btn-primary bg-gradient-to-r from-primary to-blue-600 text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
