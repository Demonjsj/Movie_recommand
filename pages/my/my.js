// pages/my/my.js
var config = require('../../comm/script/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    functionList: [
      { img: "/images/collect.png", name: "收藏", enName: 'favorite' },
      { img: "/images/records.png", name: "浏览记录", enName: 'history' },
      { img: "/images/shake.png", name: "摇一摇", enName: 'shake' },
      { img: "/images/photo.png", name: "相册", enName: 'gallery' },
      { img: "/images/setting.png", name: "设置", enName: 'setting' },
    ],
    skin: '',
    img: '',
    gender: '',
    nickName: '',
    address: ''
  },

  onLoad: function (options) {
    console.log("---onLoad")
    var that = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo)
        that.setData({
          img: res.userInfo.avatarUrl,
          gender: res.userInfo.gender,
          nickName: res.userInfo.nickName,
          address: res.userInfo.province + "," + res.userInfo.city
        })
      }
    })
  },

  onShow: function (options) {
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        console.log("aaa = " + res.data)
        if (res.data == "") {
          that.setData({
            skin: config.skinList[0].imgUrl
          })
        } else {
          that.setData({
            skin: res.data
          })
        }
      },
    })
  },

  viewGridDetail: function (e) {
    console.log(e.currentTarget)
    var data = e.currentTarget.dataset
    
    wx.navigateTo({
      url: "../" + data.url + '/' + data.url
    })
  },

  bg_change: function (res) {
    wx.navigateTo({
      url: '../skin/skin',
    })
  },
})