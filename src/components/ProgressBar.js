import React from "react";
import "./ProgressBar.css";
import VolumeUp from '@mui/icons-material/VolumeUp';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        }
    }
    render() {
        return (
            <div className="footer pt-2 ">
                <div className="grid md:grid-cols-3 grid-cols-2 items-center">
                    <div className="text-white text-hide">
                        <p>STYX HELIX</p>
                        <p>RE:</p>
                    </div>
                    <div className="flex flex-col text-white items-center justify-between">
                        <div>
                            <SkipPreviousIcon sx={{ fontSize: 30 }} className="mx-4" />
                            {this.state.isPlaying ? <PlayArrowIcon sx={{ fontSize: 30 }} onClick={() => this.setState({ isPlaying: false })} className="mx-4" /> : <PauseIcon sx={{ fontSize: 30 }} onClick={() => this.setState({ isPlaying: true })} className="mx-4" />}
                            <SkipNextIcon sx={{ fontSize: 30 }} className="mx-4" />
                        </div>
                        <div>
                            <p>111111111111</p>
                        </div>
                    </div>
                    <div className="flex text-white items-center justify-between mx-0">
                        <div><AutorenewIcon sx={{ fontSize: 30, margin:0 }}/></div>
                        <div><QueueMusicIcon sx={{ fontSize: 30, margin:0 }} /></div>
                        <div className="flex justify-center items-center">
                            <VolumeUp className="volume" sx={{ fontSize: '2rem' }} />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                className="slider"
                                value={this.props.volume}
                                onChange={(e) => this.props.setVolume(e.target.value)}
                                onMouseEnter={() => this.setState({ showTooltip: true })}
                                onMouseLeave={() => this.setState({ showTooltip: false })}
                            />
                            {/* {this.state.showTooltip ? <span className="tooltip">{this.props.volume}</span> : null} */}
                            <div />
                        </div>
                    </div>
                </div >
            </div>
        );
    };
}

export default ProgressBar;
