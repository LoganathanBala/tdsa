import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timerId);
  }, []); 

  return (
    <div>      
      <p>{currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentDateTime;