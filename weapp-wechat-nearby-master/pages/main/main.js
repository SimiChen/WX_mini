
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['/image/1.png', '/image/2.png', '/image/3.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    loadingHidden: false,
  },

  onLoad: function () {
    var that = this
    console.log('onLoad')
    setTimeout(function () {
      that.setData({
        loadingHidden: true
      })
      console.log('finish')
    }, 1000)
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  start: function(event){
    var app = getApp()
    app.globalData.level = this.data.duration
    console.log(event)
    this.setData({
      loadingHidden: false
    })
    var that = this
    wx:wx.redirectTo({
      url: '/pages/game/game',
      success: function(res) {
        console.log("yes")
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    setTimeout(function () {
      that.setData({
        loadingHidden: true
      })
      console.log('finish')
    }, 1000)
  }
})