'use strict';
import common from './../../utils/utils.js';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    personNumber: '45611111',
    bookNumber: '1260',
    style: 'display:flex; align-items: center;justify-content:center;height: 90rpx; font-size: 36rpx;width: 310rpx;background: #FFCD36;border-radius: 66rpx;color: #333333;',
    
    //文章列表
    articlelist: '',
    pullup: 'none'
    },
  onShareAppMessage: function () {
    return {
      title: '爱心捐赠',
      path: '/pages/user?id=123'
    }
  },
  onShow: function(e) {
    let url = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/lovelist#!method=get';
    common.fristload(this, url)
  },
  showDialog() {
    let dialogComponent = this.selectComponent('.wxc-dialog')
    dialogComponent && dialogComponent.show();
  },
  hideDialog() {
    let dialogComponent = this.selectComponent('.wxc-dialog')
    dialogComponent && dialogComponent.hide();
  },
  onConfirm() {
    console.log('点击了确认按钮')
    this.hideDialog();
    wx.navigateTo({
      url: './donateBook/index',
    })
  },
  onCancel() {
    console.log('点击了取消按钮')
    this.hideDialog()
  },

  //点击爱心事件
  islove: function(e) {
    let url1 = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/addlove#!method=get';
    let url2 = 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/reducelove#!method=get'
    common.islove(e, this, url1, url2);
  },
  //转到书籍详情
  donateBook: function(e){
    let that = this;
    let index = e.detail.index;
    let id = that.data.articlelist[index].id;
    //跳转到文章详情
    wx.navigateTo({
      url: './donateInfo/index?id='+id
    })
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
  }
});
