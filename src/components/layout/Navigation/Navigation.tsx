import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../routes";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <nav className='Navigation'>
      <ul>
        <li>
          <NavLink to={ROUTES.HOME.path}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.LOGIN.path}>Login</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.REGISTER.path}>Register</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ACCOUNT.path}>Account</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
