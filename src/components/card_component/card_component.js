import React from 'react';
import './card_component.css';

const CardComponent = (props) => {
    return ( 
        <a href="./card_component.js" className="card_wrapper">
            <img src={props.img} alt="card_image" />
            <div className="card_cont_desc">
                <h3>{props.title}</h3>
                <p>{props.author}<span className="blog_date"> | {props.date}</span></p>
                <div>{props.description}</div>
            </div>

        </a>
     );
}
 
export default CardComponent;