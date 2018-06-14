// pages/skin/skin.js
var config = require('../../comm/script/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skinList: config.skinList,
    nowSkin: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        console.log('skin = ' + res.data)
        if (res.data == "") {
          that.setData({
            nowSkin: config.skinList[0].imgUrl
          })
        } else {
          that.setData({
            nowSkin: res.data
          })
        }
      },
    })
  },
  bg_select: function (options) {
    var that = this
    console.log(options.currentTarget)
    var url = options.currentTarget.dataset.url
    wx.setStorage({
      key: 'skin',
      data: url,
      success: function () {
        wx.navigateBack()
      }
    })
  }
})