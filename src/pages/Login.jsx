import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.png";
import loginbg from "../assets/login-bg.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import Logo from "./Logo";
import { EyeClosed, Eye } from "lucide-react";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
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
                  placeholder="Enter your username"
                  className="w-full border border-stock  rounded-full h-9 text-xs mt-1 px-4 outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="Password" className="pl-4">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name=""
                  id="Password"
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
                <span className="pl-35 " >Forgot password ?</span>
              </div>
              <button className=" w-full hover:bg-emerald-600 hover:text-sm active:bg-btn text-white rounded-full h-9 bg-btn outline-none cursor-pointer " >Login</button>
              <span className="my-1">Login with</span>
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
              <Link to="/signup" className="cursor-pointer">Don't have an account ? <span className="text-stock">Signup.</span></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
