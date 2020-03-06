//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    list: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"],
    foot_list: [{ ico: 'icon-shu', tit: '指南' }, { ico: 'icon-fen', tit: '测试' }, { ico: 'icon-icon_xinyong_xianxing_jijin-', tit: '专题' }, { ico: 'icon-shezhi', tit: '设置' }],
    foot_type: 1
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
