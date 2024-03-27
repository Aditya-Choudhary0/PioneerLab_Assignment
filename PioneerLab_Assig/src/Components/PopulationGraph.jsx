import React, { useState, useEffect } from 'react';
import { Chart as Chartjs } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import './Navbar.css';

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await response.json();
        setPopulationData(data.data);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  const renderGraph = () => {
    if (!populationData) return null;

    const years = populationData.map(item => item.Year).reverse();
    const populations = populationData.map(item => item.Population / 10000000).reverse();

    const data = {
      labels: years,
      datasets: [
        {
          label: 'Population in Crores',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(88, 177, 90, 1)',
          borderColor: 'rgba(88, 177, 90, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(67,142,68,255)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
          data: populations,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Year',
          },
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: value => value + 'cr',
          },
        }],
      },
    };

    return <Line data={data} options={options} />;
  };

  return (
    <div className="population-graph">
      <h2>Population Data for United States</h2>
      <div className="graph-container" >{renderGraph()}</div>

    </div>
  );
};

export default PopulationGraph;
