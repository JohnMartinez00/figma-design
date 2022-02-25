import * as React from 'react';
import Filter from './filter';
import Card from './card'
import "./Gallery.css";
import img from '../assets/filter.png'

const Gallery = () => {
    return (
        <div className='container-gallery'>
            <div className="gallery">
                <div className="filter">
                    <p className="subtitle1">FILTER</p>
                    <div className='crossline'></div>
                    <Filter />
                </div>
                <div className="result">
                    <div className="sub-bar">
                        <p className="subtitle2">RESULTS<img src={img} className='filter-img'></img></p>
                        <div className="search-button">
                            <input type="text" placeholder="Search..." className="search-box" />
                            <button type="button" className="btn"> My NFTs</button>
                        </div>
                    </div>
                    <div className='card-layout'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;