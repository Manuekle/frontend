import React from "react";
import { Link } from "react-router-dom";

function Route(props) {
  return (
    <Link
      to={props.url}
      className="text-sm font-bold text-black dark:text-white"
    >
      {props.name}
    </Link>
  );
}

export default Route;