import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      <h2>Not Found page</h2>
      <Link to='/'>Go to main page</Link>
    </div>
  );
};

export default NotFound;
