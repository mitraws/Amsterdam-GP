import React from "react";

export default function PatientCard(props) {
  return (
    <ul align="left" className="sub-menu" type="none">
      <li>
        {" "}
        Name: {props.name} {props.lastname}
      </li>
      <li> ID: {props.id} </li>
      <li>Date of Birth: {props.dob}</li>
          </ul>
  );
}
