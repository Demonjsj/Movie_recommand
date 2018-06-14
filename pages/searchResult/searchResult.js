// pages/searchResult/searchResult.js
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
    url: '',
    keyword: '',
    isNull: false,
    nullTipList: [{
      img: "/images/null.png",
      text: 'sorry，没有找到您要的内容，换个关键词试试吧',
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      url: options.url,
      keyword: options.keyword,
      title: options.keyword
    })
    douban.search.call(that, that.data.url, that.data.keyword, that.data.start, that.data.count, function (data) {
      if (data.subjects.length == 0) {
        that.setData({
          isNull: true
        })
      }
    })
  },

  onPullDownRefresh: function () {
    var that = this
    that.setData({
      filmList: [],
      hasMore: true,
      showLoading: true,
      start: 0
    })
    douban.search.call(that, that.data.url, that.data.keyword, that.data.start, that.data.count)
  },
  onReachBottom: function () {
    var that = this
    if (!that.data.showLoading) {
      douban.search.call(that, that.data.url, that.data.keyword, that.data.start, that.data.count)
    }
  },
  filmDetail: function (e) {
    var data = e.currentTarget.dataset;
    wx.redirectTo({
      url: "../filmDetail/filmDetail?id=" + data.id
    })
  },

})