import React, { useState, useEffect } from 'react';

function Display_hashmap({map, map_headers, row_max}) {
    const rows = [];
    let current_row = [];
    let row_count = 1;

    map_headers.forEach((header, index) =>{
        if (row_count === 1) {
            current_row = [];
        }

        const cell = (
            <React.Fragment key={header}>
                <td className="hashmap-table-td-left">
                    <b>{header}:</b>
                </td>
                <td className="hashmap-table-td-right">
                    {map.has(header) ? map.get(header) : "Value not found"}
                </td>
            </React.Fragment>
        );

        current_row.push(cell);
        row_count++;

        if (row_count === row_max || index === map_headers.length-1) {
            rows.push(
                <tr key={`row-${rows.length}`}>
                    {current_row}
                </tr>
            );
            row_count = 1;
        }
    });

    return (
    <>
    <table className="hashmap-table">
        <tbody>
            {rows}
        </tbody>
    </table>
    </>
    );
}

export default Display_hashmap;