import React, { useState, useEffect } from "react";
import Contact from "../Components/Contact";
import Axios from 'axios';
import Table from '../Components/Table';

export default function Navbar() {
const [DocsonDuty, setDocsonDuty] = useState([]);


  useEffect(() => {
    setDocsonDuty("Loading ...");
    const fetchData = async () => {
      const data = await Axios.get(
        `http://localhost:4000/doctors`
      );
      // const data = await Axios.get(
      //   `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      // );
      console.log("Hello from data", data);
      setDocsonDuty(data.data);
    };
    fetchData()  
  
  }, []);

  if (DocsonDuty === "Loading ...") {
    return <h1>Loading...</h1>;} 
  
    console.log("hello from useState", DocsonDuty)

  return (
    <div>
      <h1>Who is on duty?</h1>
      <table>
          <tbody>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
          {DocsonDuty.map(Doctor => (
            <Table key={Doctor.id} Doctor={Doctor.doctor} Availability={Doctor.onDuty}/>
          ))}
          </tbody>
      </table>

      <Contact />
    </div>
  );
  }
