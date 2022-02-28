import playlist from './playerlist'
import React from 'react';

class ShufflePlaylist extends React.Component {
    constructor() {
        super();
        this.state = {
            islogin: false,
            playlist: playlist,
            userinfo: '',
            hidePlayer: false,
        };
    }

    shufflePlay = (callback) => {
        const copyList = playlist.musics;
        for (let i = copyList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copyList[i], copyList[j]] = [copyList[j], copyList[i]];
        }

        // we need reset the current index after shuffle, pass the call back in here
        this.setState({ playlist: { ...this.state.playlist, musics: copyList } }, callback);
    }
}

export default ShufflePlaylist