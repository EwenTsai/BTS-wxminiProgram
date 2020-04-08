// pages/book/book.js

import { searchBook } from '../api/api'
import api from '../../utils/request'
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

    //获取书本信息
    api.get(searchBook,{
      id:options.bookId
    }).then(res => {
      }).catch(err => {
        this.setData({
          book: err
        })
      })
  },
})