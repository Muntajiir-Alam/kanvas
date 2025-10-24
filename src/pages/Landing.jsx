import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import GetStarted from "./GetStarted";
import landing from "../assets/landing.png";
const Landing = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774')",
      }}
    >
      <Nav />
      <section className="pl-20 pr-20 w-full h-10/12 flex">
        <div className="w-1/2 flex flex-col">
          <div>
            <h1 className="text-white  font-karla text-6xl  mt-20 ">
              WELCOME TO KANVAS
            </h1>
            <p className="text-gray-300 mr-3 pt-10 w-100">
              A creative space where you can connect, share ideas, collaborate
              in real-time, and bring your imagination to life.
            </p>
          </div>
          <div className="mt-30">
            <h3 className="text-white pb-10 tracking-widest">
              Start your journey with Kanvas today!
            </h3>
            <Link to="/canvas" >
              <GetStarted />
            </Link>
          </div>
        </div>
        <div className="w-1/2 ">
          <img src={landing} className="w-full h-full object-center" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
