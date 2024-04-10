//index.js

var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    feed: [],
    feed_length: 0,
    start:0,
  },
  //事件处理函数
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap: function() {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  onLoad:  function () {
    var that = this
    //调用应用实例的方法获取全局数据
    this.getData();
  },
  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },

  viewSearch: function(e) {
    var value = e.detail.value;
    this.setData({keyword:value})
  },
  //使用本地 fake 数据实现刷新效果
  getData: function(){
    var that = this
    util.getData.call(that, that.data.start)
  },
  search: function(){
    var that = this
    util.search.call(that, that.data.keyword)
  },
  refresh: function(){
    var that = this
    that.setData({
      start:0,
      feed:[],
      feed_length:0
    })
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
  
    util.getData.call(that, that.data.start)
    setTimeout(function(){
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    },3000)

  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function(){
    var that = this
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })
    that.setData({start:that.data.start+10})
    util.getData.call(that, that.data.start)
    setTimeout(function(){
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    },3000)
  }


})
