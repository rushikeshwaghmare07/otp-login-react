import React, { useEffect, useRef, useState } from 'react'

export const OtpInput = ({length = 4, onOtpSubmit = () => { } }) => {

  const [otp, setOtp] = useState(new Array(length).fill(""))

  const inputRefs = useRef([]);
  
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
  };

  const handleClick = () => {};
  const handleKeyDown = () => {};

  return (
    <div>
      {
        otp.map((value, index) => {
          return <input key={index} type="text" value={value}
          ref={(input) => (inputRefs.current[index] = input)}
          onChange = {(e) => handleChange(index, e)}
          onClick = {() => handleClick(index)}
          onKeyDown = {(e) => handleKeyDown(index, e)}
          className='otpInput'
          />
        })
      }
    </div>
  )
}
