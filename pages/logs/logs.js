//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    // list: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"],
    list:[{
      title: '洗衣液桶',
      type: '可回收垃圾',
      lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
    }, {
        title: '空调消毒液瓶',
        type:'干垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }, {
        title: '脏纸尿裤',
        type: '干垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }, {
        title: '手臂包',
        type: '可回收垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }, {
        title: '玻璃制品',
        type: '可回收垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }, {
        title: '茅台空酒瓶',
        type: '可回收垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }, {
        title: '电子塑料包装',
        type: '可回收垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }, {
        title: '水笔',
        type: '干垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }, {
        title: '试卷',
        type: '可回收垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }, {
        title: '厨余果皮',
        type: '湿垃圾',
        lios: ["湿垃圾", "干垃圾", "可回收垃圾", "有害垃圾"]
      }],
      cen_type:0,
    foot_list: [{ ico: 'icon-shu', tit: '指南' }, { ico: 'icon-fen', tit: '测试' }, { ico: 'icon-icon_xinyong_xianxing_jijin-', tit: '专题' }, { ico: 'icon-shezhi', tit: '设置' }],
    foot_type: 1
  },
  bindViewTap: function (ev) {
    var url = ''
    if (ev.currentTarget.dataset.index === 0) {
      url = '../index/index'
    } else if (ev.currentTarget.dataset.index === 1) {
      url = '../logs/logs'
    } else if (ev.currentTarget.dataset.index === 2) {
      url = '../special/special'
    } else if (ev.currentTarget.dataset.index === 3) {
      url = '../setup/setup'
    }
    wx.navigateTo({
      url: url
    })
  },
  click:function(ev){
    if (ev.currentTarget.dataset.item==this.data.list[this.data.cen_type].type){
      this.setData({cen_type:++this.data.cen_type})
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
