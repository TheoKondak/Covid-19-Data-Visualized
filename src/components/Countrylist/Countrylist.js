import React from 'react';
import './Countrylist.css';


const Countrylist = (props) => {
    //  console.log(props.countryName)
    return (
        <div className='country text-center '>

            <button className='neomorphic'
                onClick={props.click}>
                {props.countryName}</button>

        </div>
    );

}

export default Countrylist;
