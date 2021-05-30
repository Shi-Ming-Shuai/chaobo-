import { dengData } from '../../network/deng'
const appInstance = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    cateData: [], // 存放分类数据
    currentActive: 0, // 当前活跃的类别
    contentListProps: [], // 向子组件传递
  },

  // 业务逻辑
  call: appInstance.call,
  onChange(event) {
    wx.showToast({
      title: `切换到 ${event.detail.title}专区`,
      icon: 'none',
    });
  },
  // 切换左侧类别
  switchCate(e) {
    const { index } = e.currentTarget.dataset

    // 动态修改 class  更新向子组件传递的数据
    this.setData({
      currentActive: index,
      contentListProps: dengData[index].imgs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化数据  向子组件传递 内容列表
    this.setData({
      cateData: dengData,
      contentListProps: dengData[0].imgs
    })
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