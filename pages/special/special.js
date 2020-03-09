// pages/special/special.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      icon:'icon-xiaolongxia',
      title:'小龙虾'
    },{
        icon: 'icon-baozongzi',
        title: '粽子'
      }, {
        icon: 'icon-zhenzhunaicha',
        title: '奶茶'
      },{
        icon: 'icon-dianchi',
        title: '电池'
      }, {
        icon: 'icon-waimai-',
        title: '外卖'
      }, {
        icon: 'icon-huazhuangpin',
        title: '化妆品'
      }],
    foot_list: [{ ico: 'icon-shu', tit: '指南' }, { ico: 'icon-fen', tit: '测试' }, { ico: 'icon-icon_xinyong_xianxing_jijin-', tit: '专题' }, { ico: 'icon-shezhi', tit: '设置' }],
    foot_type: 2,
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
})