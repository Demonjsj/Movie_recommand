// pages/personInfo/personInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personInfoList: []
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
        var personInfoList = []
        personInfoList.push({ info: '姓名', content: data.name == '' ? '未填写' : data.name })
        personInfoList.push({ info: '昵称', content: data.nickname == '' ? '未填写' : data.nickname })
        personInfoList.push({ info: '性别', content: data.sexSelect == '' ? '未填写' : data.sexSelect })
        personInfoList.push({ info: '年龄', content: data.age == '' ? '未填写' : data.age })
        personInfoList.push({ info: '生日', content: data.date == '' ? '未填写' : data.date })
        personInfoList.push({ info: '星座', content: data.starSelect == '' ? '未填写' : data.starSelect })
        personInfoList.push({ info: '公司', content: data.company == '' ? '未填写' : data.company })
        personInfoList.push({ info: '学校', content: data.school == '' ? '未填写' : data.school })
        personInfoList.push({ info: '手机号码', content: data.phoneNumber == '' ? '未填写' : data.phoneNumber })
        personInfoList.push({ info: '邮箱', content: data.email == '' ? '未填写' : data.email })
        personInfoList.push({ info: '个性签名', content: data.personSign == '' ? '未填写' : data.personSign })
        that.setData({
          personInfoList: personInfoList
        })
      },
    })
  },

  editPersonInfo: function (res) {
    wx.navigateTo({
      url: '../editPersonInfo/editPersonInfo',
    })
  }
})