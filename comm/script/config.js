var url = 'https://static.sesine.com/wechat-weapp-movie'
module.exports = {
  city: '',
  baiduAK: 'Y1R5guY8Y2GNRdDpLz7SUeM3QgADAXec',
  bannerList: [
    { type: 'film', imgUrl: url + '/images/banner_1.jpg', id: '266' },
    { type: 'film', imgUrl: url + '/images/banner_2.jpg', id: '257' },
    { type: 'film', imgUrl: url + '/images/banner_3.jpg', id: '266' },
    { type: 'film', imgUrl: url + '/images/banner_4.jpg', id: '264' },
    { type: 'film', imgUrl: url + '/images/banner_5.jpg', id: '302' },
  ],
  apiList: {
    popular: 'http://t.yushu.im/v2/movie/in_theaters',
    coming: 'http://t.yushu.im/v2/movie/coming_soon',
    top: 'http://t.yushu.im/v2/movie/top250',
    search: {
      byKeyword: 'http://t.yushu.im/v2/movie/search?q=',
      byTag: 'http://t.yushu.im/v2/movie/search?tag='
    },
    filmDetail: 'http://t.yushu.im/v2/movie/subject/',
    baiduMap: 'https://api.map.baidu.com/geocoder/v2/'
  },
  hotKeyword: ['超时空同居', '后来的我们', '尖叫直播', '战神纪', '黄金花', '这个杀手不太冷', '午夜十二点', '破门', '我是你妈', '天梦', '你的名字'],
  hotTag: ['动作', '喜剧', '爱情', '悬疑'],
  skinList: [
    { title: '公路', imgUrl: url + '/images/user_bg_1.jpg', id: '0' },
    { title: '黑夜森林', imgUrl: url + '/images/user_bg_2.jpg', id: '1' },
    { title: '鱼与水', imgUrl: url + '/images/user_bg_3.jpg', id: '2' },
    { title: '山之剪影', imgUrl: url + '/images/user_bg_4.jpg', id: '3' },
    { title: '火山', imgUrl: url + '/images/user_bg_5.jpg', id: '4' },
    { title: '科技', imgUrl: url + '/images/user_bg_6.jpg', id: '5' },
    { title: '沙漠', imgUrl: url + '/images/user_bg_7.jpg', id: '6' },
    { title: '叶子', imgUrl: url + '/images/user_bg_8.jpg', id: '7' },
    { title: '早餐', imgUrl: url + '/images/user_bg_9.jpg', id: '8' },
    { title: '英伦骑车', imgUrl: url + '/images/user_bg_10.jpg', id: '9' },
    { title: '草原', imgUrl: url + '/images/user_bg_11.jpg', id: '10' },
    { title: '城市', imgUrl: url + '/images/user_bg_12.jpg', id: '11' }
  ],
  shakeSound: {
    startUrl: url + '/sound/shake.mp3',
    start: '',
    completeUrl: url + '/sound/shakeComplete.wav',
    complete: ''
  },
  shakeWelcomeImg: url + '/images/shake_welcome.png'
}