import { connect } from 'react-redux'
import { changeSong } from '../redux/actions'
import PlayerList from '../components/play/PlayerList'


const mapStateToProps = (state)=> ({
  currentSong: state.song,
  playSongs: state.songs
})

const mapDispatchToProps = (dispatch)=> ({
  changeCurrentSong: (song)=> {
    dispatch(changeSong(song))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)