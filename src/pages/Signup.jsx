import React, { useState, useEffect } from "react";
import { EyeClosed, Eye, Heading1 } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import login from "../assets/login.png";
import loginbg from "../assets/login-bg.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import Logo from "./Logo";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  async function onSubmit(data) {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    console.log("submiting data", data);
  }

  return (
    <>
      <div
        className="h-full w-full  flex items-center justify-center  bg-cover bg-center "
        style={{ backgroundImage: `url(${loginbg})` }}
      >
        <div className="h-5/7 w-3/5 bg-white/1 backdrop-blur-xs border border-stock  rounded-2xl flex items-center justify-between shadow-black shadow-lg">
          <div className="h-full w-4/7  flex items-center">
            <img src={login} alt="login" className="h-full w-full " />
          </div>
          <div className="h-full py-10 pr-10 w-3/7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="h-full w-full gap-2 flex flex-col items-center font-karla text-xs px-8 py-4 text-gray-300"
            >
              <div>
                <Logo />
              </div>
              <div className="w-full h-auto ">
                <label htmlFor="name" className="pl-4">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                    
                    maxLength: {
                      value: 20,
                      message: "Must be less than 20 characters.",
                    },
                  })}
                  placeholder="Enter your name"
                  className="w-full border border-stock rounded-full h-9 text-xs mt-1 px-4 outline-none"
                />
                {errors.name ? (
                  <p className="pl-4 text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>
              <div className="w-full h-auto">
                <label htmlFor="email" className="pl-4">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="w-full border border-stock  rounded-full h-9 text-xs mt-1 px-4 outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="Password" className="pl-4">
                  Password
                </label>
                <input
                  type={showPassword ? "password" : "text"}
                  name=""
                  id="password"
                  {...register("password")}
                  placeholder="Create password"
                  className="w-full border border-stock  rounded-full h-9 text- my-1 px-4 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute transform translate-y-3 -translate-x-9 text-gray-300  outline-none"
                >
                  {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className=" w-full my-3 hover:bg-emerald-600  active:bg-btn text-white rounded-full  bg-btn outline-none cursor-pointer py-2 mx-1"
              >
                {isSubmitting ? <h1>Submiting</h1> : <h1>Submit</h1>}
              </button>
              <span className=" text-white ">Signup with</span>
              <div className="flex gap-5 h-10">
                <button className="cursor-pointer">
                  <img src={google} alt="" className="h-6 invert" />
                </button>
                <button className="cursor-pointer">
                  <img src={facebook} alt="" className="h-7 invert" />
                </button>
                <button className="cursor-pointer">
                  <img src={github} alt="" className="h-7 invert" />
                </button>
              </div>
              <Link to="/login" className="cursor-pointer">
                Already a member ? <span className="text-stock">Login.</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
