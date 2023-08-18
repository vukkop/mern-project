import React from "react";
import { Link } from "react-router-dom"
import LogoSVG from "../../../assets/svg/Logo"

function NavBar() {

  return (
    <div>
      <div className="px-5 m-4 d-flex align-items-center justify-content-between">
        <LogoSVG width={50} height={50}/>
        <div style={{padding: 30, backgroundColor: "blue", borderRadius: 32}}>
          <ul className="list-unstyled d-flex gap-5 text-light">
            <li className="">Home</li>
            <li className="">Properties</li>
            <li className="">Services</li>
            <li className="">About</li>
            <li className="">Contact</li>
          </ul>
        </div>
        <Link to={"/login"}>Sign In</Link>
      </div>
    </div>
  );
}
export default NavBar;