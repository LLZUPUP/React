const URL = {
  carousel: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  newalbum: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
  albumInfo: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg'
}

const PARAM = {
  format: 'jsonp',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0
}

const OPTION = {
  prefix: 'callback',
  param: 'jsonpCallback'
}

const CODE_SUCCESS = 0;

export { URL, PARAM, OPTION, CODE_SUCCESS }