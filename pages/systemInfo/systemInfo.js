// pages/systemInfo/systemInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: [],
    minaVersion: 'v2.0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        var infoList = []
        var model = res.model
        var ratio = res.screenWidth + '*' + res.screenHeight
        var language = res.language
        var version = res.version
        var wxversion = that.data.minaVersion
        infoList.push({ info: '手机型号', name: model })
        infoList.push({ info: '分辨率', name: ratio })
        infoList.push({ info: '系统语言', name: language })
        infoList.push({ info: '微信版本', name: version })
        infoList.push({ info: '小程序版本', name: wxversion })
        that.setData({
          infoList: infoList
        })
      },
    })
  },


})