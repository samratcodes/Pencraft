import React from 'react';
import { Chart } from 'react-google-charts';
import './Analytics.css';

const Analytics = () => {
  
  // Data for Posts, Likes, and Categories (example data)
  const postsData = [
    ['Month', 'Posts'],
    ['January', 15],
    ['February', 20],
    ['March', 25],
    ['April', 18],
    ['May', 22],
    ['June', 30],
    ['July', 28],
    ['August', 35],
    ['September', 25],
    ['October', 20],
    ['November', 15],
    ['December', 18],
  ];

  const likesData = [
    ['Month', 'Likes'],
    ['January', 120],
    ['February', 140],
    ['March', 160],
    ['April', 110],
    ['May', 180],
    ['June', 200],
    ['July', 150],
    ['August', 210],
    ['September', 170],
    ['October', 160],
    ['November', 140],
    ['December', 130],
  ];

  const categoriesData = [
    ['Category', 'Posts'],
    ['Technology', 30],
    ['Health', 25],
    ['Lifestyle', 20],
    ['Travel', 15],
    ['Food', 10],
    ['Education', 18],
    ['Fitness', 12],
    ['Fashion', 8],
    ['Science', 14],
    ['Art', 10],
  ];

  return (
    <div className="analytics-container">
      <h2>Monthly Analytics</h2>
      <div className="charts">
      <div className="chart-item">
          <h3>Post Categories Distribution</h3>
          <Chart
            width={'100%'}
            height={'500px'}
            chartType="PieChart"
            data={categoriesData}
            options={{
              title: 'Distribution of Posts by Category',
              pieHole: 0.4,
              colors: ['#3498db', '#2ecc71', '#f1c40f', '#e74c3c', '#9b59b6', '#34495e', '#e67e22', '#95a5a6', '#1abc9c', '#7f8c8d'],
            }}
          />
        </div>
        <div className="chart-item">
          <h3>Posts Per Month</h3>
          <Chart
            width={'100%'}
            height={'500px'}
            chartType="LineChart"
            data={postsData}
            options={{
              title: 'Number of Posts per Month',
              curveType: 'function',
              legend: { position: 'bottom' },
              colors: ['#1b9e77'],
              hAxis: { title: 'Month' },
              vAxis: { title: 'Posts' },
            }}
          />
        </div>
        <div className="chart-item">
          <h3>Likes Per Month</h3>
          <Chart
            width={'100%'}
            height={'500px'}
            chartType="LineChart"
            data={likesData}
            options={{
              title: 'Number of Likes per Month',
              curveType: 'function',
              legend: { position: 'bottom' },
              colors: ['#e67e22'],
              hAxis: { title: 'Month' },
              vAxis: { title: 'Likes' },
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Analytics;
