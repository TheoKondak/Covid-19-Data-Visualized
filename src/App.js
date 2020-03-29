import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import Chart from './components/Chart';
import Card from './components/Casescard';

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

        legend: {
          display: false
        },

        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
        },
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      },

      dimensions: {
        width: 1800,
        height: 340
      }

    },


    cardsData: {
      totalCases: 0,
      activeCases: 0,
      deceased: 0,
      discharged: 0
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
        if (value.confirmed != 0) {
          confirmedCases[i] = value.confirmed;
          deaths[i] = value.deaths;
          recovered[i] = value.recovered;
          backgroundColors[i] = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.2" + ")";
          labels[i] = value.date;
          i += 1;
        }
      }

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

            legend: {
              display: false
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.yLabel;
                }
              }
            },
            scales: {
              yAxes: [{
                stacked: true
              }]
            }
          },

          dimensions: {
            width: 1800,
            height: 340
          }

        },


        cardsData: {
          totalCases: confirmedCases[confirmedCases.length-1],
          activeCases: confirmedCases[confirmedCases.length-1] - recovered[recovered.length-1] - deaths[deaths.length-1],
          deceased: deaths[deaths.length-1],
          discharged: recovered[recovered.length-1],
          percentageActiveCases: 2
        }
      })
    };
    xhr.send();
  }



  render() {
console.log((this.state.cardsData.activeCases - (this.state.cardsData.deceased + this.state.cardsData.discharged)));

    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          COVID-19 Cases in Greece
        </h1>



        <p>Total Cases Line Chart</p>

       
        <div className='cardsContainer'>
          <Card
            title="Total Cases"
            metrics={this.state.cardsData.totalCases}
            class="card totalCases"
          />

          <Card
            title="Active Cases"
            metrics={this.state.cardsData.activeCases}
            percentage={( this.state.cardsData.activeCases * 100 / this.state.cardsData.totalCases).toFixed(2)}
            class="card activeCases"
          />

          <Card
            title="Deceased"
            metrics={this.state.cardsData.deceased}
            percentage={( this.state.cardsData.deceased * 100 / this.state.cardsData.totalCases).toFixed(2)}
            class="card deceased"
          />

          <Card
            title="Discharged"
            metrics={this.state.cardsData.discharged}
            percentage={(( this.state.cardsData.discharged * 100 / this.state.cardsData.totalCases).toFixed(2))}
            class="card discharged"
          />

        </div>

        <Chart

type='Line'
width={this.state.chartData.dimensions.width}
height={this.state.chartData.dimensions.height}
backgroundcolor={this.state.chartData.datasets[0].backgroundColor}
label={this.state.chartData.datasets[0].label}
data={this.state.chartData}
options={{
  legend: {
    display: false
  },

  tooltips: {
    callbacks: {
      label: function (tooltipItem) {
        return tooltipItem.yLabel;
      }
    }
  },
  maintainAspectRatio: false
}} />


      </div>
    );
  }

}

export default App;
