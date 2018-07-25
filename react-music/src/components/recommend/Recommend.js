import React, { Component } from 'react'
import { getCarousel } from '@/api/recommend'
import './recommend.styl'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { CODE_SUCCESS } from '../../api/config';

class Recommend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sliderList: []
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
  }
  render () {
    return (
      <div className="music-recommend">
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              this.state.sliderList.map(slider => {
                return (
                  <div className="swiper-slide" key={slider.id}>
                    <a href="/" className="slide-nav">
                      <img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}

export default Recommend