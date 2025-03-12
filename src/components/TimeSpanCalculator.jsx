import React, { useState, useEffect } from 'react';
import { differenceInDays, parse } from 'date-fns';

// Helper function to create evenly spaced array (equivalent to Rust's linspace)
const linspace = (start, end, num) => {
  const step = (end - start) / (num - 1);
  return Array.from({ length: num }, (_, i) => start + i * step);
};

// Helper function to round numbers (equivalent to Rust's round_num)
const roundNum = (num, decimals) => {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
};

const TimeSpanCalculator = () => {
  const [timeSpan, setTimeSpan] = useState([]);
  
  useEffect(() => {
    // Current date
    const currentDate = new Date();
    
    // Parse maturation date (changed format to MM/DD/YYYY)
    const dateStr = "03/21/2025";
    const maturationDate = parse(dateStr, 'MM/dd/yyyy', new Date());
    
    // Calculate days difference
    const daysSinceEpoch = differenceInDays(maturationDate, currentDate);
    
    // Calculate time to maturity (in years)
    const endTime = 0.0001;
    const timeToMaturity = daysSinceEpoch / 365.0;
    
    // Generate time span
    const rawTimeSpan = linspace(timeToMaturity, endTime, daysSinceEpoch);
    
    // Round the time span values
    const roundedTimeSpan = rawTimeSpan.map(time => roundNum(time, 4));
    
    setTimeSpan(roundedTimeSpan);
  }, []);

  const [stock_data, setStock_data] = useState([]);

  const addStock = () => {
    const newStock = { id: Date.now(), name: "Apple", price: 150 };
    setStock_data((prevData) => [...prevData, newStock]);
  };

  return (
    <>
    <div>
      <h2>Time Span Calculation</h2>
      <p>Current Date: {new Date().toLocaleDateString('en-US')}</p>
      <p>Maturation Date: 03/21/2025</p>
      <h3>Time Span Values:</h3>
      <ul>
        {timeSpan.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
    <div>
      <h1>Stock Data</h1>
      <button onClick={addStock}>Add Stock</button>
      <ul>
        {stock_data.map((stock) => (
          <li key={stock.id}>
            {stock.name}: ${stock.price}
          </li>
        ))}
      </ul>
    </div>
    </>

  );
};

export default TimeSpanCalculator;