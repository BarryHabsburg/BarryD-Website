import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function GreeksChart({chartTitle, chartDescription, x_axis, xvalue, yvalue1, yvalue2, yvalue3, yvalue4, yvalue5}) {

    const data = {
        labels: xvalue,
        datasets: [
            {
                label: 'Delta',
                data: yvalue1,
                borderColor: 'rgba(75,87,192,1)',
                fill: false,
            },
            {
                label: 'Gamma',
                data: yvalue2,
                borderColor: 'rgba(54,162,235,1)',
                fill: false,
            },
            {
                label: 'Theta',
                data: yvalue3,
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
            },
            {
                label: 'Rho',
                data: yvalue4,
                borderColor: 'rgba(255,159,64,1)',
                fill: false,
            },
            {
                label: 'Vega',
                data: yvalue5,
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: x_axis,
                    color: '#ffffff'
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Greek Value',
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

export default GreeksChart;