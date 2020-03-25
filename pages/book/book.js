// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/BTS/api/Book/searchBook',
      data:{
        id:options.bookId
      },
      success: function (res) {
        that.setData({
          book:res.data
        })
      }
    })
  },

  addtoCart: function(){
    wx.request({
      url: 'http://localhost:8080/BTS/api/Cart/add',
      data:{
        uid: wx.getStorageSync('uid'),
        bookId: this.data.book.id
      },
      success: function(res){
        wx.switchTab({
          url: '../cart/cart'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})