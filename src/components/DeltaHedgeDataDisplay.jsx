function DeltaHedgeDataDisplay({ data, headers, indexPresent, indexplace }) {
    const maxCols = Math.max(...data.map(row => row.length));

    return (
    <>
    <table className="data-table">
        {/* Header row */}
        <thead>
            <tr>
                {headers.map((header, i) => (
                    <th key={i} className={i === 0 ? "left-align": "right-align"}>
                        {header}
                    </th>
                ))}
            </tr>
        </thead>
        {/* Data rows */}
        <tbody>
            {data.map((row, rowIndex) => ( 
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "even-row" : "odd-row"}>
                    {row.map((cell, colIndex) => (
                        <td key={colIndex} className={`${colIndex === 0 ? "left-align" : "right-align"}`}>
                            {indexPresent && colIndex === 0 ? (
                                <b>{typeof cell === "number" ? parseInt(cell) : cell}</b>
                            ) : (
                                typeof cell === "number" ? cell.toFixed(2) : cell
                            )}
                        </td>
                    ))}
                    {/* Pad with empty cells if the row is shorter than maxCols */}
                    {Array.from({ length: maxCols - row.length }, (_, i) => (
                        <td key={row.length+i} className={(row.length + i) === 0 ? 'left-align' : 'right-align'}>
                            {indexPresent && indexplace === row.length + i ? <b></b> : "&nbsp;"}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
    </>
    );
}

export default DeltaHedgeDataDisplay;