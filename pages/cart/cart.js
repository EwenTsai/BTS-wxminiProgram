// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNull: false,
    books: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    var that = this;
    wx.request({

      url: "http://localhost:8080/BTS/api/Cart",

      success: function (res) {
        console.log(res.data)
        if(res.data.data.length==0){
          that.setData({
            isNull: true
          })
        }
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