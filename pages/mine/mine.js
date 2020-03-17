// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    js_code: '',
    isLogin:false,

  },

  onclick: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    // var that = this
    // wx.login({
    //   success: function (res) {
    //     if(res.code){
    //       that.js_code = res.code
    //       wx.getUserInfo({
    //         success:function (infoRes){
    //           wx.request({
    //             url: 'http://localhost:8080/BTS/api/user/wxLogin',
    //             data: {
    //               code: that.js_code
    //             },
    //             success: function (res) {
    //               console.log('login success');
    //               res = res.data;
    //               if (res.result == 0) {
    //                 that.globalData.userInfo = res.userInfo;
    //                 wx.setStorageSync('userInfo', JSON.stringify(res.userInfo));
    //                 wx.setStorageSync('loginFlag', res.skey);
    //                 console.log("skey=" + res.skey);
    //                 callback();
    //               }
    //             }
    //           })
    //         }
    //       })
    //     }
    //   }
    // })

    // wx.login({
    //   success: function(res) {
    //     if(res.code){
    //       that.getSessionKey(res.code, "wxaf2296592f00e75c", "5efdbb85521eed60f1a606d14b1b90f9")
    //     }
    //     console.log(res)
    //   },
    //   fail: function(res) {
    //     console.log(res)
    //   },
    //   complete: function(res) {
    //     console.log(res)
    //   },
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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