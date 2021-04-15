// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.getIconFont();
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  getIconFont: () => {
    wx.loadFontFace({
      global: true,
      family: "iconfont",
      source: "url('https://oss.flywen.top/iconfont.ttf')",
      success: (res) => console.log(res.status),
      fail: (res) => console.log(res.status)
    })
  }
})
