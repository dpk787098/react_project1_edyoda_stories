import React from 'react';
import classes from './card_component.module.css';

const CardComponent = (props) => {
    return ( 
        <a href="./card_component.js" className={classes.card_wrapper}>
            <img src={props.img} alt="card_image" />
            <div className={classes.card_cont_desc}>
                <h3>{props.title}</h3>
                <p>{props.author}<span className={classes.blog_date}> | {props.date}</span></p>
                <div>{props.description}</div>
            </div>

        </a>
     );
}
 
export default CardComponent;