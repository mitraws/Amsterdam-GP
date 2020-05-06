import React from 'react';

export default function Table(props) {
    console.log("Hello from props", props)
    return <tr>
    <td>{props.Doctor}</td>
    <td>{props.Availability ? "on duty" : "off duty"}</td>
  </tr>

}