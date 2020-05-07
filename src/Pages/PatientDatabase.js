import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Button from '../Components/Button';
import { Link } from "react-router-dom";
import PatientCard from '../Components/PatientCard';

export default function PatientDatabase() {
  const [patientCards, setpatientCards] = useState([]);
  const [selectDoc, setselectDoc] = useState([])
  const [docId, set_docId] = useState()

  useEffect(
    () => {
      setpatientCards("Loading ...");

      const fetchData = async () => {
        const data = await Axios.get(
          `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/db`
        );
        console.log("Hello from data", data);

        setpatientCards(data.data.patients);
        setselectDoc(data.data.doctors);
      };

      fetchData()  
    }, 
    []
  );

  if (patientCards === "Loading ...") {
    return <h1>Loading...</h1>;
  } 

  function compare_name(patient_a, patient_b) {
    return patient_a.lastName.localeCompare(patient_b.lastName);
  }

  const patientArrayCopy = [...patientCards]
  const sortedPatients = patientArrayCopy.sort(compare_name)
  // console.log("Hello from sorted Patients", sortedPatients)
  
  // console.log("Hello from filter By", docId)

  const filteredPatients = sortedPatients.filter(patient => {
    if (!docId) {
      return true
    }

    // console.log("Hello from patient", patient)
    const match = patient.doctorId === docId
    // console.log("Hello from match", match)
    if (match) {
      return true
    } else {
      return false
    }
  })

  const change_filter = (event) => {
    const number = parseInt(event.target.value)
    set_docId(number);
  };


  return (
    <div>
      <h1>Patient Database</h1>

      <label>Doctor:</label>{" "}
      <select value={docId} onChange={change_filter}>
        <option>All</option>
        {selectDoc.map(Doc => {
          return <option key={Doc.id} value={Doc.id}>{Doc.doctor}</option>
        })}
      </select>

      {filteredPatients.map(Patient => {
        return <div key={Patient.id}>
          <PatientCard name={Patient.firstName} lastname={Patient.lastName} id={Patient.id} dob={Patient.dateOfBirth}></PatientCard>
          <Link to={`/PatientDetail/${Patient.id}`}><Button name="Show details"/></Link>
        </div>
      })}
    </div>
  );
}
