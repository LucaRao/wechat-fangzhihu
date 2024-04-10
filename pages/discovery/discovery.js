//discovery.js
var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    imgUrls: [
      'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240402111127.png',
      'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240410120047.png?t=2024-04-10T04%3A01%3A25.747Z',
      'https://cfm40oi5g6hasssesujg.baseapi.memfiredb.com/storage/v1/object/public/files/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240410120019.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0,
    start:0
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

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
 


  //使用本地 fake 数据实现刷新效果
  refresh: function(){
    var that = this
    util.getDiscovery.call(that, that.data.start)
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function(){
    var that = this
    this.setData({start:this.data.start+10})
    util.getDiscovery.call(that, that.data.start)
  }
});
