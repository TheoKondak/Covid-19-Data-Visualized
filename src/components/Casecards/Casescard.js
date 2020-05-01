import React from 'react';

import "./Casescard.scss"

import Chart from '../Chart/Chart';

const Card = (props) => {



    return (
        <div className={props.class}>


            <div className='title-metrics-container'>
                <div className='containerTitle'>
                    <h3 className='cardTitle'>{props.title}</h3>
                </div>

                <div className='containerMetrics'>
                    <span className='cardMetrics'>{props.metrics}</span>
                    <div className='cardPercentage'>
                        <span className='cardPercentage-percentage'>{props.percentage}</span>
                        {/* <span className='cardPercentage-text'> of total cases</span> */}
                    </div>
                </div>
            </div>


            <div className='containerMetricsChart'>
                <Chart
                    type={props.type}


                    data={props.data}
                    options={props.options}
                />
            </div>
            <hr className='hrCaseCard' />
            <div className='fontAwesome-downArrow-container'>
                <img src={require('./sort-down-solid.svg')} className='shortDownSolid' />
            </div>

        </div>
    );
}

export default Card;