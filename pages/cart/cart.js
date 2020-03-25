// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNull: false,
    books: [],
    amount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    var that = this;
    wx.request({

      url: "http://localhost:8080/BTS/api/Cart",
      data:{
        uid: wx.getStorageSync('uid')
      },

      success: function (res) {
        if(res.data.data.length==0){
          that.setData({
            isNull: true
          })
        }else{
          that.setData({
            books: res.data.data
          })
          for (var i = 0; i < res.data.data.length; i++) {
            that.setData({
              amount: that.data.amount + res.data.data[i].price * res.data.data[i].amount
            })
          }
        }
      },
      fail: function (err) {
        console.log(err)
      }

    })
  }
})