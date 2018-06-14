// pages/setting/setting.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionList: [
      { name: '个人资料', tag: "personInfo" },
      { name: '手机信息', tag: "systemInfo" },
      { name: '清除缓存', tag: "clean" },
      { name: '更新位置', tag: "location" },
      { name: '关于', tag: "about" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  optionClick: function (options) {
    console.log(options.currentTarget)
    var url = options.currentTarget.dataset.tag
    if (url == 'clean') {
      wx.showModal({
        title: '确认要清除',
        content: '清除缓存会删除浏览历史和收藏及个人资料',
        success: function (res) {
          if (res.confirm) {
            wx.clearStorage()
            app.initStorage()
            wx.showToast({
              title: '清除成功',
              icon: 'success',
              duration: 1500
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../' + url + '/' + url,
      })
    }

  }
})