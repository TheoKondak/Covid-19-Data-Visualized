import React, { Component } from 'react';
import Countrylist from '../Countrylist/Countrylist';



class Searchbar extends React.Component {

    
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
        this.setState({search: event.target.value.substring(0, 25)})
    };
    
    render() {
        
        // console.log(this.props);

        let listOfCountries = this.props.countryList.map(country => {
            return country;
        })
        
        let filteredCountries = listOfCountries.filter(country => {
           return country.countryName.indexOf(this.state.search) !== -1;
        })
        


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
            key={country.countryName}
            countryName={country.countryName} 
            click={() => { this.clickEventHandler(country.countryId, country.countryName, country.countryData); }}
            />
        })}</li>
                </ul>


            </div>

        )


    }


}

export default Searchbar;

