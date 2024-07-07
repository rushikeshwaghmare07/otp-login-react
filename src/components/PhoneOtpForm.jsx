import React, { useState } from "react";

function PhoneOtpForm() {

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePhoneSubmit = () => {
    event.preventDefault();
  };
  
  return (
    <div>
      <form onSubmit={() => {}}>
        <input type="text" value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="Enter Phone Number" />
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhoneOtpForm;
