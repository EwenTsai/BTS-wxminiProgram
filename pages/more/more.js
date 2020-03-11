// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    wx.request({

      url: "http://localhost:8080/BTS/api/Book/all",

      success: function (res) {
        that.setData({
          books: res.data
        })
        console.log(res.data.length)
      },
      fail: function (err) {
        console.log(err)
      }

    })
  }
})