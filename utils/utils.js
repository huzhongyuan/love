//首次加载界面
const fristload = (that, url) => {
  wx.request({
    url: url,
    data: {
      page: 0
    },
    method: 'GET',
    success: function (e) {
      that.setData({
        articlelist: e.data.articlelist
      })
    }
  })
};

//点击爱心事件
const islove = (e,that,url1,url2) => {
  let index = e.detail.index;
  let id = parseInt(e.detail.id);
  console.log(index + id);

  //收藏
  if (!that.data.articlelist[index].islove) {
    wx.request({
      url: url1,
      data: {
        id: id
      },
      method: 'GET',
      success: function (e) {
        let num = 'articlelist[' + index + '].love';
        let isl = 'articlelist[' + index + '].islove'
        that.setData({
          [num]: e.data.Number,
          [isl]: true
        })
      }
    })
  } else {
    wx.request({
      url: url2,
      data: {
        id: id
      },
      method: 'GET',
      success: function (e) {
        let num = 'articlelist[' + index + '].love';
        let isl = 'articlelist[' + index + '].islove'
        that.setData({
          [num]: e.data.Number,
          [isl]: false
        })
      }
    })
  }
}

//上拉触顶事件
const uppull = (that, url) => {
  wx.request({
    url: url,
    data: {
      'page': 1,
    },
    method: 'GET',
    success: function (e) {
      let articlelist = e.data.articlelist;
      console.log()
      that.setData({
        articlelist: articlelist
      })
    }
  })
  wx.stopPullDownRefresh()
}

//下拉加载事件
const downpull = (that, url) => {
  that.setData({
    pullup: 'block'
  });
  wx.request({
    url: url,
    method: 'GET',
    data: {
      'pages': 1
    },
    success: function (e) {
      let articlelist = that.data.articlelist;
      articlelist.push(...e.data.articlelist);
      that.setData({
        articlelist: articlelist,
        pullup: 'none'
      })
    }
  })
}

//首页转到文章详情
const todetail = (that, e) => {
    let index = e.detail.index;
    console.log(index);
    let id = that.data.articlelist[index].id;
    console.log(id);
    wx.navigateTo({
      url: './../article/articleInfo/index?id=' + id,
    })
}

//验证是否为中文名
const ckName = (str) => {
  var reg = /^[\u4E00-\u9FA5]+$/; //全都是汉字
  return reg.test(str);
}

//验证手机号码
const ckPhone = (str) => {
  var regPartton = /^(1)[0-9]{10}$/;
  return regPartton.test(str);
}
module.exports = {
  fristload: fristload,
  islove: islove,
  uppull: uppull,
  downpull: downpull,
  todetail: todetail,
  ckName: ckName,
  ckPhone: ckPhone
}