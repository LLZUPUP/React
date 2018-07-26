import MiniPlayer from '../components/play/MiniPlayer'
import { connect } from 'react-redux'
import { changeSong } from '../redux/actions'


const mapStateToProps = (state)=> ({
  currentSong: state.song,
  playSongs: state.songs
})

const mapDispatchToProps = (dispatch)=> ({
  changeCurrentSong: (song)=> {
    dispatch(changeSong(song));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);