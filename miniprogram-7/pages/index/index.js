var util=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time1:"",
    times:0,
    month:"",
    temp:"",
    day:"",
    temp2:"",
    showbutton:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
    time1:util.formatDate(new Date()),
    month:util.month(new Date()),
    day:util.day(new Date()),
    times:wx.getStorageSync('times'),
    temp:wx.getStorageSync('temp'),
    temp2:wx.getStorageSync('temp2'),
   })
   console.log(this.data.day)
   console.log(this.data.temp2)
   if(this.data.temp==this.data.month-1){
    this.setData({
      times:0,
    })
  }

  
  },
  qiandao:function(){
   this.data.temp=this.data.month;
   this.data.temp2=this.data.day;
    this.setData({
      times:this.data.times+1,
      showbutton:false,
    })
    wx.setStorageSync('times', this.data.times)
    wx.setStorageSync('temp', this.data.temp)
   wx.setStorageSync('temp2', this.data.temp2)
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.temp2==this.data.day){
      this.setData({
        showbutton:false,
      })
    }else {
      this.setData({
        showbutton:true,
      })
    }
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
  wolgqu:function(){
console.log(this.data.month)
console.log(this.data.temp)
console.log(this.data.day)
console.log(this.data.temp2)
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