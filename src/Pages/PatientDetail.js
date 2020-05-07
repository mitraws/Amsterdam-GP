import React, { useState, useEffect } from "react";
import PatientCard from '../Components/PatientCard';
import Axios from 'axios';
import { useParams } from "react-router-dom";


export default function () {
    const [patientCards, setpatientCards] = useState({});
    const [preScrip, setpreScrip] = useState([])
    const slug = useParams();

    console.log("Hello from param", slug)

    useEffect(
        () => {
            setpatientCards("Loading ...");

            const fetchData = async (id) => {
            console.log("Hello from useEffect, id?", id)
            const data = await Axios.get(
                `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${id}`
            );
            console.log("Hello from Patient data", data);

            setpatientCards(data.data);
            setpreScrip(data.data.prescriptions)
            console.log("Hello from prescrip", preScrip)
            };
            console.log("Hello from state patientCard", patientCards)

            fetchData(slug.id)  

        }, 
            []
            );
    


    
    return <div >
        <h1>{patientCards.firstName} {patientCards.lastName}</h1>     
       
        <ul align="left">
        <p>ID: {patientCards.id}</p>
        <p>Date of birth: {patientCards.dateOfBirth}</p>
        <p> Gender: {patientCards.gender}</p>
        <br></br>
        <p>Contact details:</p>
        <li>E-mail: {patientCards.email}</li>
        <li>Phone number: {patientCards.phoneNumber}</li></ul>
        <p>Prescriptions:</p>
        {preScrip.map(() => (
            <li>
            {preScrip}
            </li>
        ))} 

    </div>
}

