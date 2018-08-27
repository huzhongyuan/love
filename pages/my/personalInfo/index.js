// pages/my/personalInfo/index.js
import common from '../../../utils/utils.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: true,
    name: '',
    phoneNumber: '',
    company: '',
    arraySex: ['男', '女'],
    arrHone: ['重庆','四川'],
    arrpost: ['职员1','支援2'],
    index:[0,0,0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //单选框
  onCheck() {
    let check = this.data.check;
    this.setData({
      check: !check
    })
  },

  //输入姓名
  name: function(e){
    let name = e.detail.value;
    let that = this;
    that.setData({
      name: name
    })
    console.log(that.data.name);
  },
  //输入手机号码
  phoneNumber: function(e){
    let phoneNumber = e.detail.value;
    let that = this;
    that.setData({
      phoneNumber: phoneNumber
    });
    console.log(that.data.phoneNumber);
  },

  //输入公司名称
  company: function(e){
    let company = e.detail.value;
    let that = this;
    that.setData({
      company: company
    });
    console.log(that.data.company);
  },

  //改变性别
  changeSex: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let that = this;
    let index = 'index[0]'
    that.setData({
      [index]: e.detail.value
    })
  },

  //改变家乡
  changeHome: function(e){
    let that = this;
    let index = 'index[1]';
    that.setData({
      [index]: e.detail.value
    });
  },

  //改变职务
  changepost: function(e){
    let that = this;
    let index = 'index[2]';

    that.setData({
      [index]: e.detail.value
    })
  },

  //提交表单
  push: function(e){
    let that = this;
    let name = that.data.name;
    let phoneNumber = that.data.phoneNumber;
    let company = that.data.company;
    if (name != '' && phoneNumber != '' && company != '') {
      if (common.ckName(name) && common.ckPhone(phoneNumber)) {
        wx.showModal({
          title: '成功',
          content: '',
        })
      } else {
        wx.showModal({
          title: '请输入正确格式',
          content: '',
        })
      }
    } else {
      wx.showModal({
        title: '请填写完整信息',
        content: '',
      })
    }
  }
})