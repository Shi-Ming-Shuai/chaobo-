// components/cate_content/cate_content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentCate: Number, // 当前所在类别
    contentList: Array, // 父组件传递过来的数据 展示的内容列表
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转至详情页
    toDetail(e) {
      // 拿到所在类别
      const currentCate = this.data.currentCate
      // 拿到商品id 
      const { id } = e.currentTarget.dataset
      // 跳转至详情页 url携带 商品id
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}&currentCate=${currentCate}`
      });
    }
  }
})
