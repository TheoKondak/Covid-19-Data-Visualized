import React, { Component } from 'react';
import Countrylist from '../Countrylist/Countrylist';



class Searchbar extends React.Component {

    
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }


 
    updateSearch(event){
        this.setState({search: event.target.value.substring(0, 25)})
    };
    
    render() {

       
        
        let listOfCountries = this.props.countriesList.map(country => {
            return country.countryName;
        })
        
        let filteredCountries = listOfCountries.filter(country => {
           return country.indexOf(this.state.search) !== -1;
        })
        
// console.log(this.props)

        return (
            <div className='searchbar'>

                <input 
                    type='text'
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />

                <ul>
        <li>{filteredCountries.map(country => {
            return <Countrylist 
            key={country}
            countryName={country} 
            onClick={this.props.click}
            />
        })}</li>
                </ul>


            </div>

        )


    }


}

export default Searchbar;

