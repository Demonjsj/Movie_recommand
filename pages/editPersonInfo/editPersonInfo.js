// pages/editPersonInfo/editPersonInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    index: 0,
    sex_array: ['男', '女'],
    star_array: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    starSelect: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'personinfo',
      success: function (res) {
        console.log(res)
        var data = res.data
        that.setData({
          name: data.name,
          nickname: data.nickname,
          sexSelect: data.sexSelect,
          age: data.age,
          date: data.date,
          starSelect: data.starSelect,
          company: data.company,
          school: data.school,
          phoneNumber: data.phoneNumber,
          email: data.email,
          personSign: data.personSign,
        })
      },
    })
  },

  bindSexPickerChange: function (res) {
    var that = this
    console.log(res)
    that.setData({
      sexSelect: that.data.sex_array[res.detail.value]
    })
  },
  bindTimePickerChange: function (res) {
    var that = this
    console.log(res)
    that.setData({
      date: res.detail.value
    })
  },
  bindStarPickerChange: function (res) {
    var that = this
    console.log(res)
    that.setData({
      starSelect: that.data.star_array[res.detail.value]
    })
  },
  savePersonInfo: function (res) {
    var that = this
    var data = res.detail.value
    console.log(res)
    wx.setStorage({
      key: 'personinfo',
      data: {
        name: data.name,
        nickname: data.nickname,
        sexSelect: data.sexSelect,
        age: data.age,
        date: data.date,
        starSelect: data.starSelect,
        company: data.company,
        school: data.school,
        phoneNumber: data.phoneNumber,
        email: data.email,
        personSign: data.personSign,
      },
      success: function (res) {
        wx.showToast({
          title: '资料修改成功',
          icon: 'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.navigateTo({
            url: '../personInfo/personInfo'
          })
        }, 2000)
      }

    })
  }

})