import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut, Polar } from 'react-chartjs-2';

let currentData = [10, 122, 300];
    
// Create HTTP Request
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://coronavirus-tracker-api.herokuapp.com/v2/locations');

xhr.responseType = 'json';

xhr.onload = function() {
    const data = xhr.response;

   currentData =  [
        data.latest.confirmed,
        data.latest.recovered,
        data.latest.deaths
    ];

    console.log(' Confirmed Cases: ' + currentData[0] + ' Deaths: ' +
    currentData[2] + ' Recovered: ' +  currentData[1]);

};
xhr.send();


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    'Confirmed Cases',
                    'Recovered',
                    'Deaths'
                ],
                datasets:[ {
                    label: 'Population',
                    data: currentData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(52, 100, 255, 0.6)'
                    ]
                }
            ]
            }
        }
    }


    render() {
        return (
            <div className='chart'>

                {/* <Bar
                    width={400}
                    height={600}
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}
                /> */}

<Line
    width={400}
    height={150}
    data={this.state.chartData}
    options={{
        maintainAspectRatio: false
    }}

/>



            </div>

        )
    }

}

export default Chart;