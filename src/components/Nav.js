import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from "../assets/image/jason-leung-wHddViTmSvA-unsplash.jpg"; 

// Define your styled components outside of the NavBar component
const Nav = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; 

`;

const Logo = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
`;

const NavItems = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
    position: absolute;
    width: 100%;
    top: 0;
    left: ${({ open }) => open ? '0' : '-100%'};
    transition: left 0.3s ease;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  background-color: #1E90FF; /* Dodger Blue */
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4.5%;
  margin-left: 2rem;

  &:hover {
    color: #aaa;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    border-radius: 0;
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
`;

const NavbarLogo = styled.img`
  padding: 0px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 2rem;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #333;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// NavBar component
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/"> {/* This should be the Logo styled component */}
        <NavbarLogo src={logo} alt='Logo' /> {/* Use the imported logo */}
      </Logo>     
       <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavItems open={open}>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </NavItems>
        </Nav>
);
  };


  export default NavBar;


