//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    books: [],
    saleBooks: []
  },
  // 查询搜索的接口方法
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  more: function (){
    wx.navigateTo({
      url: '../more/more',
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({

      url: "http://localhost:8080/BTS/api/Book",

      data:{
        pageNum: 0,
        num: 3
      },

      success: function (res) {
        that.setData({
          books:res.data.content
        })
      },
      fail: function (err) {
        console.log(err)
      }

    })
    wx.request({
      url: 'http://localhost:8080/BTS/api/Book/sales',

      data: {
        pageNum: 0,
        num: 3
      },

      success: function (res) {
        that.setData({
          saleBooks: res.data.content
        })
      },
      fail: function (err) {
        console.log(err)
      }

    })
  },
})
