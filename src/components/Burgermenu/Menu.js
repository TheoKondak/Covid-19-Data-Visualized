// import React from "react";
import React, { Component } from 'react';
import Countrylist from '../Countrylist/Countrylist';

import './Menu.css';


// export default (props) =>{
class Menu extends Component {

  render() {
    return (<div className="container menu">

      <div className='row'>

<div className='col-10'>
{this.props.countryList.map(country => {

let countryId = [];
let countryName = [];
let countryData = [];

countryId = country.countryId;
countryName = country.countryName;
countryData = country.countryData;

return <Countrylist
  key={country.countryId}
  countryName={country.countryName}
  click={() => { this.props.click(countryId, countryName, countryData) }}
  close={this.props.close}
  
/>
})
}


</div>

      </div>


    </div>
    )
  }

};

export default Menu;