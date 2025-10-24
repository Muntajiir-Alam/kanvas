import { Link } from "react-router-dom";
import GetStarted from "./GetStarted";


const Nav = () => {
  return (
    <>
      <nav className="text-white flex justify-between p-5 pl-20 pr-20 items-center">
        <Link  className=" font-logo text-logo text-4xl pb-2">Kanvas</Link>
        <div className="flex items-end">
          <Link className="pr-10 font-karla">Home</Link>
          <Link className="pr-10 font-karla">Features</Link>
          <Link className="pr-10 font-karla">About</Link>
          <Link className="">Contact</Link>
        </div>
        <Link to="/canvas">
          <GetStarted />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
