import React from 'react';
import './Countrylist.css';


const Countrylist = (props) => {
    // console.log(props)
    return (
        <div className='hexagon-container text-center '>

<div className='hexagon'>
            <button className='neomorphic uni' onClick={props.click}>
                {props.countryName}</button>
                </div>
        </div>
    );

}

export default Countrylist;
