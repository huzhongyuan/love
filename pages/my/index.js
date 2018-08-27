// pages/my/index.js
import common from './../../utils/utils.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      AvatarUrl: '',
      NickName: ''
    },
    articlelist: '',
    pullup: 'none',
    isgetUserInfo: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options)  {
    let that = this;
    /**  
     * 获取用户信息  
     */
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res);
              that.setData({
                userInfo: res.userInfo,
                isgetUserInfo: true
              })
            }
          })
        } else {
          that.setData({
            isgetUserInfo: false
          })
          console.log(111);
        }
      }
    });
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },
  //获取授权
  getUserInfo: function (e) {
    var that = this
    console.log(e)
    if (e.detail.errMsg != "getUserInfo:fail auth deny") {
      wx.getUserInfo({
        success: function (res) {
          console.log(res);
          that.setData({
            userInfo: res.userInfo,
            isgetUserInfo: true
          })
        }
      })
      that.setData({
        isgetUserInfo: true
      })
    } else {
      that.setData({
        isgetUserInfo: false
      })
    }
  },

//点击爱心事件
  islove: function (e) {
    let url1 = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/addlove#!method=get';
    let url2 = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/reducelove#!method=get'
    common.islove(e, this, url1, url2);
  },
  //首次加载界面
  onShow: function (e) {
    let url = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/lovelist#!method=get';
    common.fristload(this, url)
  },
  //上拉触顶事件
  onPullDownRefresh: function (e) {
    let url = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/lovelist#!method=get';
    common.uppull(this, url);
  },

  //下拉加载事件
  onReachBottom: function (e) {
    let url = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/lovelist#!method=get';
    common.downpull(this, url);
  },
  //转到文章详情
  donateBook: function (e) {
    let that = this;
    let index = e.detail.index;
    let id = that.data.articlelist[index].id;
    //跳转到文章详情
    wx.navigateTo({
      url: './mydonateInfo/index?id=' + id
    })
  },
  //转到个人信息
  to_personal:function(e){
    wx.navigateTo({
      url: './personalInfo/index',
    })
  }
})