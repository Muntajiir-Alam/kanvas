import Nav from "./Nav";
import { Link } from "react-router-dom";
import GetStarted from "./GetStarted";
import landing from "../assets/landing.png";
import landingbg from "../assets/landingbg.png";

const Landing = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center px-20"
      style={{
        backgroundImage:
          `url(${landingbg})`,
      }}
    >
      <Nav />
      <section className="w-full h-10/12 flex">
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
            <div>
              <Link to="/canvas">
                <GetStarted />
              </Link>
            </div>
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
