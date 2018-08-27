Component({

  behaviors: [],
  config: {
    usingComponents: {
      'wxc-elip': '@minui/wxc-elip'
    }
  },
  properties: {
    articlelist: Array,
  },
  data: {

  }, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },
  moved: function () { },
  detached: function () { },

  methods: {
    to_detail: function(e) {
      this.triggerEvent('to_detail', { index: e.currentTarget.dataset.index, id: e.currentTarget.id })
    }
  }

})