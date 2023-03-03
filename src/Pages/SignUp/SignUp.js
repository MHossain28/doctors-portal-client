import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   sign up handle
  const { createUser, updateUser, providerLogIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  // handleGoogleLogin
  const handleGoogleLogin = () => {
    providerLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(`https://doctor-portal-server-ashy.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="p-7 w-94">
        <h2 className="text-2xl text-center mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
          {/* password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Enter your Passwoed",
                minLength: {
                  value: 6,
                  message: "Pasword Must be 6 creacter",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[0-9])/,
                  message: "password must be stronth",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className="btn mt-3 btn-primary text-white w-full"
            type="submit"
          />
          {signUpError && { setSignUpError }}
        </form>
        <p>
          Alrady have an Acount?
          <Link to="/login" className="text-primary">
            Please, Login
          </Link>
        </p>
        <div className="divider text-secondary">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          CONTINT WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
