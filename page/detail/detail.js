// page/cocktail/cocktail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: {
      id: 1,
      image: 'images/like.png',
      price: 100,
      title: '蓝色夏威夷',
      stock: '有货',
      // num:1,
      // totalNum:0,
      // hasCarts:false,
      // scaleCart:false
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },


  /**
   * 自定义函数
  */
  addToCard: function (e) {
    // const self = this;
    // const total = this.data.totalNum;

    // self.setData({
    //   show:true
    // })
    // setTimeout(function () {
    //   self.setData({
    //     show: false,
    //     scaleCart: true
    //   })
    //   setTimeout(function () {
    //     self.setData({
    //       scaleCart: false,
    //       hasCarts: true,
    //       totalNum: num + total
    //     })
    //   }, 200)
    // }, 300)
    this.setData({
      toastHidden: false
    });
    //遍历列表和购物车列表
    for (var i in this.data.goods) {
      //列表中某一项item的id == 点击事件传来的id。则是被点击的项
      if (this.data.goods[i].id == e.target.id) {
        //给goods数组的当前项添加count元素，值为1，用于记录添加到购物车的数量
        this.data.goods[i].count = 1;
        //获取购物车缓存数组（没有数据，则赋予一个空数组）
        var arr = wx.getStorageSync('cart') || [];
        if (arr.length > 0) {
          //遍历购物车数组
          for (var j in arr) {
            //判断购物车内的item的id,和事件传递过来的id，是否相等
            if (arr[j].id == e.target.id) {
              //相等的话，给count加1
              arr[j].count = arr[j].count + 1;
              //最后把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组）
              try {
                wx.setStorageSync('cart', arr)
              } catch (e) {
                console.log(e)
              }
              //返回（在if内使用return，跳出循环节约运算，节约性能）
              return;
            }
          }
          // 遍历完购物车后，没有对应的item项，把goods的当前项放入购物车数组  
          arr.push(this.data.goods[i]);
        }
        // 购物车没有数据，把item项push放入当前数据（第一次存放时）  
        else {
          arr.push(this.data.goods[i]);
        }
        // 最后，把购物车数据，存放入缓存  
        try {
          wx.setStorageSync('cart', arr)
          // 返回（在if内使用return，跳出循环节约运算，节约性能）  
          return;
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
})