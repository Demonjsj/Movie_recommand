// pages/location/location.js
var config = require('../../comm/script/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '',
    latitude: '',
    position: '',
    markers: [{
      iconPath: "/images/green_tri.png",
      id: 0,
      latitude: '',
      longitude: '',
      width: 150,
      height: 150
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();
  },


  getLocation: function (res) {
    var that = this
    wx.getLocation({
      type: 'gcj02 ',
      success: function (res) {
        console.log(res)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude,
          }]
        })
        // 获取中文详细地址
        var locationParam = res.latitude + ',' + res.longitude
        wx.request({
          url: config.apiList.baiduMap,
          data: {
            ak: config.baiduAK,
            location: locationParam,
            output: 'json',
            pois: '1'
          },
          method: 'GET',
          success: function (res) {
            console.log(res)
            that.setData({
              markers: [{
                iconPath: "/images/green_tri.png",
                id: 0,
                width: 50,
                height: 50,
                latitude: res.latitude,
                longitude: res.longitude,
              }],
              position: res.data.result.formatted_address
            })
          }
        })
      },
    })
  },
  relocation: function () {
    this.getLocation();
  }
})