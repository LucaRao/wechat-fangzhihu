//logs.js
var util = require('../../utils/util.js')
var app = getApp()
import {
  supabase
} from '../../lib/supabase'
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: async function () {
    console.log('onLoad')
    var that = this
    var that = this
    wx.login({
      success:async function (res) {
            const { data:{user}, error } = await supabase.auth.signInWithWechat({code:res.code})
            app.globalData.userInfo = user;
            that.setData({userInfo:user})

      }
    })
  }
})