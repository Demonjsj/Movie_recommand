// pages/filmDetail/filmDetail.js
var config = require('../../comm/script/config.js')
var douban = require('../../comm/script/fetch.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmDetail: [],
    filmName: '',
    bt_tag: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = options.id
    douban.fetchFilmDetail.call(that, config.apiList.filmDetail, id, function (data) {
      wx.getStorage({
        key: 'film_favorite',
        success: function (res) {
          console.log("123" + res.data)
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].id == data.id) {
              that.setData({
                bt_tag: true,
              })
            }
          }
        },
        fail: function () {
          console.log("asdad")
        }
      })
    })
  },
  filmCollect: function (options) {
    var that = this
    var filmDetailList = []
    wx.getStorage({
      key: 'film_favorite',
      success: function (res) {
        console.log("123123"+res.data)
        filmDetailList = res.data
        filmDetailList.push(that.data.filmDetail)
        wx.setStorage({
          key: 'film_favorite',
          data: filmDetailList,
        })
        that.setData({
          bt_tag: true,
        })
      },
    })
  },
  filmCollectOn: function (options) {
    var that = this
    var filmDetailList = []
    wx.getStorage({
      key: 'film_favorite',
      success: function (res) {
        console.log("456456" + res.data)
        filmDetailList = res.data
        filmDetailList.splice(that.data.filmDetail, 1)
        wx.setStorage({
          key: 'film_favorite',
          data: filmDetailList,
        })
        that.setData({
          bt_tag: false,
        })
      },
    })
  }
})
