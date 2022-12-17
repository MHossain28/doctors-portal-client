import React from "react";
import tritment from "../../../assets/images/treatment.png";

const ExceptionalBanner = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={tritment} alt="Album" className="" />
        </figure>
        <div className="card-body ms-5">
          <h2 className="card-title text-3xl">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-blue-300 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalBanner;
