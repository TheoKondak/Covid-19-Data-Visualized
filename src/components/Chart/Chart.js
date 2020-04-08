import React, { Component } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import "./Chart.css";

class Chart extends Component {

  
  render() {

    if (this.props.type === 'Line')
      return (
        <div className="Line">
          <Line
            backgroundcolor={this.props.backgroundcolor}
            label={this.props.label}
            data={this.props.data}
            options={this.props.options}
          />
        </div>
      )

    else if (this.props.type === 'Doughnut')
      return (
        <div className="Doughnut">
          <Doughnut
            width={this.props.width}
            height={this.props.height}
            backgroundcolor={this.props.backgroundcolor}
            label={this.props.label}
            data={this.props.data}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      )

    else if (this.props.type === 'Bar')
      return (
        <div className="Bar">
          <Bar
            backgroundcolor={this.props.backgroundcolor}
            label={this.props.label}
            data={this.props.data}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      )
  }
}

export default Chart;