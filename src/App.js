import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import DoctorSchedule from "./Pages/DoctorSchedule";
import PatientSignup from "./Pages/PatientSignup";
import PatientDatabase from "./Pages/PatientDatabase";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Switch>
          <Route path="/DoctorSchedule" component={DoctorSchedule} />
          <Route path="/PatientSignup" component={PatientSignup} />
          <Route path="/PatientDatabase" component={PatientDatabase} />
          <Route exact path="/" component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
