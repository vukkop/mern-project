import React from "react";
import { Link } from "react-router-dom"
import LogoSVG from "../../../assets/svg/Logo"
import AppBar from "@mui/material/AppBar"

function NavBar() {

  return (
    <div>
      <AppBar style={{backgroundColor: "white", }} position="sticky" >
        <div style={{
          paddingLeft: 100, 
          paddingRight: 100,
          }} 
          className="m-4 d-flex align-items-center justify-content-between"
        >
          <LogoSVG width={50} height={50} />
          <div
            style={{
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 100,
              paddingRight: 100,
              backgroundColor: "blue",
              borderRadius: 50
            }}
          >
            <ul className="list-unstyled d-flex gap-5 text-light m-0">
              <li className="">Home</li>
              <li className="">Properties</li>
              <li className="">Services</li>
              <li className="">About</li>
              <li className="">Contact</li>
            </ul>
          </div>
          <Link to={"/login"}>Sign In</Link>
        </div>
      </AppBar>
      <div>
        <p>lorem2000</p>
      </div>
    </div>
  );
}
export default NavBar;