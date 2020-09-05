import React from 'react';
import './Countrylist.scss';


const Countrylist = (props) => {
    
    return (
        <div className='text-center '>

<div className='countryItem'>
            <button className='countryItemBtn' onClick={props.click}>
                {props.countryName}</button>
                </div>
        </div>
    );

}

export default Countrylist;
