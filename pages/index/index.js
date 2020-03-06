//index.js
//获取应用实例
const app = getApp()

Page({
  // 查询搜索的接口方法
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})
