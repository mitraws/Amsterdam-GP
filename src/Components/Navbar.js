import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
return (
    <div>
    <NavLink activeStyle={{background: "lightgrey"}} exact to="/">Home</NavLink>{" | "}
    <NavLink activeStyle={{background: "lightgrey"}} to="/DoctorSchedule">Doctor Schedule</NavLink>{" | "}
    <NavLink activeStyle={{background: "lightgrey"}} to="/PatientSignup">Patient Signup</NavLink>{" | "}
    <NavLink activeStyle={{background: "lightgrey"}} to="/PatientDatabase">Patient Database</NavLink>
    </div>
)
}