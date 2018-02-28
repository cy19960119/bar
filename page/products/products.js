
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "products",
  /**
   * 页面的初始数据
   */

  data: {
    category:[
      { name: '鸡尾酒', id: 1, image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519638618257&di=235813c9609b2977c3dc954733954704&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2942062407%2C3079893499%26fm%3D214%26gp%3D0.jpg'},
      { name: '啤酒', id: 2, image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519622259525&di=1078f254a729e0f2fa613082a62a5b37&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F12%2F78%2F16pic_1278181_b.jpg'},
      {name:'洋酒',id:3,image:''},
      {name:'酒桶',id:4,image:''},
      {name:'软饮',id:5,image:''},
      {name:'水烟',id:6,image:''},
      {name:'小吃',id:7,image:''}
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 注册coolsite360交互模块
    app.coolsite360.register(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // 执行coolsite360交互组件展示
    app.coolsite360.onShow(this);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    
  },


  //以下为自定义点击事件
  
})

