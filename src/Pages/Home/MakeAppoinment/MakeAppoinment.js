import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appoinment from "../../../assets/images/appointment.png";

const MakeAppoinment = () => {
  return (
    <section
      className="text-white mt-32"
      style={{
        background: `url(${appoinment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className="lg:w-1/2 rounded-lg hidden lg:block shadow-2xl -mt-32"
          />
          <div>
            <h4 className="text-bold text-primary text-lg">Appoinment</h4>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-blue-600 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
