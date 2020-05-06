import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Button from '../Components/Button';
import { Link } from "react-router-dom";

export default function PatientDatabase(props) {
const [patientCards, setpatientCards] = useState([]);

  useEffect(() => {
    setpatientCards("Loading ...");
    const fetchData = async () => {
      const data = await Axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );
      console.log("Hello from Patient data", data);
      setpatientCards(data.data);
    };
    fetchData()  
  
  }, []);

  if (patientCards === "Loading ...") {
    return <h1>Loading...</h1>;} 
  

    // console.log("hello from useState", patientCards)

  return (
    <div>

    {patientCards.map(Patient => {
        
 return <ul align="left" className="sub-menu" type="none" key={Patient.id}>
     <li> Name:{props.firstName} {props.lastName}</li>
 <li> ID:{props.id} </li>
 <li>Date of Birth:{props.dateOfBirth}</li>           
    })}
</div>
  );
  }
