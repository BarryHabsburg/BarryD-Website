import React, { useState } from 'react';

const CubeCalculator = () => {
  // State for input values and calculated volume
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: ''
  });
  const [volume, setVolume] = useState(null);
  const [errMessage, setErrMessage] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Only allow positive numbers
    if (value === '' || (!isNaN(value) && Number(value) >= 0)) {
      setDimensions(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Calculate volume
  const calculateVolume = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (dimensions.length === '' || dimensions.width === '' || dimensions.height === '') {
      // alert('Please fill in all dimensions');
      setErrMessage(true);
      return;
    } else {
      setErrMessage(false);
    }

    const length = Number(dimensions.length);
    const width = Number(dimensions.width);
    const height = Number(dimensions.height);

    // Calculate volume
    const calculatedVolume = length * width * height;
    setVolume(calculatedVolume);
  };

  return (
    <div className="cube-calculator">
      <h1>Cube Volume Calculator</h1>
      
      <div className="calculator-container">
        <div className="image-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cube_%28geometry%29.svg/256px-Cube_%28geometry%29.svg.png"
            alt="Cube illustration"
            className="cube-image"
          />
        </div>

        <form onSubmit={calculateVolume} className="input-form">
          <div className="input-group">
            <label htmlFor="length">Length:</label>
            <input
              type="number"
              id="length"
              name="length"
              value={dimensions.length}
              onChange={handleInputChange}
              placeholder="Enter length"
              min="0"
              step="any"
            />
          </div>

          <div className="input-group">
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              id="width"
              name="width"
              value={dimensions.width}
              onChange={handleInputChange}
              placeholder="Enter width"
              min="0"
              step="any"
            />
          </div>

          <div className="input-group">
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              name="height"
              value={dimensions.height}
              onChange={handleInputChange}
              placeholder="Enter height"
              min="0"
              step="any"
            />
          </div>
          {errMessage == true && (
              <>
                <p className="Web-App-Description"><font color="#880808">Fill in all inputs.</font></p>
              </>
          )}

          <button type="submit" className="calculate-button">
            Calculate Volume
          </button>
        </form>
      </div>

      {volume !== null && (
        <div className="result">
          <h2>Volume: {volume.toFixed(2)} cubic units</h2>
        </div>
      )}
    </div>
  );
};

export default CubeCalculator;