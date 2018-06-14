// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nullTipList: [{
      img: "/images/null.png",
      text: '亲，找不到电影的浏览记录',
    }],
    nullTipListPreson: [{
      img: "/images/null.png",
      text: '亲，找不到人物的浏览记录',
    }],
    filmDetail: [],
    movieTag: false,
    personTag: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  gotoLook: function (options) {
    wx.switchTab({
      url: '../popular/popular',
    })
  },

})