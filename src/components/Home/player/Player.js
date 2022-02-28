import React from 'react'
import { Player } from '@dalanke/react-audio-player';

const playlist = {
    name: 'Temp Playlist',
    description: '',
    musics: [
      {
        src: 'https://stayhome-api.herokuapp.com/stream?id=HdQCWXh3XXU',
        title: 'STYX HELIX ',
        author: 'Re：ゼロから始める異世界生活 ED1',
        thumbnail: '',
      },
      {
        src: 'https://stayhome-api.herokuapp.com/stream?id=E8S2IHiuWZA',
        title: 'Kizuna Music キズナミュージック♪ [Piano+Sheet]',
        author: 'Poppin Party',
        thumbnail: '',
      },
      {
        src: 'https://stayhome-api.herokuapp.com/stream?id=9q7JOQfcJQM',
        title: '以父之名 In The Name of The Father',
        author: 'Jay Chou',
        thumbnail: '',
      },
      {
        src: 'https://stayhome-api.herokuapp.com/stream?id=qIZ5MAwbeCg',
        title: 'Wounds of War',
        author: 'Jay Chou',
        thumbnail: '',
      },
      {
        src: 'https://stayhome-api.herokuapp.com/stream?id=AdkkF6MT0R0',
        title: 'Chapter Seven',
        author: 'Jay Chou',
        thumbnail: '',
      }
    ],
  }
class Play extends React.Component {
    constructor() {
        super();
        this.state = {
            islogin: false,
            playlist: playlist,
            userinfo: '',
            hidePlayer: false,
        };
    }

    ShufflePlaylist  = (callback) => {
        const copyList = playlist.musics;
        for (let i = copyList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copyList[i], copyList[j]] = [copyList[j], copyList[i]];
        }

        // we need reset the current index after shuffle, pass the call back in here
        this.setState({ playlist: { ...this.state.playlist, musics: copyList } }, callback);
    }
    removeFromPlaylist = (index) => {
        const copyList = [...this.state.playlist.musics];
        copyList.splice(index, 1);
        this.setState({ playlist: { ...this.state.playlist, musics: copyList } });
    }
    render() {
        return (<Player
            playlist={this.state.playlist}
            shufflePlaylist={this.shufflePlaylist}
            removeFromPlaylist={this.removeFromPlaylist}
        />)
    }
}
export default Play;