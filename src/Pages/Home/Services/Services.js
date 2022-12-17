import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitenting from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "The process of filling cavities is a fairly simple and straightforward one that can be done right at your dentist's office.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "While there may sometimes be side effects, whitening treatment is safe on tooth enamel.",
      img: whitenting,
    },
  ];

  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold">OUR SERVICES</h3>
        <h2 className="text-3xl ">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
