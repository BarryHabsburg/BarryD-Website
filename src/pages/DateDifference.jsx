import React, { useState, useRef, useEffect } from "react";

// Independent Component to Calculate Date Difference
const DateDifference = ({ maturation_date }) => {
  const currentDate = useRef(new Date()); // Store current date once

  // Ensure maturation_date is valid
  if (!maturation_date) {
    return <p>Please enter a maturation date.</p>;
  }

  // Debugging: Log values to identify issues
  console.log("Maturation Date (Raw Input):", maturation_date);

  // Convert input date to a valid Date object (enforcing UTC)
  const targetDateObj = new Date(`${maturation_date}T00:00:00Z`);
  
  console.log("Parsed Target Date:", targetDateObj);

  if (isNaN(targetDateObj.getTime())) {
    return <p>Invalid date format.</p>;
  }

  // Compute day difference
  const timeDifference = targetDateObj.getTime() - currentDate.current.getTime();
  const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return <p>Difference in days: {dayDifference} days</p>;
};

export default DateDifference;