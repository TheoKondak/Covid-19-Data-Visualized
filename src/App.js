import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// BurgerMenu
import Burgermenu from './components/Burgermenu/Burgermenu';

// Components
import Chart from './components/Chart/Chart';
import Card from './components/Casecards/Casescard';
import Countrylist from './components/Countrylist/Countrylist';


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
        }
      }
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
    },

    cardsData: {
      totalCases: 0,
      activeCases: 0,
      deceased: 0,
      discharged: 0,
      newCases: 0,
      percentageActiveCases: 0
    },

    countryList: []
  }



  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pomber.github.io/covid19/timeseries.json');
    xhr.responseType = 'json';
    xhr.onload = () => {

      let defaultCountry = [...xhr.response.US];
      let countryList = xhr.response;
      let countryListArray = [];
      let confirmedCases = [];
      let activeCases = [];
      let deaths = [];
      let recovered = [];
      let labels = [];
      let dataPosition = 0;
      let itterator = 0;

      // Create Country List Object with ID, Country Name , Country Data
      for (let countryName in countryList) {
        countryListArray.push({ countryId: itterator, countryName: countryName, countryData: countryList[countryName] });
        itterator++
      }

      // Fetched Data Calculations
      // Calculate for Selected Country
      for (let [key, value] of Object.entries(defaultCountry)) {
        if (value.recovered !== 0 || value.deaths !== 0) { // Start Displaying Since the first Death OR the first recovered occured
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
          newCases: confirmedCases[confirmedCases.length - 1] - confirmedCases[confirmedCases.length - 2],
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
    let dataPosition = 0;


    // Fetched Data Calculations
    // Calculate for Selected Country
    for (let [key, value] of Object.entries(countryData)) {
      // if (value.recovered !== 0 || value.deaths !== 0) { // Start Displaying Since the first Death OR the first recovered occured
      confirmedCases[dataPosition] = value.confirmed;
      deaths[dataPosition] = value.deaths;
      recovered[dataPosition] = value.recovered;
      // backgroundColors[dataPosition] = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.2" + ")";
      labels[dataPosition] = value.date;
      // activeCases[dataPosition] =  confirmedCases[dataPosition] - (recovered[dataPosition] + deaths[dataPosition]);
      dataPosition += 1;
      // }

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
        newCases: confirmedCases[confirmedCases.length - 1] - confirmedCases[confirmedCases.length - 2],
        percentageActiveCases: 2
      },

      countryName: countryName
    })

  }

  render() {


    // Burger Menu Styling
    const contentStyle = {
      background: "rgba(41,55,55,0.1)",
      width: "80%",
      border: "none"
    };


    return (
      <div className="fluid-container app-container ">



        {/* Header */}
        <div className="row col-8 header mx-auto mb-5">
          <div className='logo-container'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1>COVID-19 Cases in {this.state.countryName}</h1>
          <small>Last Update: {this.state.chartDataTotalCases.labels[this.state.chartDataTotalCases.labels.length - 1]}</small>
        </div>


        {/* Cards */}
        <div className='row col-12 mx-auto mb-4 cardsContainer row'>

          <div className='col-2 cardContainer'>
            <Card
              title="Total Cases"
              metrics={this.state.cardsData.totalCases}
              class="card totalCases"

              // Chart
              type='Line'
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

              }}

            >   </Card>
          </div>

          <div className='col-2 cardContainer'>
            <Card
              title="New Cases"
              metrics={this.state.cardsData.newCases}
              percentage={(this.state.cardsData.newCases * 100 / this.state.cardsData.totalCases).toFixed(2)}
              class="card newCases"
            />
          </div>

          <div className='col-2 cardContainer'>
            <Card
              title="Active Cases"
              metrics={this.state.cardsData.activeCases}
              percentage={(this.state.cardsData.activeCases * 100 / this.state.cardsData.totalCases).toFixed(2)}
              class="card activeCases"
            />
          </div>

          <div className='col-2 cardContainer'>
            <Card
              title="Deceased"
              metrics={this.state.cardsData.deceased}
              percentage={(this.state.cardsData.deceased * 100 / this.state.cardsData.totalCases).toFixed(2)}
              class="card deceased"
            />
          </div>

          <div className='col-2 cardContainer'>
            <Card
              title="Discharged"
              metrics={this.state.cardsData.discharged}
              percentage={((this.state.cardsData.discharged * 100 / this.state.cardsData.totalCases).toFixed(2))}
              class="card discharged"
            />
          </div>

        </div>


        {/* Charts */}
        <div className='row col-12 chartsContainer'>

          <Chart
            type='Line'
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

        {/* Charts */}
        <div className='row col-12 chartsContainer'>
          <Chart
            type='Line'
            backgroundcolor={this.state.chartDataActiveCasesLogarithmic.datasets.backgroundColor}
            label={this.state.chartDataActiveCasesLogarithmic.datasets.label}
            data={this.state.chartDataActiveCasesLogarithmic}
            options={this.state.chartDataActiveCasesLogarithmic.options} />


          <Chart
            type='Bar'
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

        {/* Burger Menu */}
        <div className='cardContainer countryList'>
          <Burgermenu
            countryList={this.state.countryList}
            click={this.changeCountryHandler}
          />
        </div>

        
{/* Footer */}
<div className='container footer'>

<div className='row'>
<hr className='col-12 footer-hr' />
<div className='col-12 footer-content'>
          <p>Find the code of the project on <a href='https://github.com/TheoKondak/covid-19-cata-visualized' target='_blank' title='Find project on GitHub'>GitHub</a></p>
          <p>This project is created with
            <br/> 
            <a href='https://github.com/facebook/create-react-app#readme' target='_blank' title='React Chart js 2'>React</a>
            <br/>
            <a href='https://github.com/jerairrest/react-chartjs-2' target='_blank' title='React Chart js 2'>React Chart js 2</a>
            <br/>
            <a href='https://github.com/yjose/reactjs-popup-burger-menu' target='_blank' title='React JS popup burger menu'>React js popup burger menu</a>
          </p>
          <p>
            Share your computational power with scientific organizations and contribute to the fight against Covid-19. 
            <a href='https://foldingathome.org/2020/02/27/foldinghome-takes-up-the-fight-against-covid-19-2019-ncov/' target='_blank' title='Fight Covid-19 with Folding @home'> Learn more</a>
          </p>
</div>
            
</div>



        </div>

      </div> //App



    );
  }
}

export default App;