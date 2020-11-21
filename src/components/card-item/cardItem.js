import React from 'react';

import './cardItem.styles.css';

export default (props) => {
    // console.log(`CardItem[${props.id}] props:`);
    // console.log(props);

    return (
        <div className="card-item">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} className="monster-photo" alt="monster"></img>
            <h1>{props.monster.name}</h1>
            <h4>{props.monster.email}</h4>
        </div>
    )
}