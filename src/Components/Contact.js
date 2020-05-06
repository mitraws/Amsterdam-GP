import React from "react";

export default function Contact() {

    let time = new Date().getHours();
    if (time >= 8 && time < 17) {
       time = 'open'
    } else {
        time = 'closed'
    }
  return (
    <div>
      <p>We are: {time}</p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  );
}
