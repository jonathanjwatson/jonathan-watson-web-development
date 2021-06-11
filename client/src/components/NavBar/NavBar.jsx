import React from "react";
import "./NavBar.css";
import Mark from "../../assets/Mark.png";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBarBright = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <>
          <NavLink to="/" className="brand-logo">
            <img
              src={Mark}
              id="brand-logo-image"
              alt="Jonathan Watson Web Development Logo"
            />
          </NavLink>
          <span id="brand-logo-text">Jonathan Watson Web Development</span>
        </>
      }
      menuIcon={<FontAwesomeIcon icon={faBars}>Menu</FontAwesomeIcon>}
      id="mobile-nav"
      options={{
        draggable: true,
        edge: "right",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="/#about-us">About</NavItem>
      <NavItem
        href="https://www.youtube.com/channel/UCCDmcwZ1DBlFzDoRcTnoLDw"
        target="_blank"
      >
        Tutorials
      </NavItem>
      <NavItem
        href="https://jonathanwatsonwebdevelopment.medium.com/"
        target="_blank"
      >
        Articles
      </NavItem>
      <NavItem href="/connect">
        Connect
      </NavItem>
      {/* <NavItem href="/speaking-and-training">Speaking and Training</NavItem>
      <NavItem href="/portfolio">Portfolio</NavItem>
      <NavItem href="/uses">Uses</NavItem>
      <NavItem href="/contact">Contact</NavItem> */}
    </Navbar>
  );
};

export default NavBarBright;
