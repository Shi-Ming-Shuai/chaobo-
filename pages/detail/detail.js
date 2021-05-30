import { dengData } from '../../network/deng'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productData: null,  // 商品信息对象
  },
  // 业务逻辑

  // 点击图片预览大图
  preview() {
    wx.previewImage({
      current: this.data.productData.img_url, // 当前显示图片的http链接
      urls: [this.data.productData.img_url] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据 url params参数 结构出 类别 触发点击的 商品
    const { currentCate, id } = options;
    // 根据类别 和 id 找出 指定商品数据
    const data = dengData[currentCate].imgs.find(item => {
      return item.img_id == id
    })
    // 将数据更新到data中
    this.setData({
      productData: data
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
  onShareAppMessage: function (e) {
    console.log(e);
    console.log('转发触发');
  }
})