import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Image from "../Image/index";

function Navbar() {
  const [toggle, setToggle] = useState("inactive");

  const showContent = () => {
    if (toggle === "inactive") {
      setToggle("active");
    } else setToggle("inactive");
  };

  const setInactiveToggle = () => {
    if (toggle === "active") setToggle("inactive");
  };

  return (
    <header>
      <Link to="/" className="logo" onClick={setInactiveToggle}>
        <Image
          imgLink={"https://imgix.tractian.com/images/Logo-Tractian.svg"}
          imgAlt={"logo tractian"}
          imgStyle={"tractian-logo"}
        />
      </Link>
      <div onClick={showContent} id="toggle" className={toggle}></div>
      <div id="navbar" className={toggle}>
        <ul>
          <li>
            <Link to="/assets" onClick={setInactiveToggle}>
              Assets
            </Link>
          </li>
          <li>
            <Link to="/units" onClick={setInactiveToggle}>
              Units
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={setInactiveToggle}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/companies" onClick={setInactiveToggle}>
              Companies
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
