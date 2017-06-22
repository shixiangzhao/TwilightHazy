//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '夜幕降临了，血色的夕阳消失于...',
    scanInfo: '扫一扫',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //扫一扫
  scanCodeView: function() {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res);
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
