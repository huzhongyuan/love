"use strict";
import common from './../../utils/utils.js';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      '/images/index.png',
      '/images/index.png',
      '/images/index.png'
    ],
    links: [
      '../user/user',
      '../user/user',
      '../user/user'
    ],
    //文章列表
    articlelist: '',
    menber: '',
    menberlist: ''
  },
  onShow: function(){
    let that= this;
    wx.request({
      url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/indexlist#!method=get',
      success: function(e){
        that.setData({
          articlelist: e.data.articlelist,
          menber: e.data.menber,
          menberlist: e.data.menberlist
        })
      }
    })
  },
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    // wx.switchTab({
    //   url: this.data.links[this.data.swiperCurrent]
    // })
  },
  //查看文章列表
  checkmore: function(e) {
    wx.navigateTo({
      url: './../article/index',
    })
  },
  //查看文章详情
  to_detail: function (e) {
    common.todetail(this, e);
  }
});
