Component({

  behaviors: [],
  config: {
    usingComponents: {
      'wxc-elip': '@minui/wxc-elip'
    }
  },
  properties: {
    articlelist: Array,
    share: String,
  },
  data: {

  }, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },
  moved: function () { },
  detached: function () { },

  methods: {
    love: function(e) {
      console.log(e);
      this.triggerEvent('myevent', { index: e.currentTarget.dataset.index, id: e.currentTarget.id });
    },
    donateBook: function(e) {
      this.triggerEvent('donateBook', { index: e.currentTarget.dataset.index, id: e.currentTarget.id });
    }
  }

})