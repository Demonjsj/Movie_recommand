// pages/coming/coming.js
var config = require('../../comm/script/config.js')
var douban = require('../../comm/script/fetch.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmList: [],
    start: 0,
    count: 20,
    showLoading: true,
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    douban.fetchFilms.call(that, config.apiList.coming, that.data.start, that.data.count)
  },
  onPullDownRefresh: function (option) {
    var that = this
    that.setData({
      filmList: [],
      start: 0,
      count: 20,
      showLoading: true,
      hasMore: true
    })
    douban.fetchFilms.call(that, config.apiList.coming, that.data.start, that.data.count)
  },
  onReachBottom: function (option) {
    var that = this
    if (!that.data.showLoading) {
      douban.fetchFilms.call(that, config.apiList.coming, that.data.start, that.data.count)
    }
  },
  filmDetail: function (res) {
    console.log(res.currentTarget)
    var data = res.currentTarget.dataset
    wx.navigateTo({
      url: '../filmDetail/filmDetail?id=' + data.id,
    })
  }
})