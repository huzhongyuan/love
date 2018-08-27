// pages/article/index.js
import common from './../../utils/utils.js';
let articlelist;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pullup: 'none'
  },

  //首次加载界面
  onShow: function(e) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/ariticlelist#!method=get',
      data:{
        page: 1
      },
      method: 'GET',
      success: function (e) {
        that.setData({
          articlelist: e.data.articlelist
        })
      },
      fail: function(e) {
        console.log(e);
      }
    })
  },
  //上拉触顶事件
  onPullDownRefresh: function (e) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/ariticlelist#!method=get',
      data: {
        'page': 1,
      },
      method: 'GET',
      success: function (e) {
        articlelist = e.data.articlelist;
        console.log()
        that.setData({
          articlelist: articlelist
        })
      }
    })
    wx.stopPullDownRefresh()
  },

  //下拉加载事件
  onReachBottom: function(e) {
    let that = this
    that.setData({
      pullup: 'block'
    });
    wx.request({
      url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/ariticlelist#!method=get',
      method: 'GET',
      data: {
        'pages': 1
      },
      success: function(e) {
        articlelist = that.data.articlelist;
        articlelist.push(...e.data.articlelist);
        that.setData({
          articlelist: articlelist,
          pullup: 'none'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  to_detail: function(e) {
    common.todetail(this, e);
  }
})