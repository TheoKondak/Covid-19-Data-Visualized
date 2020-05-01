import React, { Component } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import "./Chart.scss";

class Chart extends Component {

  
  render() {

// console.log(this.props.data)

    if (this.props.type === 'Line')
      return (
        <div className="Line">
          <Line
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
            label={this.props.label}
            data={this.props.data}
            options={this.props.options}
          />
        </div>
      )

    else if (this.props.type === 'Bar')
      return (
        <div className="Bar">
          <Bar
            label={this.props.label}
            data={this.props.data}
            options={this.props.options}
          />
        </div>
      )
  }
}

export default Chart;