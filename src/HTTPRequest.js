const HTTPRequest = () => {

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

}