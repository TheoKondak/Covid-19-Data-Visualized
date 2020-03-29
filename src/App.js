import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  state = {
    chartData: {
      labels: [],
      datasets: [{
        label: 'Confirmed Cases',

        data: [],

        backgroundColor: 'rgba(255, 99, 132, 0.6)',

      },
    
      {
        label: 'Deaths',

        data: [],

        backgroundColor: 'rgba(255, 99, 132, 0.6)',

      },

      {
        label: 'Recovered',

        data: [],

        backgroundColor: 'rgba(255, 99, 132, 0.6)',

      }
    
    ],

      options: {
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      },

      dimensions: {
        width: 1800,
        height: 950
      }

    }
  }


  componentDidMount() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pomber.github.io/covid19/timeseries.json');
    xhr.responseType = 'json';
    xhr.onload = () => {

      let country = [...xhr.response.Greece];


      let confirmedCases = [];
      let deaths = [];
      let recovered = [];
      let labels = [];
      let backgroundColors = [];
      let i = 0;

      for (let [key, value] of Object.entries(country)) {
        if (value.confirmed != 0){
          confirmedCases[i] = value.confirmed;
          deaths[i] = value.deaths;
          recovered[i] = value.recovered;
          backgroundColors[i] = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.2" + ")";
          labels[i] = value.date;
          i += 1;
        }
      }
      console.log(backgroundColors);

      this.setState({
        chartData: {

          labels: labels,

          datasets: [{
            label: 'Confirmed Cases',

            data: confirmedCases,

            backgroundColor: backgroundColors,

          },
        
          {
            label: 'Deaths',

            data: deaths,

            backgroundColor: backgroundColors,

          },

          {
            label: 'Recovered',

            data: recovered,

            backgroundColor: backgroundColors,

          }
        
        ],

          options: {
            scales: {
              yAxes: [{
                stacked: true
              }]
            }
          },

          dimensions: {
            width: 1800,
            height: 950
          }

        }

      })
    };
    xhr.send();
  }



  render() {


    return (
      <div className="App">
       
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
           COVID-19 Cases in Greece
        </h1>



<p>Total Cases Line Chart</p>
    
          <Chart
          
            type='Line'
            width={this.state.chartData.dimensions.width}
            height={this.state.chartData.dimensions.height}
            backgroundcolor={this.state.chartData.datasets[0].backgroundColor}
            label={this.state.chartData.datasets[0].label}
            data={this.state.chartData}
            options={{
              
              maintainAspectRatio: false
            }}/>



       
      </div>
    );
  }

}

export default App;
