import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie, Doughnut, Polar } from 'react-chartjs-2';
import Chart from './Chart';

const httpRequest = () => {

  const [currentData, setCurrentData] = useState([]);
  const newData = [0,0,0];
  
  useEffect(() => {
    xhr.open('GET', 'https://coronavirus-tracker-api.herokuapp.com/v2/locations');
    xhr.responseType = 'json';
    xhr.onload = function() {
      let data = xhr.response;
      newData =  [
          data.latest.confirmed,
          data.latest.recovered,
          data.latest.deaths
      ];
    };
    xhr.send();
    setCurrentData(newData);
  }, [currentData])


  return currentData;

}


export default httpRequest;