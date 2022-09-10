import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

function Main() {
  return (
    <div id="MainDiv">
      <h1>Willing</h1>
      <Link to="/add">
        <button className="Btn">Add Willing</button>
      </Link>
      <Link to="/find">
        <button className="Btn">Find Willing</button>
      </Link>
    </div>
  );
}

export default Main;
