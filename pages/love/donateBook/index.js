// pages/love/donateBook/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [ ],
    ismax: false,
    array: [],
    index: 0,
    content: '',
    kd: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let array = [];
    for (let i = 1; i<= 100 ; i++) {
      array.push(i);
    }
    this.setData({
      array: array
    });
  },
  //用户输入
  userInput:function(e){
    this.setData({
      content: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  //用户填写快递单
  kuaidiInput: function(e){
    this.setData({
      kd: e.detail.value
    })
  },

  //选择图片
  uploadPhoto: function(e) {
    let that = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        let images = that.data.images;
        for (let i in tempFilePaths){
          images.push(tempFilePaths[i]);
        }
        console.log(images);
        
        //最大上九张
        if(images.length >= 9) {
          let list = [];
          for (let i = 0; i <= 8; i++) {
            list.push(images[i])
          };
          images = list;
          that.setData({
            ismax: true
          })
        }
        that.setData({
          images: images
        })
        // wx.uploadFile({
        //   url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success: function (res) {
        //     var data = res.data
        //     //do something
        //   }
        // })

      }
    })
  },

  //删除选择图片
  remove: function(e){
    let that = this;

    //当上传图片数达到最大时候出现添加按钮
    if (that.data.ismax == true) {
      that.setData({
        ismax: false
      })
    }
    let index = parseInt(e.currentTarget.dataset.index);
    let images = that.data.images;
    let list = [];
    for (let i in images) {
      if(i != index) {
        list.push(images[i]);
      }
    };
    that.setData({
      images: list
    });
  },
  
  //发布
  push:function(e){
    if (this.data.content == '' || this.data.kd == '' || this.data.images.length == 0) {
      wx.showModal({
        title: '请填写信息',
        content: '请填写完整信息',
      });
      return;
    }
    let url = '';
    let that = this;
    wx.showToast({
      icon: "loading",
      title: "发布中"
    }),
      wx.uploadFile({
      url: 'https://easy-mock.com/mock/5b56bee38912d82e135bc89a/lovejz/loveInfo#!method=get',
        filePath: that.data.images,
        name: 'file',
        header: { "Content-Type": "multipart/form-data" },
        formData: {
          //和服务器约定的token, 一般也可以放在header中
          'session_token': wx.getStorageSync('session_token')
        },
        success: function (res) {
          console.log(res);
          if (res.statusCode != 200) {
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
            return;
          }
          //上传成功
          wx.switchTab({
            url: '/pages/love/index',
          })
        },
        fail: function (e) {
          console.log(e);
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
        },
        complete: function () {
          wx.hideToast();  //隐藏Toast
        }
      })

  }
})