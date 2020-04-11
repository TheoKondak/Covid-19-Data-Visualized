import React, { Component } from 'react';
import logo from './logo.png';
import './App.scss';
import { usePopper } from 'react-popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, OverlayTrigger, Popover, PopoverTitle, PopoverContent } from 'react-bootstrap';

// BurgerMenu
import Burgermenu from './components/Burgermenu/Burgermenu';

// Components
import Chart from './components/Chart/Chart';
import Card from './components/Casecards/Casescard';
// import PopoverCustom from './components/Popover/Popover';


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

    cardsChartsData: {

      cardsChartsNewCases: {
        labels: '',
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: 'rgba(220,53,69,0.9)'
          }]
      },

      cardsChartsActiveCases: {
        labels: '',
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: 'rgba(220,53,69,0.9)'
          }]
      },

      cardsChartsDeaths: {
        labels: '',
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: 'rgba(220,53,69,0.9)'
          }]
      },

      cardsChartsRecovered: {
        labels: '',
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: 'rgba(220,53,69,0.9)'
          }]
      }

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
      let activeCasesLogarithmic = [];
      let deaths = [];
      let recovered = [];
      let labels = [];
      let dataPosition = 0;
      let cardChartConfirmed = [];
      let cardsChartNewCases = [];
      let cardsChartActiveCases = [];
      let cardsChartDeaths = [];
      let cardsChartRecovered = [];
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
          labels[dataPosition] = value.date;

          activeCasesLogarithmic[dataPosition] = value.confirmed - (value.deaths + value.recovered);
          // Calculations for Charts for cards
          cardChartConfirmed = confirmedCases[dataPosition] - confirmedCases[dataPosition - 1];
          cardsChartNewCases[dataPosition] = confirmedCases[dataPosition] - confirmedCases[dataPosition - 1];
          cardsChartActiveCases[dataPosition] = value.confirmed - (value.deaths + value.recovered);
          cardsChartDeaths[dataPosition] = deaths[dataPosition] - deaths[dataPosition - 1];
          cardsChartRecovered[dataPosition] = recovered[dataPosition] - recovered[dataPosition - 1];
          dataPosition += 1;
        }
      }

      console.log(cardsChartRecovered);

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
              data: activeCasesLogarithmic,
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

        cardsChartsData: {

          cardsChartsNewCases: {
            labels: labels,
            datasets: [
              {
                label: '',
                data: cardsChartNewCases,
                backgroundColor: () => {
                  return (cardsChartNewCases[cardsChartNewCases.length - 1] > cardsChartNewCases[cardsChartNewCases.length - 2]) ? 'rgba(220,53,69,0.9)' : 'rgba(40, 167, 69, 0.9)';
                }
              }]
          },

          cardsChartsActiveCases: {
            labels: labels,
            datasets: [
              {
                label: '',
                data: cardsChartActiveCases,
                backgroundColor: () => {
                  return (cardsChartActiveCases[cardsChartActiveCases.length - 1] > cardsChartActiveCases[cardsChartActiveCases.length - 2]) ? 'rgba(220,53,69,0.9)' : 'rgba(40, 167, 69, 0.9)';
                }
              }]
          },
          cardsChartsDeaths: {
            labels: labels,
            datasets: [
              {
                label: '',
                data: cardsChartDeaths,
                backgroundColor: () => {
                  return (cardsChartDeaths[cardsChartDeaths.length - 1] > cardsChartDeaths[cardsChartDeaths.length - 2]) ? 'rgba(220,53,69,0.9)' : 'rgba(40, 167, 69, 0.9)';
                }
              }]
          },

          cardsChartsRecovered: {
            labels: labels,
            datasets: [
              {
                label: '',
                data: cardsChartRecovered,
                backgroundColor: () => {
                  return (cardsChartRecovered[cardsChartRecovered.length - 1] > cardsChartRecovered[cardsChartRecovered.length - 2]) ? 'rgba(40, 167, 69, 0.9)' : 'rgba(220,53,69,0.9)';
                }
              }]
          }
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
    let activeCasesLogarithmic = [];
    let cardsChartNewCases = [];
    let cardsChartActiveCases = [];
    let cardsChartDeaths = [];
    let cardsChartRecovered = [];
    let dataPosition = 0;

    // Fetched Data Calculations
    // Calculate for Selected Country
    for (let [key, value] of Object.entries(countryData)) {
      if (value.recovered !== 0 || value.deaths !== 0) { // Start Displaying Since the first Death OR the first recovered occured
        confirmedCases[dataPosition] = value.confirmed;
        deaths[dataPosition] = value.deaths;
        recovered[dataPosition] = value.recovered;
        labels[dataPosition] = value.date;

        activeCasesLogarithmic[dataPosition] = value.confirmed - (value.deaths + value.recovered);
        // Calculations for Charts for cards
        cardsChartNewCases[dataPosition] = confirmedCases[dataPosition] - confirmedCases[dataPosition - 1];
        cardsChartActiveCases[dataPosition] = value.confirmed - (value.deaths + value.recovered);;
        cardsChartDeaths[dataPosition] = deaths[dataPosition] - deaths[dataPosition - 1];
        cardsChartRecovered[dataPosition] = recovered[dataPosition] - recovered[dataPosition - 1]

        dataPosition += 1;
      }
    }



    this.setState({

      chartDataConfirmedCases: {

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
            data: cardsChartRecovered,
            // backgroundColor: backgroundColors,
            backgroundColor: 'rgba(249, 254, 239, 0.9)'
          }

        ]

      },

      chartDataActiveCasesLogarithmic: {

        labels: labels,

        datasets: [
          {
            label: 'Active Cases (Logarithmic)',
            data: activeCasesLogarithmic,
            backgroundColor: 'rgba(65,131,196,0.4)',
            hidden: false
          }]

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


      cardsChartsData: {

        cardsChartsNewCases: {
          labels: labels,
          datasets: [
            {
              label: 'New Cases',
              data: cardsChartNewCases,
              backgroundColor: () => {
                return (cardsChartNewCases[cardsChartNewCases.length - 1] > cardsChartNewCases[cardsChartNewCases.length - 2]) ? 'rgba(220,53,69,0.9)' : 'rgba(40, 167, 69, 0.9)';
              }
            }]
        },

        cardsChartsActiveCases: {
          labels: labels,
          datasets: [
            {
              label: 'Active Cases',
              data: cardsChartActiveCases,
              backgroundColor: () => {
                return (cardsChartActiveCases[cardsChartActiveCases.length - 1] > cardsChartActiveCases[cardsChartActiveCases.length - 2]) ? 'rgba(220,53,69,0.9)' : 'rgba(40, 167, 69, 0.9)';
              }
            }]
        },

        cardsChartsDeaths: {
          labels: labels,
          datasets: [
            {
              label: 'Deaths',
              data: cardsChartDeaths,
              backgroundColor: () => {
                return (cardsChartDeaths[cardsChartDeaths.length - 1] > cardsChartDeaths[cardsChartDeaths.length - 2]) ? 'rgba(220,53,69,0.9)' : 'rgba(40, 167, 69, 0.9)';
              }
            }]
        },

        cardsChartsRecovered: {
          labels: labels,
          datasets: [
            {
              label: 'Recovered',
              data: cardsChartRecovered,
              backgroundColor: () => {
                return (cardsChartRecovered[cardsChartRecovered.length - 1] > cardsChartRecovered[cardsChartRecovered.length - 2]) ? 'rgba(40, 167, 69, 0.9)' : 'rgba(220,53,69,0.9)';
              }
            }]
        }

      },

      countryName: countryName
    })

  }

  render() {



    return (
      <div className="container-fluid app-container ">

        {/* Header */}
        <div className="row col-12 header mx-auto mb-5" align="center">

          <div className='col-12 row'>
            <div className='col-md-4 logo-container'>

            </div>
            <div className='col-md-5 title'>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Covid-19 Data Visualized</h1>
              <small>v0.04</small>
            </div>
          </div>
        </div>

        {/* Subheader */}
        <div className='row subHeader'>
          <div className='col mb-4 mt-4'>
            <h3>{this.state.countryName}</h3>
            <small>Last Update: {this.state.chartDataTotalCases.labels[this.state.chartDataTotalCases.labels.length - 1]}</small>
          </div>
        </div>


        {/* Cards */}
        <div className='row col-md-12 mx-auto mb-4 cardsContainer'>


          <div className='col-lg-2 mb-2 cardContainer'  >

            <div className='popoverTotalCases'>
              <OverlayTrigger
                trigger="click"
                rootClose
                key={'bottom'}
                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <PopoverTitle as="h6"><strong>Total number of cases in {this.state.countryName}</strong></PopoverTitle>
                    <PopoverContent>
                      <p>The total number of cases occured in {this.state.countryName}. </p>
                      <p>Each column in the chart, represents one day.</p>
                      <p>If the total number of cases show an upward trend, the bars in the  chart will be displayed in red color. If the total number of cases show an downward trend, then the bars will be displayed in green color. </p> <p className='popoverNote'>Note:
                        <small> This metric is based on the tests performed in the specific country. In most countries the tests are being performed only to patients that show acute symptoms. The actual number of total cases is much higher, but they present mild symptoms.</small></p>
                    </PopoverContent>
                  </Popover>
                }
              >
                <div variant="secondary">

                  <Card
                    title="Total Cases"
                    metrics={this.state.cardsData.totalCases}
                    class="card totalCases"

                    // Chart
                    type='Bar'
                    data={this.state.chartDataTotalCases}
                    options={{
                      legend: {
                        display: false
                      },

                      scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: false }],
                      },

                      elements: {
                        point: {
                          radius: 1
                        }
                      },

                      tooltips: {
                        enabled: false,

                      },
                      maintainAspectRatio: false
                    }}

                  />


                </div>
              </OverlayTrigger>{' '}
            </div>

          </div>

          <div className='col-lg-2 mb-2 cardContainer' >

            <div className='popoverNewcases'>
              <OverlayTrigger
                trigger="click"
                rootClose
                key={'bottom'}
                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <PopoverTitle as="h6"><strong>Total number of new cases recorded in {this.state.countryName}</strong></PopoverTitle>
                    <PopoverContent>
                      <p>
                        The total number of new cases, as long as they are reported (usually occured in the past 24 hours).
                      </p>
                      <p>The higher the percentage value, the worse is the situation in the country regarding the spread of the virus. A good percentage should be considered a percentage around 4% for most countries.</p>
                      <p>Each column in the chart, represents one day.</p>
                      <p>If the number of new cases show an upward trend, the bars in the  chart will be displayed in red color. If the number of new cases show an downward trend, then the bars will be displayed in green color. </p> <p className='popoverNote'>Note:
                        <small> This metric is based on the tests performed in the specific country. In most countries the tests are being performed only to patients that show acute symptoms. The actual number of total cases is much higher, but they present mild symptoms.</small></p>
                    </PopoverContent>
                  </Popover>
                }
              >
                <div variant="secondary">

                  <Card
                    title="New Cases"
                    metrics={this.state.cardsData.newCases}
                    percentage={(this.state.cardsData.newCases * 100 / this.state.cardsData.totalCases).toFixed(2)}
                    class="card newCases"

                    // Chart
                    type='Bar'
                    labels='New Cases Card Chart'
                    data={this.state.cardsChartsData.cardsChartsNewCases}
                    options={{
                      legend: {
                        display: false
                      },

                      scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: false }],
                      },

                      elements: {
                        point: {
                          radius: 0
                        }
                      },

                      tooltips: {
                        enabled: false,
                      },
                      maintainAspectRatio: false
                    }}
                  />

                </div>
              </OverlayTrigger>{' '}
            </div>


          </div>

          <div className='col-lg-2 mb-2 cardContainer'>

            <div className='popoverActiveCases'>
              <OverlayTrigger
                trigger="click"
                rootClose
                key={'bottom'}
                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <PopoverTitle as="h6"><strong>The number of active cases in {this.state.countryName}</strong></PopoverTitle>
                    <PopoverContent>
                      <p>
                        This metric takes under consideration the reported new cases, as well as the reported deaths and recoveries.
                      </p>
                      <p>The higher the percentage value, the worse is the situation in the country, since this percentage is portraing cases that still had no outcome. Most patients symptoms retreat after about 20 days.</p>
                      <p>Each column in the chart, represents one day.</p>
                      <p>If the number of active cases show an upward trend, the bars in the chart will be displayed in red color. If the number of active cases show an downward trend, then the bars will be displayed in green color. </p> <p className='popoverNote'>Note:
                        <small> This metric is based on the tests performed in the specific country. In most countries the tests are being performed only to patients that show acute symptoms. The actual number of total cases is much higher, but they present mild symptoms.</small></p>
                    </PopoverContent>
                  </Popover>
                }
              >
                <div variant="secondary">

                  <Card
                    title="Active Cases"
                    metrics={this.state.cardsData.activeCases}
                    percentage={(this.state.cardsData.activeCases * 100 / this.state.cardsData.totalCases).toFixed(2)}
                    class="card activeCases"

                    // Chart
                    type='Bar'
                    labels='Active Cases'
                    data={this.state.cardsChartsData.cardsChartsActiveCases}
                    options={{
                      legend: {
                        display: false
                      },

                      scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: false }],
                      },

                      elements: {
                        point: {
                          radius: 0
                        }
                      },

                      tooltips: {
                        enabled: false,

                      },
                      maintainAspectRatio: false
                    }}
                  />

                </div>
              </OverlayTrigger>{' '}
            </div>
          </div>

          <div className='col-lg-2 mb-2 cardContainer'>

            <div className='popoverDeceased'>
              <OverlayTrigger
                trigger="click"
                rootClose
                key={'bottom'}
                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <PopoverTitle as="h6"><strong>The number of deseased patients in {this.state.countryName}</strong></PopoverTitle>
                    <PopoverContent>
                      <p>
                        This metric takes under consideration the reported deaths for {this.state.countryName}.
                      </p>
                      <p>The higher the percentage value, the worse is the situation in the country. The estimated percentage of deaths globaly for the SARS Covid-19 is between 1% and 2%.</p>
                      <p>Each column in the chart, represents one day.</p>
                      <p>If the number of deaths show an upward trend, the bars in the chart will be displayed in red color. If the number of deaths show an downward trend, then the bars will be displayed in green color. </p> <p className='popoverNote'>Note:
                        <small> This metric is based on the tests performed in the specific country. In most countries the tests are being performed only to patients that show acute symptoms. The actual number of total cases is much higher, but they present mild symptoms.</small></p>
                    </PopoverContent>
                  </Popover>
                }
              >
                <div variant="secondary">
                  <Card
                    title="Deceased"
                    metrics={this.state.cardsData.deceased}
                    percentage={(this.state.cardsData.deceased * 100 / this.state.cardsData.totalCases).toFixed(2)}
                    class="card deceased"

                    // Chart
                    type='Bar'
                    labels='Deaths'
                    data={this.state.cardsChartsData.cardsChartsDeaths}
                    options={{
                      legend: {
                        display: false
                      },

                      scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: false }],
                      },

                      elements: {
                        point: {
                          radius: 0
                        }
                      },

                      tooltips: {
                        enabled: false,

                      },
                      maintainAspectRatio: false
                    }}

                  />

                </div>
              </OverlayTrigger>{' '}
            </div>
          </div>

          <div className='col-lg-2 mb-2 cardContainer'>

            <div className='popoverDischarged'>
              <OverlayTrigger
                trigger="click"
                rootClose
                key={'bottom'}
                placement={'bottom'}
                overlay={
                  <Popover id={`popover-positioned-${'bottom'}`}>
                    <PopoverTitle as="h6"><strong>The number of discharged patients in {this.state.countryName}</strong></PopoverTitle>
                    <PopoverContent>
                      <p>
                        This metric represents cases that did the SARS Covid-19 test in {this.state.countryName}, but now the symptoms have retreated and patients are now considered healthy again.
                      </p>
                      <p>The higher the percentage value, the better the situation is in the country.</p>
                      <p>Each column in the chart, represents one day.</p>
                      <p>If the number of discharged cases show an upward trend, the bars in the chart will be displayed in green color. If the number of dischaged show an downward trend, then the bars will be displayed in red color. </p> <p className='popoverNote'>Note:
                        <small> This metric is based on the tests performed in the specific country. In most countries the tests are being performed only to patients that show acute symptoms. The actual number of total cases is much higher, but they present mild symptoms.</small></p>
                    </PopoverContent>
                  </Popover>
                }
              >
                <div variant="secondary">
                  <Card
                    title="Discharged"
                    metrics={this.state.cardsData.discharged}
                    percentage={((this.state.cardsData.discharged * 100 / this.state.cardsData.totalCases).toFixed(2))}
                    class="card discharged"

                    // Chart
                    type='Bar'
                    labels='Discharged'
                    data={this.state.cardsChartsData.cardsChartsRecovered}
                    options={{
                      legend: {
                        display: false
                      },

                      scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: false }],
                      },

                      elements: {
                        point: {
                          radius: 0
                        }
                      },

                      tooltips: {
                        enabled: false,

                      },
                      maintainAspectRatio: false
                    }}

                  />

                </div>
              </OverlayTrigger>{' '}
            </div>



          </div>

        </div>

        {/* Charts */}
        <div className='row m-0  chartsContainer'>

          <div className='col-lg-6 p-1 chart'>

            <Tabs defaultActiveKey="Line" id="tabsTotalCases">
              <Tab eventKey="Line" title="Line">
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

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />

              </Tab>
              <Tab eventKey="Bar" title="Bar">

                <Chart
                  type='Bar'
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

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />

              </Tab>
              <Tab eventKey="Doughnut" title="Doughnut">
                <Chart
                  type='Doughnut'
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

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />
              </Tab>
            </Tabs>

          </div>

          <div className='col-lg-6 p-1 chart'>

            <Tabs defaultActiveKey="Line" id="tabsMixedConfirmedDeathsRecovered">
              <Tab eventKey="Line" title="Line">
                <Chart
                  type='Line'
                  backgroundcolor={this.state.chartDataDeathsVsRecovered.datasets.backgroundColor}
                  label={this.state.chartDataDeathsVsRecovered.datasets.label}
                  data={this.state.chartDataDeathsVsRecovered}
                  options={{
                    legend: {
                      title: {
                        text: 'Recoveries VS Deaths',
                        display: true
                      }
                    },

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />
              </Tab>
              <Tab eventKey="Bar" title="Bar">
                <Chart
                  type='Bar'
                  backgroundcolor={this.state.chartDataDeathsVsRecovered.datasets.backgroundColor}
                  label={this.state.chartDataDeathsVsRecovered.datasets.label}
                  data={this.state.chartDataDeathsVsRecovered}
                  options={{
                    legend: {
                      title: {
                        text: 'Recoveries VS Deaths',
                        display: true
                      }
                    },

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />
              </Tab>
              <Tab eventKey="Doughnut" title="Doughnut">
                <Chart
                  type='Doughnut'
                  backgroundcolor={this.state.chartDataDeathsVsRecovered.datasets.backgroundColor}
                  label={this.state.chartDataDeathsVsRecovered.datasets.label}
                  data={this.state.chartDataDeathsVsRecovered}
                  options={{
                    legend: {
                      title: {
                        text: 'Recoveries VS Deaths',
                        display: true
                      }
                    },

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />
              </Tab>
            </Tabs>

          </div>
       
       </div>


        {/* Charts */}
        <div className='row m-0 chartsContainer'>

          <div className='col-lg-6 p-1 chart'>

            <Tabs defaultActiveKey="Line" id="tabsActiveCases">
              <Tab eventKey="Line" title="Line">
                <Chart
                  type='Line'
                  backgroundcolor={this.state.chartDataActiveCasesLogarithmic.datasets.backgroundColor}
                  label={this.state.chartDataActiveCasesLogarithmic.datasets.label}
                  data={this.state.chartDataActiveCasesLogarithmic}
                  options={this.state.chartDataActiveCasesLogarithmic.options} />
              </Tab>
              <Tab eventKey="Bar" title="Bar">
                <Chart
                  type='Bar'
                  backgroundcolor={this.state.chartDataActiveCasesLogarithmic.datasets.backgroundColor}
                  label={this.state.chartDataActiveCasesLogarithmic.datasets.label}
                  data={this.state.chartDataActiveCasesLogarithmic}
                  options={this.state.chartDataActiveCasesLogarithmic.options} />
              </Tab>
              <Tab eventKey="Doughnut" title="Doughnut">
                <Chart
                  type='Doughnut'
                  backgroundcolor={this.state.chartDataActiveCasesLogarithmic.datasets.backgroundColor}
                  label={this.state.chartDataActiveCasesLogarithmic.datasets.label}
                  data={this.state.chartDataActiveCasesLogarithmic}
                  options={this.state.chartDataActiveCasesLogarithmic.options} />
              </Tab>
            </Tabs>

          </div>

          <div className='col-lg-6 p-1 chart' >

            <Tabs defaultActiveKey="Line" id="tabsDeathsVsRecovered">
              <Tab eventKey="Line" title="Line">
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

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />
              </Tab>
              <Tab eventKey="Bar" title="Bar">
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

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />
              </Tab>
              <Tab eventKey="Doughnut" title="Doughnut">
                <Chart
                  type='Doughnut'
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

                    scales: {
                      xAxes: [{ display: true }],
                      yAxes: [{ display: true }],
                    },

                    tooltips: {

                      enabled: true,

                      callbacks: {
                        label: function (tooltipItem) {
                          return tooltipItem.yLabel;
                        }
                      }
                    },
                    maintainAspectRatio: false
                  }} />
              </Tab>
            </Tabs>

          </div>
        
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
            <hr className='col-10 footer-hr' />
            <div className='col-12'>
              <p>Find the code of the project on <a href='https://github.com/TheoKondak/covid-19-cata-visualized' target='_blank' rel="noopener noreferrer" title='Find project on GitHub'>GitHub</a>
              </p>
              <p><small><a href='https://github.com/TheoKondak/Covid-19-Data-Visualized/blob/master/README.md' target='_blank' rel="noopener noreferrer" >Changelog</a></small></p>
              <p>This project is created with:
            <br />
                <small><a href='https://github.com/facebook/create-react-app#readme' target='_blank' rel="noopener noreferrer" title='React Chart js 2'>React</a></small>
                <span><small> | </small> </span>
                <small><a href='https://github.com/jerairrest/react-chartjs-2' target='_blank' rel="noopener noreferrer" title='React Chart js 2'>React Chart js 2</a></small>
                <span><small> | </small> </span>
                <small><a href='https://github.com/yjose/reactjs-popup-burger-menu' target='_blank' rel="noopener noreferrer" title='React JS popup burger menu'>React js popup burger menu</a></small>
              </p>

              <p>API: <a href='https://github.com/pomber/covid19' title='Pomber Covid 19 JSON API' target='_blank' rel="noopener noreferrer">Covid19</a> by <a href='https://github.com/pomber' title='Pomber on Github' target='_blank' rel="noopener noreferrer">Rodrigo Pombo</a> </p>
              <p>
                Copyright 2020 Theodoros Kondakos. All rights reserved
            <a href='https://github.com/TheoKondak/Covid-19-Data-Visualized/blob/master/LICENSE' target='_blank' rel='noopener noreferrer' title='Fight Covid-19 with Folding @home'> View Licence Information</a>
              </p>
            </div>

          </div>

   </div>

      </div> //App

    );
  }
}

export default App;