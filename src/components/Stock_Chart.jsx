import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

function Stock_Chart({ chartTitle, chartDescription, xvalues, yvalues }) {
    const data = {
        labels: xvalues,
        datasets: [
            {
                label: `Geometric Brownian Motion path`,
                data: yvalues,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Slight fill for visibility
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Trading Days",
                    color: '#ffffff',
                    font: {
                        family: "'Times New Roman', Times, serif",
                        size: 14,
                    },
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        family: "'Times New Roman', Times, serif",
                        size: 12,
                    },
                },
                grid: {
                    color: '#2E2E2E',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Security Equity price',
                    color: '#ffffff',
                    font: {
                        family: "'Times New Roman', Times, serif",
                        size: 14,
                    },
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        family: "'Times New Roman', Times, serif",
                        size: 12,
                    },
                },
                grid: {
                    color: '#2E2E2E',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#ffffff',
                    font: {
                        family: "'Times New Roman', Times, serif",
                        size: 14,
                    },
                },
            },
            tooltip: {
                backgroundColor: '#2E2E2E',
                titleFont: {
                    family: "'Times New Roman', Times, serif",
                    size: 14,
                },
                bodyFont: {
                    family: "'Times New Roman', Times, serif",
                    size: 12,
                },
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#ffffff',
                borderWidth: 1,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{
            backgroundColor: '#1a2526', // Match table background
            padding: '20px',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '100%',
        }}>
            <h2 style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: 'clamp(16px, 2vw, 20px)',
                marginBottom: '10px',
            }}>
                {chartTitle}
            </h2>
            <p style={{
                color: '#ffffff',
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: 'clamp(12px, 2vw, 14px)',
                marginBottom: '20px',
            }}>
                {chartDescription}
            </p>
            <div style={{
                position: 'relative',
                height: '500px', // Fixed height, adjust as needed
                width: '100%',
            }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default Stock_Chart;