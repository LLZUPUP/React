import React,{ Component } from 'react'
import './album.styl'
import { CSSTransition } from 'react-transition-group'
import Header from '@/common/header/Header.js'
import { getAlbumInfo } from '@/api/recommend'
import { CODE_SUCCESS } from '@/api/config'
import * as AlbumModel from '@/model/album'
import Loading from '@/common/loading/Loading'
import * as SongModel from '@/model/song'

class Album extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      loading: true
    }
  }
  componentDidMount () {
    this.setState({
      show: true
    })
    getAlbumInfo(this.props.match.params.id).then(res=>{
      // console.log(res)
      console.log(`获取专辑详情：`, res)
      if(res) {
        if(res.code === CODE_SUCCESS) {
          let album = AlbumModel.createAlbumByDetail(res.data)
          album.desc = res.data.desc;

          let songList = res.data.list;
          let songs = [];
          songList.forEach(item => {
            let song = SongModel.createSong(item)
          })
          this.setState({
            album: album,
            songs: songs,
            loading: false
          })
        }
      }
    })
  }
  render () {
    let album = this.state.album;
    return (
      <CSSTransition in={this.state.show} timeout={300} classNames="translate">
        <div className="music-album">
          <Header title="周杰伦" ref="header"></Header>
          <div style={{position:"relative"}}>
              <div ref="albumBg" className="album-img" style={{backgroundImage: `url(${album.img})`}}>
                  <div className="filter"></div>
              </div>
              <div ref="albumFixedBg" className="album-img fixed" style={{backgroundImage: `url(${album.img})`}}>
                  <div className="filter"></div>
              </div>
              <div className="play-wrapper" ref="playButtonWrapper">
                  <div className="play-button" onClick={this.playAll}>
                      <i className="icon-play"></i>
                      <span>播放全部</span>
                  </div>
              </div>
          </div>
          <Loading title="正在加载中.." show={this.state.loading}/>
        </div>
      </CSSTransition>
    )
  }
}

export default Album