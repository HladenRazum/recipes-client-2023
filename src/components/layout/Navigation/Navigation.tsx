import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <nav>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/account'>Account</NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
