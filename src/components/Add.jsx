import React, { useState } from "react";
import "../styles/Add.css";
import { useNavigate } from "react-router-dom";

function Add(props) {
  const nav = useNavigate();
  const [cause, setCause] = useState("");
  const [vLucation, setVlivation] = useState("");
  const [Description, setDescription] = useState("");

  const ValidForm = () => {
    if (!vLucation.match(/^[a-zA-Z]*$/))
      return alert("welling Location must contain only letters in english");
    if (cause === "") return alert("volunteer cause must contain something");

    if (Description === "")
      return alert("description must contain a description about the cause");

    let temp = {
      cause: cause,
      vLucation: vLucation,
      Description: Description,
    };
    props.setvolunteerArr([...props.volunteerArr, temp]);
    nav("/");
  };
  return (
    <div className="AddBox">
      <h1>Add volunteer</h1>
      <input
        onChange={(e) => {
          setCause(e.target.value);
        }}
        type="text"
        id=""
        placeholder="Enter Willing Header"
        maxLength={20}
      />
      <br />
      <input
        onChange={(e) => {
          setVlivation(e.target.value);
        }}
        type="text"
        id=""
        placeholder="Enter Welling Place"
      />
      <br />
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        rows={7}
        cols={28}
        placeholder="Enter Welling Description"
        maxLength={200}
      />
      <br />
      <button
        onClick={() => {
          ValidForm();
        }}
      >
        Add Willing
      </button>
    </div>
  );
}

export default Add;
