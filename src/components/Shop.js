import React, { useState } from "react";
import "./Shop.css";
import avatar from "../assets/avatar.png";
import bg from "../assets/bgg.png"
import NFTData from "../data/NFTdata";

const Shop = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="shop">
            <img src={bg} className="bg"></img>
            <div className="avatar">
                <img src={avatar} className="profile"></img>
                <div className="ml-0 ">
                    <p className="text">Connected To</p>
                    {/* <p className="text-white">{NFTData[0].id}</p> */}
                    <p className="text-white font">0xD6216fC19DB775D5664f4a6E33526131dA7D19a2c</p>
                </div>
            </div>
            <div className="title">
                <p>HOW MANY NFTs</p>
                <p>FOR YOU?</p>
            </div>
            <input type="text" className="input" onChange={e => setCount(e.target.value)}></input>
            <div className="info">
                <div className="dis-flex"><p className="line_h">Price </p><p className="bold">{NFTData[0].price}ETH</p></div>
                <div className="dis-flex"><p className="line_h">Quantity </p><p className="bold">{count}</p></div>
                <div className="dis-flex"><p className="line_h">Total </p><p className="bold">{count * NFTData[0].price}ETH</p></div>
            </div >
            <button type="submit" className="btn_submit">MINT</button>
        </div >

    );
};

export default Shop;