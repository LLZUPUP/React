import jsonp from './jsonp'

import { URL, PARAM, OPTION } from './config'

export function getCarousel() {
  const data = Object.assign({}, PARAM, {
    g_tk: 701075963,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    _: new Date().getTime()
  })
  return jsonp(URL.carousel, data, OPTION)
}

// 有一个数据的需求，就到api相应业务文件下加一个方法就好
export function getAlbumInfo(albumMid) {
  const data = Object.assign({}, PARAM, {
    albumid: albumMid,
    g_tk: 1278911659,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return jsonp(URL.albumInfo, data, OPTION)
}