// import React, { Component } from 'react'
import { connect } from 'react-redux'
import Player from '../components/play/Player'
import { changeSong } from '../redux/actions'


const mapStateToProps = (state)=> ({
  currentSong: state.song,
  playSongs: state.songs
})

const mapDispatchToProps = (dispatch)=> ({
  changeCurrentSong: (song)=> {
    dispatch(changeSong(song))
  }
})
export default connect( mapStateToProps, mapDispatchToProps)(Player)