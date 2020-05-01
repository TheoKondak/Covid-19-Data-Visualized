// import React from "react";
import React, { Component } from 'react';
import Countrylist from '../Countrylist/Countrylist';
import Searchbar from '../Searchbar/Searchbar';

import './Menu.scss';


// export default (props) =>{
class Menu extends Component {

  clickEventHandler = (countryId, countryName, countryData) => {
    this.props.click(countryId, countryName, countryData);
    this.props.close();
    
  }

  render() {

    console.log(this.props);
    return (
    
   
    
    <div className='burgerMenuContainer'>

 


<div className="menu clear" id='grid'>
   
          {/* {this.props.countryList.map(country => {

            let countryId = [];
            let countryName = [];
            let countryData = [];

            countryId = country.countryId;
            countryName = country.countryName;
            countryData = country.countryData;

            return <Countrylist
              key={country.countryId}
              countryName={country.countryName}
              click={() => { this.clickEventHandler(countryId, countryName, countryData); }}
            />
          })
          } */}

<Searchbar
              countryList={this.props.countryList}
              click={this.props.click}
              close={this.props.close}
            />


        </div>

    </div>
  
    )
  }
};

export default Menu;