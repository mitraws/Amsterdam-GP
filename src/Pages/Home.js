import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <p><Link to="/DoctorSchedule"><button>Who is on duty?</button></Link></p>
      <p><Link to="/PatientSignup"><button>I am a new patient</button></Link></p>
    </div>
  );
}


