import React, { Component } from 'react'
import Player from '@/containers/Player'
import PlayerList from '@/containers/PlayerList'
class MusicPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSongIndex: 0,
      show: false
    }
  }
  render() {
    return (
      <div className="music-player">
        <Player currentIndex={this.state.currentSongIndex}></Player>
        <PlayerList currentIndex={this.state.currentSongIndex}></PlayerList>
      </div>
    )
  }
}
export default MusicPlayer
