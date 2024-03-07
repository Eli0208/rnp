import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Nav } from "react-bootstrap";
import "./sidebar.css";

function SideBar() {
  return (
    <div
      className="sidebar"
      style={{ backgroundColor: "maroon", color: "white" }}
    >
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Dashboard</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBar;
