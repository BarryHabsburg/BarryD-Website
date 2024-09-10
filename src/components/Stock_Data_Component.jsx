import React, { useEffect, useState } from "react";

const StockTableComponent = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Use the CORS proxy to bypass CORS issues
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent('https://query1.finance.yahoo.com/v7/finance/download/MSFT?period1=1672531200&period2=1704067200&interval=1d&events=history')}`
        );
        const data = await response.json();

        // Convert CSV response to JSON-like format for easier handling
        const rows = data.split("\n").slice(1); // Skipping the CSV header row
        const formattedData = rows.map((row) => {
          const cols = row.split(",");
          return {
            Date: cols[0],
            Open: cols[1],
            High: cols[2],
            Low: cols[3],
            Close: cols[4],
            Volume: cols[6],
          };
        });

        setStockData(formattedData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h1>Microsoft Stock Data (MSFT)</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {stockData.length > 0 ? (
            stockData.map((row, index) => (
              <tr key={index}>
                <td>{row.Date}</td>
                <td>{row.Open}</td>
                <td>{row.High}</td>
                <td>{row.Low}</td>
                <td>{row.Close}</td>
                <td>{row.Volume}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockTableComponent;
