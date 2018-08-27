// pages/my/mydonateInfo/index.js
import common from './../../../utils/utils.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let id = options.id;
    wx.request({
      url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/loveInfo#!method=get',
      data: {
        id: id
      },
      success: function (e) {
        let articlelist = e.data;
        that.setData({
          articlelist: articlelist
        })
        console.log(that.data.articlelist);
      }
    })
  },
  //点击爱心事件
  islove: function (e) {
    let url1 = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/addlove#!method=get';
    let url2 = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/reducelove#!method=get'
    common.islove(e, this, url1, url2);
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