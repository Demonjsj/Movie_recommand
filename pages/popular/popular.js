// pages/popular/popular.js
var douban = require('../../comm/script/fetch')
var config = require('../../comm/script/config')
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerList: config.bannerList,
    start: 0,
    count: 20,
    filmList: [],
    hasMore: true,
    showLoading: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showNavigationBarLoading()
    app.getCity(function () {
      wx.hideNavigationBarLoading()
      console.log(config.city)
      wx.setNavigationBarTitle({
        title: '正在热映 - ' + config.city,
      })
      douban.fetchFilms.call(that, config.apiList.popular, that.data.start, that.data.count)
    })
  },
  onReachBottom: function (options) {
    var that = this
    douban.fetchFilms.call(that, config.apiList.popular, that.data.start, that.data.count)
  },
  banner_detail: function (res) {
    console.log(res.currentTarget)
    var data = res.currentTarget.dataset
    wx.navigateTo({
      url: '../filmDetail/filmDetail?id=' + data.id,
    })
  },
  filmDetail: function (res) {
    console.log(res.currentTarget)
    var data = res.currentTarget.dataset
    wx.navigateTo({
      url: '../filmDetail/filmDetail?id=' + data.id,
    })
  },
  searchFilm: function (res) {
    wx.navigateTo({
      url: '../search/search',
    })
  }
})