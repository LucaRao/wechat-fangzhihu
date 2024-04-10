
import {
  supabase
} from '../lib/supabase'

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
};


async function getData(start,cb){
  var that = this;
  try {
    let { data: feed_list, error } = await supabase
  .from('feed_list')
  .select('*').eq("type","index").range(start, start+10)
  if(feed_list.length>0){
    that.setData({
      feed:that.data.feed.concat(feed_list),
      feed_length: that.data.feed_length + feed_list.length
    });
  }
  } catch (error) {
    wx.showToast({
      title: error.message || error.msg,
      icon: 'error',
      duration: 2000
    })
  }
  }

  async function search(keyword,cb){
    var that = this;
    try {
      let { data: feed_list, error } = await supabase
    .from('feed_list')
    .select('*').ilike('question', `%${keyword}%`)
    if(feed_list.length>0){
      that.setData({
        feed:feed_list,
        feed_length:feed_list.length
      });
    }
    } catch (error) {
      wx.showToast({
        title: error.message || error.msg,
        icon: 'error',
        duration: 2000
      })
    }
    }

async function getDiscovery(start){
  var that = this;
  try {
    let { data: feed_list, error } = await supabase
  .from('feed_list')
  .select('*').eq("type","discovery").range(start, start+10)
  if(feed_list.length>0){
    that.setData({
      feed:that.data.feed.concat(feed_list),
      feed_length: that.data.feed_length + feed_list.length
    });
  }
  } catch (error) {
    wx.showToast({
      title: error.message || error.msg,
      icon: 'error',
      duration: 2000
    })
  }
}

module.exports.getData = getData;
module.exports.getDiscovery = getDiscovery;
module.exports.search = search;




