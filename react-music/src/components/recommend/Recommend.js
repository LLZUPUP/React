import React, { Component } from 'react'
import { getCarousel, getNewAlbum } from '@/api/recommend'
import './recommend.styl'
import Swiper from 'swiper'
import * as AlbumModel from '@/model/album'
import 'swiper/dist/css/swiper.css'
import { CODE_SUCCESS } from '../../api/config';
import Scroll from '@/common/scroll/Scroll'

class Recommend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sliderList: [],
      newAlbums: [],
      refreshScroll: false
    }
  }
  componentDidMount () {
    getCarousel().then(res=> {
      if(res) {
        if(res.code === CODE_SUCCESS) {
          this.setState({
            sliderList: res.data.slider
          },()=> {
            if(!this.sliderSwiper) {
              this.sliderSwiper = new Swiper('.slider-container',{
                loop: true,
                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                pagination: '.swiper-pagination'
              })
            }
          })
        }
      }
    })
    getNewAlbum().then(res=> {
      // console.log(res)
      if(res) {
        if(res.code === CODE_SUCCESS) {
          let albumList = res.albumlib.data.list
          // console.log(albumList)
          //降序
          albumList.sort((x,y)=> {
            // return (new Date(x.public_time).getTime()) < (new Date(y.public_time).getTime()) ? 1: -1;
            return new Date(y.public_time).getTime() - new Date(x.public_time).getTime();
          })
          //升序
          // albumList.sort((x,y)=> {
          //   return (x["public_time"]>y["public_time"]) ? 1: -1;
          // })
          this.setState({
            newAlbums: albumList
          },()=> {
            this.setState({
              refreshScroll: true
            })
          })
        }
      }
    })
  }
  toLink(linkUrl) {
    // console.log(this)
    window.location.href = linkUrl
  }
  render () {
    let albums = this.state.newAlbums.map( item => {
      // console.log(item)
      const album = AlbumModel.createAlbumByList(item)
      // console.log(album)
      return (
        <div className="album-wrapper" key={album.mId}>
          <div className="left">
            <img src={album.img} width="100%" height="100%" alt={album.name}/>
          </div>
          <div className="right">
            <div className="album-name">
              {album.name}
            </div>
            <div className="singer-name">
              {album.singer}
            </div>
            <div className="public-time">
              {album.publicTime}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="music-recommend">
        <Scroll refresh={this.state.refreshScroll}>
          <div>
              <div className="slider-container">
              <div className="swiper-wrapper">
                {
                  this.state.sliderList.map(slider => {
                    return (
                      <div className="swiper-slide" key={slider.id}>
                        <a onClick={this.toLink.bind(this,slider.linkUrl)} className="slide-nav">
                          <img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="album-container">
              <h1 className="title">最新专辑</h1>
              <div className="album-list">
                { albums }
              </div>
            </div>
          </div>
        </Scroll>
        
      </div>
    )
  }
}

export default Recommend