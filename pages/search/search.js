// pages/search/search.js

var config = require('../../comm/script/config.js')
var douban = require('../../comm/script/fetch.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchType: 'keyword',
    hotKeyword: config.hotKeyword,
    hotTag: config.hotTag
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  changeType: function (options) {
    var that = this
    var searchType = ['keyword', 'tag']
    wx.showActionSheet({
      itemList: ['默认', '类型'],
      success: function (res) {
        console.log(res.tapIndex)
        that.setData({
          searchType: searchType[res.tapIndex]
        })
      }
    })
  },
  searchLink: function (options) {
    var that = this
    var keyword = options.currentTarget.dataset.keyword
    wx.redirectTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(config.apiList.search.byKeyword) + '&keyword=' + keyword
    })
  },
  tagLink: function (options) {
    var that = this
    var keyword = options.currentTarget.dataset.keyword
    wx.redirectTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(config.apiList.search.byTag) + '&keyword=' + keyword
    })
  },
  search: function (e) {
    var that = this
    var keyword = e.detail.value.keyword
    var searchUrl = that.data.searchType == 'keyword' ? config.apiList.search.byKeyword : config.apiList.search.byTag
    wx.redirectTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(searchUrl) + '&keyword=' + keyword
    })
  }
})