var config = require('./config.js')
var message = require('../../component/message/message')
// 获取电影列表
function fetchFilms(url, start, count, cb, fail_cb) {
  var that = this
  message.hide.call(that)
  if (that.data.hasMore) {
    wx.request({
      url: url,
      data: {
        city: config.city,
        start: start,
        count: count,
      },
      method: "GET",
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.subjects.length === 0) {
          that.setData({
            hasMore: false,
          })
        } else {
          that.setData({
            filmList: that.data.filmList.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length,
            showLoading: false,
            hasMore: true,
          })
        }
        console.log(that.data.filmList)
        console.log("--" + that.data.start)
        wx.stopPullDownRefresh()
        typeof cb == 'function' && cb(res.data)
      },
      fail: function (res) {
        typeof fail_cb == 'function' && fail_cb()
      }
    })
  }
}

function fetchFilmDetail(url, id, cb, fail_cb) {
  var that = this
  wx.request({
    url: url + id,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      console.log(res.data)
      that.setData({
        filmDetail: res.data,
        filmName: res.data.title,
      })
      wx.setNavigationBarTitle({
        title: res.data.title
      })
    },
    fail: function (res) {

    }
  })
}

function search(url, keyword, start, count, cb) {
  var that = this
  var url = decodeURIComponent(url)
  wx.request({
    url: url + keyword,
    data: {
      start: start,
      count: count
    },
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      if (res.data.subjects.length === 0) {
        that.setData({
          hasMore: false,
          showLoading: false
        })
      } else {
        that.setData({
          filmList: that.data.filmList.concat(res.data.subjects),
          start: that.data.start + res.data.subjects.length,
          showLoading: false
        })
        wx.setNavigationBarTitle({
          title: keyword
        })
      }
      wx.stopPullDownRefresh()
      typeof cb == 'function' && cb(res.data)
    }
  })
}


module.exports = {
  fetchFilms: fetchFilms,
  fetchFilmDetail: fetchFilmDetail,
  // fetchPersonDetail: fetchPersonDetail,
  search: search
}