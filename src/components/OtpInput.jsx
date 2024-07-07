import React, { useEffect, useRef, useState } from 'react'

export const OtpInput = ({length = 4, onOtpSubmit = () => { } }) => {

  const [otp, setOtp] = useState(new Array(length).fill(""))

  const inputRefs = useRef([]);
  
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, []);

  console.log(inputRefs);

  const handleChange = () => {};
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
