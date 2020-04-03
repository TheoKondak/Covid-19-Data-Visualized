import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Chart from './components/Chart/Chart';
import Card from './components/Casecards/Casescard';
import Countrylist from './components/Countrylist/Countrylist.js';

class App extends Component {
  state = {


    chartDataTotalCases: {

      labels: [],

      datasets: [
        {
          label: 'Confirmed Cases',
          data: [],
          backgroundColor: 'rgba(65,131,196,0.9)',
          hidden: true
        }],

      options: {
        title: {
          display: true,
          text: 'Confirmed Cases'
        },
      },
      // dimensions: {
      //   width: 1800,
      //   height: 340
      // }

    },

    chartDataDeathsVsRecovered: {
      labels: [],
      datasets: [{
        label: 'Confirmed Cases',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },

      {
        label: 'Deaths',
        data: [],
        backgroundColor: 'rgba(253, 179, 175, 0.8)',
      },

      {
        label: 'Recovered',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      }],

      options: {
        title: {
          display: true,
          text: 'Recoveries VS Deaths'
        },


      },

      // dimensions: {
      //   width: 1800,
      //   height: 340
      // }
    },

    chartDataActiveCasesLogarithmic: {

      labels: [],

      datasets: [
        {
          label: 'Confirmed Cases',
          data: [],
          backgroundColor: 'rgba(65,131,196,0.4)',
          hidden: false
        }],

      options: {
        title: {
          display: true,
          text: 'Confirmed Cases'
        },
        scales: {
          yAxes: [{
            type: 'logarithmic'
          }]
        }
      },
      // dimensions: {
      //   width: 1800,
      //   height: 340
      // }

    },

    cardsData: {
      totalCases: 0,
      activeCases: 0,
      deceased: 0,
      discharged: 0
    },

    // countryList: {
    //   countryId: 'countryId',
    //   countryName: 'countryList',
    //   countrydata: 'contryData'
    // }

    countryList: []

  }


