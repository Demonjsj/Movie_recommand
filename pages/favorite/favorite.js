// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nullTipList: [{
      img: "/images/null.png",
      text: '亲，找不到电影的收藏',
    }],
    nullTipListPreson:[{
      img: "/images/null.png",
      text: '亲，找不到人物的收藏',
    }],
    filmDetail: [],
    movieTag: false,
    personTag:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'film_favorite',
      success: function (res) {
        console.log(res.data)
        that.setData({
          filmDetail: res.data
        })
      },
    })
  },
  gotoLook: function (options) {
    wx.switchTab({
      url: '../popular/popular',
    })
  },

  tab_movie: function (e) {
    var that = this
    that.setData({
      movieTag: false,
      personTag: true
    })
  },
  tab_person: function (e) {
    var that = this
    that.setData({
      movieTag: true,
      personTag: false,
    })
  },
  filmDetail: function (res) {
    console.log(res.currentTarget)
    var data = res.currentTarget.dataset
    wx.navigateTo({
      url: '../filmDetail/filmDetail?id=' + data.id,
    })
  }
})