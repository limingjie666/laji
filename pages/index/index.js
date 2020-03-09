//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arr: [
      {
        title: "湿垃圾",
        color:"#966b58",
      },
      {
        title: "干垃圾",
        color: "#2d2926",
      },
      {
        title: "可回收垃圾",
        color: "#003d6c",
      },
      {
        title: "有害垃圾",
        color: "#ff3d33",
      }
    ],
    left_type:0,
    right_arr: ['CoCo的青稞', '姑娘果', 'CoCo的青稞', '姑娘果', 'CoCo的青稞', '姑娘果', 'CoCo的青稞', '姑娘果'],
    foot_list: [{ ico: 'icon-shu', tit: '指南' }, { ico: 'icon-fen', tit: '测试' }, { ico: 'icon-icon_xinyong_xianxing_jijin-', tit: '专题' }, { ico: 'icon-shezhi', tit: '设置' }],
    foot_type:0,
    ajax: null,
    one:null,
    tow:null
    
  },
  tabs:function(ev){
    this.setData({ left_type: ev.currentTarget.dataset.index})
  },
  bindViewTap: function(ev) {
    var url=''
    if (ev.currentTarget.dataset.index===0){
      url='../index/index'
    } else if (ev.currentTarget.dataset.index === 1){
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
  onLoad: function (){
    var str = getApp().globalData.ajax.data[this.data.left_type > 1 ? this.data.left_type - 2 : this.data.left_type + 2].require.split('；')
    var str1 = getApp().globalData.ajax.data[this.data.left_type > 1 ? this.data.left_type - 2 : this.data.left_type + 2].common.split('、')
    this.setData({ ajax: getApp().globalData.ajax.data, one: str[0], tow: str[1], right_arr:str1})
    console.log(this.data.ajax)
    console.log(this.data.one)
    
  }, 
    click() {
    wx.navigateTo({
      url: "../search/search"
    })
  }
})
