import React from 'react';
import "./Casescard.css"

const Card = (props) =>{
// console.log(props);

return (


<div className={props.class}>
<h3 className='cardTitle'>{props.title}</h3>
<span className='cardMetrics'>{props.metrics}</span>
<span className='cardPercentage'><span className='cardPercentage-percentage'>{props.percentage}</span><span classname='cardPercentage-text'> of total cases</span></span>
</div>


);




}

export default Card;