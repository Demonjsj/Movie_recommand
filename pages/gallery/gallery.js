// pages/gallery/gallery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    galleryList: [],
    nullTipList: [{
      img: "/images/null.png",
      text: '亲，没有上传照片哦',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'gallery',
      success: function (res) {
        that.setData({
          galleryList: res.data
        })
      },
    })
  },

  uploadPhoto: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        console.log(res.tempFilePaths[0])
        var tempFilePaths = res.tempFilePaths[0]
        wx.saveFile({
          tempFilePath: tempFilePaths,
          success: function (res) {
            that.setData({
              galleryList: that.data.galleryList.concat(res.savedFilePath)
            })
            wx.setStorage({
              key: 'gallery',
              data: that.data.galleryList,
            })
          }
        })
      },
    })
  },
  enlargeImg: function (res) {
    var that = this
    console.log(res.currentTarget)
    if (this.endTime - this.startTime < 350) {
      wx.previewImage({
        current: res.currentTarget.dataset.url,
        urls: that.data.galleryList
      })
    }
  },

  bindtouchstart: function (e) {
    this.startTime = e.timeStamp;
  },
  bindtouchend: function (e) {
    this.endTime = e.timeStamp;
  },
  deleteImg: function (res) {
    console.log(res.data)
    var that = this;
    var images = that.data.galleryList;
    var index = res.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          images.splice(index, 1);
        } else if (res.cancel) {
          return false;
        }
        that.setData({
          galleryList: images
        });
        wx.setStorage({
          key: 'gallery',
          data: that.data.galleryList,
        })
      }
    })
  }

})