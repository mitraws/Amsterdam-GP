import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Components/Contact";

export default function Navbar() {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <p>
        {" "}
        <Contact />
        <Link to="/DoctorSchedule">
          <button>Who is on duty?</button>
        </Link>
      </p>
      <p>
        <Link to="/PatientSignup">
          <button>I am a new patient</button>
        </Link>
      </p>
    </div>
  );
}
