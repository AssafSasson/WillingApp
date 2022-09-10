import React from "react";
import { useNavigate } from "react-router-dom";

function Find(props) {
  const nav = useNavigate();
  var filteredArr = [];
  filteredArr = [
    ...new Map(props.volunteerArr.map((val) => [val.vLucation, val])).values(),
  ];
  const checkCity = () => {
    if (props.citySelect === "") return alert("please select a city");

    nav("/all");
  };
  return (
    <div className="find-container">
      <h1>Find Your Location To Volunteer</h1>

      <div className="find-form">
        <input type="text" placeholder="Volunteer Name" minLength={2} />
        <br />
        <select
          onChange={(e) => {
            props.setCityselect(e.target.value);
          }}
        >
          <option>Choose city</option>
          {filteredArr.map((val) => {
            return <option>{val.vLucation}</option>;
          })}
        </select>
        <br />
        <button
          onClick={() => {
            checkCity();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Find;
