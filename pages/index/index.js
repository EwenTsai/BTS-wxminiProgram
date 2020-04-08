//index.js
//获取应用实例
const app = getApp()

import { getBook } from '../api/api'
import { getHotBook } from '../api/api'
import api from '../../utils/request'

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
    //获取书本信息
    api.get(getBook,{
      pageNum: 0,
      num: 3
    }).then(res => {
      }).catch(err => {
        this.setData({
          books: err.content
        })
      })
    //获取热门书本信息
    api.get(getHotBook,{
      num: 3
    }).then(res => {
      }).catch(err => {
        this.setData({
          saleBooks: err.content
        })
      })
  },
})
