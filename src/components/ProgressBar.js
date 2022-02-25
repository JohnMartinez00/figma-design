import React from "react";
import "./ProgressBar.css";
import { forwardsSvg, backwardsSvg, shuffleSvg } from "../svg";

class ProgressBar extends React.Component {
    render() {
        return (
            <div>
                <div className="player-btn">
                    <div className="control">
                        {shuffleSvg}
                    </div>
                    <div className="control" >
                        {backwardsSvg}
                    </div>
                    <div className="control">
                        {forwardsSvg}
                    </div>
                </div>
                <div className="progress">
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
                </div>
            </div>
        );
    }
}

export default ProgressBar;
