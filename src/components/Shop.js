import React from "react";
import "./Shop.css";
import avatar from "../assets/avatar.png";
import bg from "../assets/bgg.png"

const Shop = () => {
    return (
        <div className="shop">
            <img src={bg} className="bg"></img>
            <div className="avatar">
                <img src={avatar} className="profile"></img>
                <p className="text">Connected To</p>
                {/* <p>{user.id}</p> */}
            </div>
            <div className="title">
                <p>HOW MANY NFTs</p>
                <p>FOR YOU?</p>
            </div>
            <input type="text" className="input"></input>
            <div className="info">
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <button type="submit" className="btn_submit">MINT</button>
        </div>

    );
};

export default Shop;