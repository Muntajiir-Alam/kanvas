import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import login from "../assets/login.png";
import loginbg from "../assets/login-bg.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import Logo from "./Logo";
import { EyeClosed, Eye } from "lucide-react";

const Login = () => {
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
              className="h-full w-full gap-3 flex flex-col items-center font-karla text-xs px-8 py-4 text-gray-300"
            >
              <div>
                <Logo />
              </div>
              <div className="w-full h-auto mb-2">
                <label htmlFor="Username" className="pl-4">
                  Username
                </label>
                <input
                  type="text"
                  name=""
                  id="Username"
                  {...register("name", {
                    required: "Username is required",
                  })}
                  placeholder="Enter your username"
                  className="w-full border border-stock  rounded-full h-9 text-xs mt-1 px-4 outline-none"
                />
                {errors.name ? (
                  <p className="pl-4 text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>
              <div className="w-full">
                <label htmlFor="Password" className="pl-4">
                  Password
                </label>
                <input
                  type={showPassword ? "password" : "text"}
                  name=""
                  id="Password"
                  {...register("Password")}
                  placeholder="Enter your password"
                  className=" w-full border border-stock  rounded-full h-9  mt-1 mb-2 px-4 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute transform translate-y-3 -translate-x-9 text-gray-300  outline-none"
                >
                  {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                </button>
                <div className="flex flex-row-reverse pr-4 ">
                  <span className="">Forgot password ?</span>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className=" w-full hover:bg-emerald-600 hover:text-sm active:bg-btn text-white rounded-full h-9 bg-btn outline-none cursor-pointer "
              >
                Login
              </button>
              <span className="my-1">Login with</span>
              <div className="flex gap-5 h-10">
                <button 
                type="button"
                className="cursor-pointer">
                  <img src={google} alt="" className="h-6 invert" />
                </button>
                <button 
                type="button"
                className="cursor-pointer">
                  <img src={facebook} alt="" className="h-7 invert" />
                </button>
                <button 
                type="button"
                className="cursor-pointer">
                  <img src={github} alt="" className="h-7 invert" />
                </button>
              </div>
              <Link to="/signup" className="cursor-pointer w-full flex justify-center">
                Don't have an account ?
                <span className="text-stock">Signup.</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
