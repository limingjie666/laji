// pages/setup/setup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    json:[{
      title:'语言',
      list:['中文','Engkish']
    },{
      title:'城市',
        list: ['石家庄','沈阳','哈尔滨','杭州','福州','济南','广州','武汉','成都','昆明','兰州','台北','南宁','银川','太原','长春','南京','合肥','南昌','郑州','长沙','海口','贵阳','西安','西宁','呼和浩特','拉萨','乌鲁木齐']
    }],
    foot_list: [{ ico: 'icon-shu', tit: '指南' }, { ico: 'icon-fen', tit: '测试' }, { ico: 'icon-icon_xinyong_xianxing_jijin-', tit: '专题' }, { ico: 'icon-shezhi', tit: '设置' }],
    foot_type: 3,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})