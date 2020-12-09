import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="navbar-component">
      <NavbarBrand href="/">SHOP NOW</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        </Nav>
        <NavbarText>
          <FontAwesomeIcon icon={faHeart} className="text-warning mr-3" />
        </NavbarText>
        <NavbarText>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartPlus} className="text-warning mr-3" />
          </Link>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
