function DataTableDisplay({ data, indexPresent, indexPlace}) {
  // Headers for the table
  const headers = [
    'Contract Name',
    'Last Trade Date (EDT)',
    'Strike',
    'Last Price',
    'Bid',
    'Ask',
    'Change',
    '% Change',
  ];

  // Determine the maximum number of columns for padding jagged arrays
  const maxCols = Math.max(...data.map(row => row.length));

  return (
    <table className="data-table">
      {/* Header row */}
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} className={i === 0 ? 'left-align' : 'right-align'}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      {/* Data rows */}
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}>
            {row.map((cell, colIndex) => {
              // Determine if the cell is in the "Change" or "% Change" column
              const isChangeColumn = colIndex === 6; // Change (7th column, index 6)
              const isPercentChangeColumn = colIndex === 7; // % Change (8th column, index 7)

              // Determine the class for color coding
              let cellClass = '';
              if (isChangeColumn || isPercentChangeColumn) {
                const value = parseFloat(cell);
                cellClass = value > 0 ? 'positive' : value < 0 ? 'negative' : '';
              }

              return (
                <td
                  key={colIndex}
                  className={`${colIndex === 0 ? 'left-align' : 'right-align'} ${cellClass}`}
                >
                  {indexPresent && indexPlace === colIndex ? (
                    <b>{typeof cell === 'number' ? cell.toFixed(2) : cell}</b>
                  ) : (
                    typeof cell === 'number' ? cell.toFixed(2) : cell
                  )}
                </td>
              );
            })}
            {/* Pad with empty cells if the row is shorter than maxCols */}
            {Array.from({ length: maxCols - row.length }, (_, i) => (
              <td
                key={row.length + i}
                className={(row.length + i) === 0 ? 'left-align' : 'right-align'}
              >
                {indexPresent && indexPlace === row.length + i ? <b></b> : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTableDisplay;