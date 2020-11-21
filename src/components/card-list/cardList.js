import React, { Fragment } from 'react';

// COMPONENTS
import CardItem from './../card-item/cardItem';

// CSS
import './cardList.styles.css';

export default (props) => {
    // console.log('Props from component CardList:')
    // console.log(props);

    return (
        <Fragment>
            <section className="list-monsters">
                {/* {props.children} --> renders everything inside this component*/}
                {/* for example: <CardList>>h1>This is props.children</h1></CardList> */}

                {
                    props.monsters.map(monster => <CardItem 
                                                            key={monster.id}
                                                            monster={monster} />)
                }
            </section>
        </ Fragment>
    )
}