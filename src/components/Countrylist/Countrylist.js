import React from 'react';
import './Countrylist.css';


const Countrylist = (props) => {

    
    
//   console.log(props);
    
    return (
        <div className='country'>
            
  <button onClick={props.click}>{props.countryName}</button>

        </div>
    );

}

export default Countrylist;
