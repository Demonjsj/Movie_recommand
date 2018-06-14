//app.js
var config = require('/comm/script/config.js')
console.log(config)
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    //初始化缓存
    this.initStorage()
  },
  getCity: function (cb) {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        var locationParam = res.latitude + "," + res.longitude + "1"
        wx.request({
          url: config.apiList.baiduMap,
          data: {
            ak: config.baiduAK,
            location: locationParam,
            output: 'json',
            pois: '1'
          },
          method: "GET",
          success: function (res) {
            console.log(res.data)
            config.city = res.data.result.addressComponent.city.slice(0, -1)
            typeof cb == "function" && cb(res.data.result.addressComponent.city.slice(0, -1))
          },
          fail: function (res) {
            that.getCity();
          }
        })
      },
    })
  },
  initStorage: function (res) {
    wx.getStorageInfo({
      success: function (res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
        // 判断背景卡选择数据是否存在，没有则创建
        if (!('skin' in res.keys)) {
          wx.setStorage({
            key: 'skin',
            data: '',
          })
        }
        var personinfo = {
          name: '',
          nickname: '',
          sexSelect: '',
          age: '',
          date: '',
          starSelect: '',
          company: '',
          school: '',
          phoneNumber: '',
          email: '',
          personSign: '',
        }
        if (!('personinfo' in res.keys)) {
          wx.setStorage({
            key: 'personinfo',
            data: personinfo,
          })
        }

        if (!('film_favorite' in res.keys)) {
          wx.setStorage({
            key: 'film_favorite',
            data: [],
          })
        }
        if (!('shakeFilmList' in res.keys)) {
          wx.setStorage({
            key: 'shakeFilmList',
            data: ''
          })
        }
      },
    })
  }

})