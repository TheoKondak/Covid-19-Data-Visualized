import React, { Component } from 'react';
import Countrylist from '../Countrylist/Countrylist';

import './Searchbar.scss';



class Searchbardesktop extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }



    
    clickEventHandler = (countryId, countryName, countryData) => {
        this.props.click(countryId, countryName, countryData); 
        
      }
    
    updateSearch(event){
        this.setState({search: event.target.value.toLowerCase().substring(0, 25)})
    };
    
    render() {
        
        let listOfCountries = this.props.countryList.map(country => {
            return country;
        })
        
        let filteredCountries = listOfCountries.filter(country => {
           return country.countryName.toLowerCase().indexOf(this.state.search) !== -1;
        })
        


        return (
            <div className='searchBar'>
<div className='header'>
 <h3 className='searchBar-h3 pt-4 '>Covid-19 Data Visualized</h3>
 <small>v0.4a</small>
 </div>


<hr className='searchBar-hr' />

                <input 
                    className='searchCountry'
                    type='text'
                    placeholder="Search for a country"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />

                <hr className='searchBar-hr' />

        <div className='countryList'>{filteredCountries.map(country => {
        return <Countrylist 
            key={country.countryName}
            countryName={country.countryName} 
            click={() => { this.clickEventHandler(country.countryId, country.countryName, country.countryData); }}
           
            />
        })}
        </div>
     
            </div>

        )


    }


}

export default Searchbardesktop;

