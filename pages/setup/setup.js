// pages/setup/setup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    json:[{
      title:'语言',
      list:['中文','Engkish'],
      type:'中文'
    },{
      title:'城市',
        list: ['石家庄','沈阳','哈尔滨','杭州','福州','济南','广州','武汉','成都','昆明','兰州','台北','南宁','银川','太原','长春','南京','合肥','南昌','郑州','长沙','海口','贵阳','西安','西宁','呼和浩特','拉萨','乌鲁木齐'],
        type:'石家庄'
    }],
    foot_list: [{ ico: 'icon-shu', tit: '指南' }, { ico: 'icon-fen', tit: '测试' }, { ico: 'icon-icon_xinyong_xianxing_jijin-', tit: '专题' }, { ico: 'icon-shezhi', tit: '设置' }],
    foot_type: 3,
  },
  onclick:function(ev){
    var arr=this.data.json;
    arr[ev.currentTarget.dataset.ind].type = ev.currentTarget.dataset.lis
    this.setData({
      json: arr
    })
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