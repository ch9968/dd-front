import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavComponent = () => {
  return (
    <SLayout>
      <nav>
        <SNavLink to="/about">About</SNavLink>
        <SNavLink to="/">Home</SNavLink>
        <SNavLink to="/about">About</SNavLink>
      </nav>
    </SLayout>
  );
};

export default NavComponent;

const SLayout = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 0;
  z-index: 1000;

  width: 100%;
  max-width: 375px;
  height: 64px;

  background-color: orange;
`;

const SNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px;

  &.active {
    color: red;
  }

  &:hover {
    color: blue;
  }
`;
