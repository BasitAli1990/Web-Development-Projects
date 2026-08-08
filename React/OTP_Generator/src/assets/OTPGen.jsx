import './OTPGen.css';
import { useState, useEffect, useRef } from 'react';

function OTPGen() {
  const [otp, setOtp] =  useState(null);
  const [timer, setTimer] = useState(0);
  const [expired, setExpired] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (timer > 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current && timer <= 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [timer]);

  useEffect(() => {
    if (timer === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setExpired(true);
    }
    if (timer > 0) setExpired(false);
  }, [timer]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  function generateOTP() {
    const newOtp = String(Math.floor(100000 + Math.random() * 9000));
    setOtp(newOtp);
    setTimer(5);
    setExpired(false);
  }

  return (
    <div className="container">
      <h1 id='otp-title'>OTP Generator</h1>
      <h2 id='otp-display'>
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      {(timer > 0 || expired) && (
        <p id='oyp-timer'>
          {timer > 0
            ? `Expires in : ${timer} seconds`
            : "OTP expired. Click the button to generate a new OTP."
          }
        </p>
      )}

      <button
        id='generate-otp-button'
        onClick={generateOTP}
        disabled={timer > 0}
      >
        Generate OTP
      </button>
    </div>
  );
}

export { OTPGen };
export default OTPGen;
