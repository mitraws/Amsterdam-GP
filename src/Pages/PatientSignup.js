import React, { useState, useEffect } from "react";

export default function Navbar() {
const [submitConfirm, setSubmitconfirm] = useState(false)
const [gender, setGender] = useState("")
const [dob, setDob] = useState("")


const initialState = {firstName:"", lastName:"", email:"", phone:""}
const [newPatient, setnewPatient] = useState(initialState)

  const SubmitHandler = (event) => {
    event.preventDefault()
    console.log("Hello from newPatient", newPatient, gender, dob)
    
    // const { firstName, lastName, email, phone } = newPatient
    // if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && phone.length > 0) {
    // setSubmitconfirm(true)
    // } else {
    // setSubmitconfirm(false)
    // }
  };
  
// if (submitConfirm === true){
// return <p>Your information has successfully been submitted.</p>
//}

  return (
      <div>
          <h1>Patient Signup</h1>
    <form onSubmit={SubmitHandler}>
      <p>
        <label>
          First name:
          <input
            type="text"
            value={newPatient.firstName}
            onChange={(e) => setnewPatient({...newPatient,firstName:e.target.value})}
          />
        </label>
      </p>
      <p>
        <label>
          Last name:
          <input
            type="text"
            value={newPatient.lastName}
            onChange={(e) => setnewPatient({...newPatient,lastName:e.target.value})}
          />
        </label>
      </p>
      <p>
        <label>
          E-mail:
          <input
            type="text"
            value={newPatient.email}
            onChange={(e) => setnewPatient({...newPatient,email:e.target.value})}
          />
        </label>
      </p>
      <p>
        <label>
          Phonenumber:
          <input
            type="number"
            value={newPatient.phone}
            onChange={(e) => setnewPatient({...newPatient,phone:e.target.value})}
          />
        </label>
      </p>
<p>
        <label>
          Gender:
          <select onChange={(e) => setGender(e.target.value)}>
          <option value="gender"></option>
        <option value="gender">Male</option>
          <option value="gender">Female</option>
          </select>
        </label>
      </p>     
      <p>  <label>
          Date of birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
        </p>
      </form>
      </div>
      
  );
}
