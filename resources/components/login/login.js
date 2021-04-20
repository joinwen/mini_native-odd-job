Component({
  properties: {
    visible: {
      type: Boolean,
      value: true,
      observer: function(newVal) {
        this.theVisible = newVal;
        if(newVal) {
          wx.hideTabBar();
        } else {
          wx.showTabBar();
        }
      }
    }
  },
  data: {
    theVisible: true
  },
  methods: {
    handleLogin() {
      this.setData({
        theVisible: false
      })
    }
  }
});
