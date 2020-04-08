// pages/more/more.js

import { getAllBook } from '../api/api'
import api from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    api.get(getAllBook).then(res =>{})
    .catch( err => {
      this.setData({
        books: err
      })
    })
  }
})