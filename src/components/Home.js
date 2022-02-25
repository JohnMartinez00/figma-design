import React from "react";
import "./Home.css";
import background from '../assets/background.png';
import Footer from './Footer.js';
const Home = () => {
    return (
        <div className="rectangle">
            <img src={background} className="background" alt="bg"></img>
            <div className="flex">
                <div className="play_logo"></div>
                <div className="group2">
                    <div className="woman1"></div>
                    <div className="woman2"></div>
                </div>
            </div>

            <Footer>
            </Footer>

        </div>
    );
};

export default Home;