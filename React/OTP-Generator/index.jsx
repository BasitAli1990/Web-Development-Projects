const { useState, useEffect, useRef } = React;

function OTPGenerator() {
  const [otp, setOtp] = useState(null);
  const [timer, setTimer] = useState(0);
  const [expired, setExpired] = useState(false);
  const intervalRef = useRef(null);

  // Start countdown when timer is set > 0
  useEffect(() => {
    // if there's an active countdown, set up interval
    if (timer > 0) {
      // ensure not already running
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }

    // cleanup and stop when timer reaches 0
    return () => {
      if (intervalRef.current && timer <= 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [timer]);

  // When timer becomes 0, mark expired and clear interval
  useEffect(() => {
    if (timer === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setExpired(true);
    }
    // when timer > 0 (new run) ensure expired false
    if (timer > 0) setExpired(false);
  }, [timer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  function generateOTP() {
    // 6-digit number (leading digit non-zero)
    const newOtp = String(Math.floor(100000 + Math.random() * 900000));
    setOtp(newOtp);
    setTimer(5);      // start 5 second countdown
    setExpired(false);
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      {/* Only render the paragraph after generate is clicked (timer > 0 or expired) */}
      {(timer > 0 || expired) && (
        <p id="otp-timer">
          {timer > 0
            ? `Expires in: ${timer} seconds`
            : "OTP expired. Click the button to generate a new OTP."}
        </p>
      )}

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timer > 0}
      >
        Generate OTP
      </button>
    </div>
  );
}

export { OTPGenerator };
export default OTPGenerator;
