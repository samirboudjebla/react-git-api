import React from 'react';
import './card.styles.css';


export const Card = (props) => {

    return (
        <div className="card-container">
            <img alt="contact" src={props.contact.avatar_url} />
            <h1 > {props.contact.name} </h1>
            <h1 > {props.contact.location} </h1>
            <a href={props.contact.html_url} alt="URL github user profie" target="_blank">{props.contact.login} </a>
        </div>
    )
}