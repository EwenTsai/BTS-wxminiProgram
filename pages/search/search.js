// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 取消搜索,返回主页面
  hideInput: function () {
    wx.navigateTo({
      //跳转，返回主页面路径
      url: '../log1/log1'
    })
  }
})