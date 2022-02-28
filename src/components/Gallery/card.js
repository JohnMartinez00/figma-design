import * as React from 'react';
import "./card.css";
import man1 from "../../assets/man1.png"

const Card = ({ id, name }) => {
    return (
        <div className='card'>
            <img src={man1} className="card-img"></img>
            <div className='card-info'>
                <div className='card-title p-0 m-0'>{name}</div>
                <div className='card-code p-0 m-0'>#{id}</div>
            </div>
        </div>
    );
};

export default Card;