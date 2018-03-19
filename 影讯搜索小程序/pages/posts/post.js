/*脚本可以获取服务器数据*/

//接收对象，只能用相对路径
var postsData=require('../../data/posts-data.js')

/*监听函数，每当小程序的生命周期进入某一阶段时，MINA框架执行某一函数*/
Page({

  /* 页面的初始数据  数据绑定（单向绑定）*/
  data: {
  },

  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    this.setData({
      posts_key:postsData.postList
    });
  }
})