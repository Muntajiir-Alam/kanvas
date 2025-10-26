import { Link } from "react-router-dom";
import GetStarted from "./GetStarted";
import Logo from "./Logo";


const Nav = () => {
  return (
    <>
      <nav className="text-white font-karla flex justify-between py-5  items-center">
        <Link  ><Logo /></Link>
        <div className="flex h-full bg-white/5 backdrop-blur-xs py-2 px-3.5 gap-4 rounded-full text-sm">
          <Link className="h-full px-3  py-1.5 hover:bg-white/9 rounded-full active:bg-gray-600">Home</Link>
          <Link className="h-full px-3  py-1.5 hover:bg-white/9 rounded-full active:bg-gray-600">Features</Link>
          <Link className="h-full px-3  py-1.5 hover:bg-white/9 rounded-full active:bg-gray-600">About</Link>
          <Link className="h-full px-3  py-1.5 hover:bg-white/9 rounded-full active:bg-gray-600">Contact</Link>
        </div>
        <Link to="/canvas">
          <GetStarted />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
