// pages/article/articleInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleInfo: ''
  },
  onShareAppMessage: function () {
    return {
      title: '爱心捐赠',
      desc: '第一次送书到校纪!',
      path: '/pages/user?id=123'
    }
  },
  share: function(e) {
    console.log(1);
    this.onShareAppMessage();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/indexinfo#!method=get',
      data: {
        id: options.id
      },
      success: function(e){
        that.setData({
          articleInfo: e.data.articleInfo
        })
      }
    })
  },

  //点赞事件
  praise:function(e){
    let that = this;
    let ispraise = that.data.articleInfo.ispraise;
    let num = 'articleInfo.praise';
    let ip = 'articleInfo.ispraise';
    let id = that.data.articleInfo.id;
    if (ispraise) {
      wx.request({
        url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/cancle#!method=get',
        data: {
          id: id
        },
        success: function(e){
          that.setData({
            [num]: e.data.Number,
            [ip]: false
          })
        }
      })
    } else {
      wx.request({
        url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/sure#!method=get',
        data: {
          id: id
        },
        success: function(e){
          that.setData({
            [num]: e.data.Number,
            [ip]: true
          })
        }
      })
    }
  }
})