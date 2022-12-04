import React from "react";
import Navigation from "../Navigation/Navigation";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className='topbar'>
      <h4>Menu</h4>
      <Navigation />
    </div>
  );
};

export default TopBar;
