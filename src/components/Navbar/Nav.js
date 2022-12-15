import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import logo from "./mainlogo.png";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [sticky, setSticky] = useState("");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      return setSticky("#");
    } else {
      return setSticky("");
    }
  });

  return (
    <nav className={sticky === "#" ? `stickyNav` : ""}>
      <div className="logo">
        <img src={logo} alt="logo" className="nav-logo" />
        <h2 className="heading">KAMBARE</h2>
      </div>
      <div className={`nav-links ${active ? `nav-links-toggle` : ""}`}>
        <Link to="/" onClick={() => setActive(!active)}>
          ABOUT
        </Link>
        <Link to="/orders" onClick={() => setActive(!active)}>
          ORDER ONLINE
        </Link>
        <Link to="/contact" onClick={() => setActive(!active)}>
          CONTACT
        </Link>
      </div>
      <div className="nav-settings">
        <Button variant="primary" size="sm">
          Sign In
        </Button>
        <Button variant="primary" size="sm">
          Login
        </Button>
        <AiOutlineMenu
          className="menu icon"
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  );
};

export default Nav;
