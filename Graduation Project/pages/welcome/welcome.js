Page({
  onTap:function(){
    // wx.navigateTo({
    //   url:"../posts/post"
    // });//从父级跳到子级的关系，只能跳五级
    wx.redirectTo({
      url:"../posts/post"
    })
    //redirectTo是平行跳转
  }  
})