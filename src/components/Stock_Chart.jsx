import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function Stock_Chart({chartTitle, chartDescription, xvalues, yvalue1, yvalue2}) {

    const data = {
        labels: xvalues,
        datasets: [
            {
                label: 'Brownian Motion',
                data: yvalue1,
                borderColor: 'rgba(75,87,192,1)',
                fill: false,
            },
            {
                label: 'Geometric Brownian Motion',
                data: yvalue2,
                borderColor: 'rgba(54,162,235,1)',
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Trading Days",
                    color: '#ffffff'
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Security Equity price',
                    color: '#ffffff'
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#ffffff'
                }
            },
        },
    };

    return (
    <>
    <div style={{ backgroundColor: '#121212', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#ffffff' }}>{chartTitle}</h2>
        <p style={{ color: '#ffffff' }}>{chartDescription}</p>
        <Line data={data} options={options} />
    </div>
    </>
    );
}

export default Stock_Chart;