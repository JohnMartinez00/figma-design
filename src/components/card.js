import * as React from 'react';
import "./card.css";
import man1 from "../assets/man1.png"

const Card = ({ id, name }) => {
    return (
        <div className='card'>
            <img src={man1} className="card-img"></img>
            <div className='card-info'>
                <p className='card-title'>{name}</p>
                <p className='card-code'>#{id}</p>
            </div>
        </div>
    );
};

export default Card;