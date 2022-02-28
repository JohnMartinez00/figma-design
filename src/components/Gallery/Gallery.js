import * as React from "react";
import Filter from "./filter";
import Card from "./card";
import "./Gallery.css";
import SearchIcon from "@mui/icons-material/Search";
import img from "../../assets/filter.png";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import userData from "../../data/data";

const Gallery = () => {
    const [open, setOpen] = React.useState(false);
    const [searchContent, setSearchContent] = React.useState('');
    const handleChange = () => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpen(!open);
    };
    const searchResult = userData.filter(item => item.name.toLowerCase().includes(searchContent.toLowerCase()))
    return (
        <>
            <div className="gallery">
                <div className="filter">
                    <p className="subtitle1">FILTER</p>
                    <div className="crossline"></div>
                    <Filter />
                </div>
                <div className="result">
                    <div className="sub-bar">
                        <p className="subtitle2">
                            RESULTS
                            <img
                                src={img}
                                className="filter-img"
                                onClick={() => setOpen(!open)}
                            ></img>
                        </p>
                        <div className="search-button">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-box "
                                onChange={(e) => setSearchContent(e.target.value)}
                            />
                            {/* <SearchIcon className='absolute right-4 top-1' sx={{ fontSize: 24 }} /> */}

                            <button type="button" className="btn btn-primary">
                                {" "}
                                My NFTs
                            </button>
                        </div>
                    </div>
                    <div className="card-layout">
                        {searchResult.map((item) => {
                            return <Card key={item.id} id={item.id} name={item.name} />;
                        })}
                    </div>
                </div>
            </div>

            {/* on mobile, show and hide the filter option */}
            {open ? (
                <div>
                    <SwipeableDrawer
                        open={open}
                        onClose={handleChange(false)}
                        onOpen={handleChange(true)}
                    >
                        <Box sx={{ width: 250, padding: 4 }}>
                            <Filter></Filter>
                        </Box>
                    </SwipeableDrawer>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Gallery;