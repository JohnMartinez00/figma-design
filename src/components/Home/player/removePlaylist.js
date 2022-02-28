const removeFromPlaylist = (index) => {
    const copyList = [...this.state.playlist.musics];
    copyList.splice(index, 1);
    this.setState({ playlist: { ...this.state.playlist, musics: copyList } });
}

export default removeFromPlaylist