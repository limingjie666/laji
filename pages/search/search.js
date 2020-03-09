// pages/search/search.js
Page({

  data: {
    list:[]
  },
  inputedit: function (ev) {

    var that = this;
    // ev.detail.value
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/search',
     method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },

     data:{
       q: ev.detail.value
     },
     success: function (res) {
      //  console.log(res.data)
       that.setData({ list: res.data.data})
       console.log(that.data.list)
     }
   })
  },
  click(){
    wx.navigateTo({
      url: "../index/index"
    })
  }
})