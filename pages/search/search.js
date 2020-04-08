// pages/search/search.js
import { searchBook } from '../api/api'
import api from '../api/api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputData: '',
    result: []
  },
  // 取消搜索,返回主页面
  hideInput: function () {
    wx.navigateBack({
      //跳转，返回主页面路径
      url: '../index/index'
    })
  },
  search: function () {
    api.get(searchBook).then(res => {})
    .catch(err => {
      this.setData({
        result: err
      })
    })
  }
})