  componentDidMount() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pomber.github.io/covid19/timeseries.json');
    xhr.responseType = 'json';
    xhr.onload = () => {

      let defaultCountry = [...xhr.response.US];
      let countryList = xhr.response;
      let countryId = [0];
      let confirmedCases = [];
      let activeCases = [];
      let deaths = [];
      let recovered = [];
      let labels = [];
      let backgroundColors = [];
      let dataPosition = 0;

      // Create Country List Object with ID, Country Name , Country Data
      let countryListArray = [];
      let itterator = 0;
      for (let countryName in countryList) {
        countryListArray.push({ countryId: itterator, countryName: countryName, countryData: countryList[countryName] });
        itterator++
      }

      // Fetched Data Calculations
      // Calculate for Selected Country
      for (let [key, value] of Object.entries(defaultCountry)) {
        if (value.recovered != 0 || value.deaths != 0) { // Start Displaying Since the first Death OR the first recovered occured
          confirmedCases[dataPosition] = value.confirmed;
          deaths[dataPosition] = value.deaths;
          recovered[dataPosition] = value.recovered;
          // backgroundColors[dataPosition] = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.2" + ")";
          labels[dataPosition] = value.date;
          dataPosition += 1;
        }
      }

      this.setState({
        //Set Default Country State
        chartDataTotalCases: {

          labels: labels,
      
          datasets: [
            {
              label: 'Confirmed Cases',
              data: confirmedCases,
              backgroundColor: 'rgba(65,131,196,0.4)',
              hidden: false
            }],
      
          options: {
            title: {
              display: true,
              text: 'Confirmed Cases'
            },
          }
        },
      
        chartDataDeathsVsRecovered: {
      
          labels: labels,
      
          datasets: [
            {
              label: 'Confirmed Cases',
              data: confirmedCases,
              backgroundColor: 'rgba(65,131,196,0.4)',
              hidden: true
            },
      
            {
              label: 'Deaths',
              data: deaths,
              // backgroundColor: backgroundColors,
              backgroundColor: 'rgba(249, 54, 80, 0.2)'
            },
      
            {
              label: 'Recovered',
              data: recovered,
              // backgroundColor: backgroundColors,
              backgroundColor: 'rgba(249, 254, 239, 0.9)'
            }
      
          ],
          options: {
            title: {
              display: true,
              text: 'Recoveries VS Deaths'
            },
          },
      
        },
      
        chartDataActiveCasesLogarithmic: {
      
          labels: labels,
      
          datasets: [
            {
              label: 'Active Cases (Logarithmic)',
              data: activeCases,
              backgroundColor: 'rgba(65,131,196,0.4)',
              hidden: false
            }],
      
          options: {
            title: {
              display: true,
              text: 'Confirmed Cases'
            },
            scales: {
              yAxes: [{
                type: 'logarithmic'
              }]
            }
          },
      
        },
      
        cardsData: {
          totalCasesWorldWide: 1,
          activeCasesWorldWide: 1,
          deceasedWordlWide: 1,
          dischargedWorldWide: 1,
          totalCases: confirmedCases[confirmedCases.length - 1],
          activeCases: confirmedCases[confirmedCases.length - 1] - recovered[recovered.length - 1] - deaths[deaths.length - 1],
          deceased: deaths[deaths.length - 1],
          discharged: recovered[recovered.length - 1],
          newCases: confirmedCases[confirmedCases.length-1] - confirmedCases[confirmedCases.length-2],
          percentageActiveCases: 2
        },

        countryName: 'USA',
        countryList: countryListArray
      })
    };
    xhr.send();
  }

  changeCountryHandler = (countryId, countryName, countryData) => {
    
    
    let confirmedCases = [];
    let activeCases = [];
    let deaths = [];
    let recovered = [];
    let labels = [];
    let backgroundColors = [];
    let dataPosition = 0;

    
      // Fetched Data Calculations
      // Calculate for Selected Country
      for (let [key, value] of Object.entries(countryData)) {
        if (value.recovered != 0 || value.deaths != 0) { // Start Displaying Since the first Death OR the first recovered occured
          confirmedCases[dataPosition] = value.confirmed;
          deaths[dataPosition] = value.deaths;
          recovered[dataPosition] = value.recovered;
          // backgroundColors[dataPosition] = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.2" + ")";
          labels[dataPosition] = value.date;
          // activeCases[dataPosition] =  confirmedCases[dataPosition] - (recovered[dataPosition] + deaths[dataPosition]);
          dataPosition += 1;
        }
      }

this.setState({

  chartDataTotalCases: {

    labels: labels,

    datasets: [
      {
        label: 'Confirmed Cases',
        data: confirmedCases,
        backgroundColor: 'rgba(65,131,196,0.4)',
        hidden: false
      }],

    options: {
      title: {
        display: true,
        text: 'Confirmed Cases'
      },
    }
  },

  chartDataDeathsVsRecovered: {

    labels: labels,

    datasets: [
      {
        label: 'Confirmed Cases',
        data: confirmedCases,
        backgroundColor: 'rgba(65,131,196,0.4)',
        hidden: true
      },

      {
        label: 'Deaths',
        data: deaths,
        // backgroundColor: backgroundColors,
        backgroundColor: 'rgba(249, 54, 80, 0.2)'
      },

      {
        label: 'Recovered',
        data: recovered,
        // backgroundColor: backgroundColors,
        backgroundColor: 'rgba(249, 254, 239, 0.9)'
      }

    ],
    options: {
      title: {
        display: true,
        text: 'Recoveries VS Deaths'
      },
    },

  },

  chartDataActiveCasesLogarithmic: {

    labels: labels,

    datasets: [
      {
        label: 'Active Cases (Logarithmic)',
        data: activeCases,
        backgroundColor: 'rgba(65,131,196,0.4)',
        hidden: false
      }],

    options: {
      title: {
        display: true,
        text: 'Confirmed Cases'
      },
      scales: {
        yAxes: [{
          type: 'logarithmic'
        }]
      }
    },

  },

  cardsData: {
    totalCasesWorldWide: 1,
    activeCasesWorldWide: 1,
    deceasedWordlWide: 1,
    dischargedWorldWide: 1,
    totalCases: confirmedCases[confirmedCases.length - 1],
    activeCases: confirmedCases[confirmedCases.length - 1] - recovered[recovered.length - 1] - deaths[deaths.length - 1],
    deceased: deaths[deaths.length - 1],
    discharged: recovered[recovered.length - 1],
    newCases: confirmedCases[confirmedCases.length-1] - confirmedCases[confirmedCases.length-2],
    percentageActiveCases: 2
  },

  countryName: countryName

})

  }

  render() {

    return (
      <div className="App">

        
      <div className='mainContainer'>
      
              <div className='sidebar countryList'>
      
                {this.state.countryList.map(country => {
                  return <Countrylist
                    key={country.countryId}
                    click={() => this.changeCountryHandler(country.countryId, country.countryName, country.countryData)}
                    countryName={country.countryName}
                    countryData={country.countryData}
                  />
                })
                }
      
              </div>
      
              <div className='chartContainer'>
      
              <img src={logo} className="App-logo" alt="logo" />
              <h1>
                COVID-19 Cases in {this.state.countryName}
              </h1>
      
                <div className='cardsContainer'>
                  <Card
                    title="Total Cases"
                    metrics={this.state.cardsData.totalCases}
                    class="card totalCases"
                  />

                  <Card
                    title="New Cases in the past 24 Hours"
                    metrics={this.state.cardsData.newCases}
                    percentage={(this.state.cardsData.newCases * 100 / this.state.cardsData.totalCases).toFixed(2)}
                    class="card newCases"
                  />
      
                  <Card
                    title="Active Cases"
                    metrics={this.state.cardsData.activeCases}
                    percentage={(this.state.cardsData.activeCases * 100 / this.state.cardsData.totalCases).toFixed(2)}
                    class="card activeCases"
                  />
      
                  <Card
                    title="Deceased"
                    metrics={this.state.cardsData.deceased}
                    percentage={(this.state.cardsData.deceased * 100 / this.state.cardsData.totalCases).toFixed(2)}
                    class="card deceased"
                  />
      
                  <Card
                    title="Discharged"
                    metrics={this.state.cardsData.discharged}
                    percentage={((this.state.cardsData.discharged * 100 / this.state.cardsData.totalCases).toFixed(2))}
                    class="card discharged"
                  />
      
                </div>
      
               
      
      
                <div className='chartsContainer'>
      
                  <Chart
                    type='Line'
                    // width={this.state.chartDataDeathsVsRecovered.dimensions.width}
                    // height={this.state.chartDataDeathsVsRecovered.dimensions.height}
                    backgroundcolor={this.state.chartDataTotalCases.datasets.backgroundColor}
                    label={this.state.chartDataTotalCases.datasets.label}
                    data={this.state.chartDataTotalCases}
                    options={{
                      legend: {
                        title: {
                          display: true,
                          text: 'Recoveries VS Deaths'
                        }
                      },
      
                      tooltips: {
                        callbacks: {
                          label: function (tooltipItem) {
                            return tooltipItem.yLabel;
                          }
                        }
                      }
      
                    }} />
      
      
                  <Chart
                    type='Line'
                    // width={this.state.chartDataDeathsVsRecovered.dimensions.width}
                    // height={this.state.chartDataDeathsVsRecovered.dimensions.height}
                    backgroundcolor={this.state.chartDataDeathsVsRecovered.datasets.backgroundColor}
                    label={this.state.chartDataDeathsVsRecovered.datasets.label}
                    data={this.state.chartDataDeathsVsRecovered}
                    options={{
                      legend: {
                        title: {
                          display: true,
                          text: 'Recoveries VS Deaths'
                        }
                      },
      
                      tooltips: {
                        callbacks: {
                          label: function (tooltipItem) {
                            return tooltipItem.yLabel;
                          }
                        }
                      }
      
                    }} />
                </div>
      
                <div className='chartsContainer'>
      
                  <Chart
                    type='Line'
                    // width={this.state.chartDataDeathsVsRecovered.dimensions.width}
                    // height={this.state.chartDataDeathsVsRecovered.dimensions.height}
                    backgroundcolor={this.state.chartDataActiveCasesLogarithmic.datasets.backgroundColor}
                    label={this.state.chartDataActiveCasesLogarithmic.datasets.label}
                    data={this.state.chartDataActiveCasesLogarithmic}
                    options={this.state.chartDataActiveCasesLogarithmic.options} />
                </div>
      
                <Chart
                  type='Bar'
                  // width={this.state.chartDataDeathsVsRecovered.dimensions.width}
                  // height={this.state.chartDataDeathsVsRecovered.dimensions.height}
                  backgroundcolor={this.state.chartDataDeathsVsRecovered.datasets.backgroundColor}
                  label={this.state.chartDataDeathsVsRecovered.datasets.label}
                  data={this.state.chartDataDeathsVsRecovered}
                  options={{
                    legend: {
                      title: {
                        display: true,
                        text: 'Recoveries VS Deaths'
                      }
                    },
      
                    tooltips: {
                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    }
      
                  }} />
              </div>
      
      </div>
            </div> //App
    );
  }

}

export default App;
