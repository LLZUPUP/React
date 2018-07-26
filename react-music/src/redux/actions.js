import * as ActionTypes from './actionTypes'

export function showPlayer(showStatus) {
  return {
    type: ActionTypes.SHOW_PLAYER,
    showStatus
  }
}

export function changeSong(song) {
  return {
    type: ActionTypes.CHANGE_SONG,
    song
  }
}

export function setSongs (songs) {
  return {
    type: ActionTypes.SET_SONGS,
    songs
  }
}

export function removeSong(id) {
  return {
    type: ActionTypes.REMOVE_SONG_FORM_LIST,
    id
  }
}