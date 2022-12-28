import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = "7165b942572d34bddac88edb61b9202a";

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-portal-server-ashy.vercel.app/appoinmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          //   save doc info to db
          fetch("https://doctor-portal-server-ashy.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96">
      <h3 className="text-3xl">Add A Doctor</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        {/* name  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Your name" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p role="alert" className="text-red-600">
              {errors.name?.message}
            </p>
          )}
        </div>
        {/* email  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Please inter your email" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p role="alert" className="text-red-600">
              {errors.email?.message}
            </p>
          )}
        </div>
        {/* Speciality */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered select-ghost w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

        {/* uplode doctor img  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is Requird" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && (
            <p role="alert" className="text-red-600">
              {errors.img?.message}
            </p>
          )}
        </div>

        <input
          className="btn mt-3 btn-primary text-white w-full"
          value="ADD DOCTOR"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
