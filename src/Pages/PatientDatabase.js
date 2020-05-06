import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Button from '../Components/Button';

export default function PatientDatabase() {
const [patientCards, setpatientCards] = useState([]);
const [selectDoc, setselectDoc] = useState([])

  useEffect(() => {
    setpatientCards("Loading ...");
    const fetchData = async () => {
      const data = await Axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );
      console.log("Hello from data", data);
      setpatientCards(data.data);
    };
    fetchData()  
  
  }, []);

  if (patientCards === "Loading ...") {
    return <h1>Loading...</h1>;} 
  
    console.log("hello from useState", patientCards)

  return (
    <div>
      <h1>Patient Database</h1>
      
      <label>Doctor:{" "}<select onChange={(e) => setselectDoc(e.target.value)}>
          <option value="selectDoc"></option>
          </select>
          </label>

           {patientCards.map(Patient => {
        return <ul align="left" className="sub-menu" type="none" key={Patient.id}>
            <li> Name:{Patient.firstName} {Patient.lastName}</li>
        <li> ID:{Patient.id} </li>
        <li>Date of Birth:{Patient.dateOfBirth}</li><Button name="Show details"/></ul>
          
          console.log("Hello from mapping", Patient)
        
           })}
 
    </div>
  );
  }
