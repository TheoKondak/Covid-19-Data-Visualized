import React from 'react';
import "./Casescard.css"

import Chart from '../Chart/Chart';

const Card = (props) => {

  

    return (
        <div className={props.class}>
            <div className='containerTitle'>
                <h3 className='cardTitle'>{props.title}</h3>
            </div>

            <div className='containerMetrics'>
                <span className='cardMetrics'>{props.metrics}</span>
                <div className='cardPercentage'>
                    <span className='cardPercentage-percentage'>{props.percentage}</span>
                    <span className='cardPercentage-text'> of total cases</span>
                </div>
            </div>

<div className='containerMetricsChart'>
            <Chart
                type='Line'
               
                
                data={props.data}
                options={props.options}
            />
</div>
        </div>
    );
}

export default Card;