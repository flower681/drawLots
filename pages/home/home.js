var t = getApp();

Page({
  data: {
    isShow: !1
  },
  onLoad: function (e) {
    this.setData(t.data[t.roleId]);
  },
  onReady: function () { },
  onShow: function () {
    this.setData({
      isShow: !1
    });
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  roll: function () {
    if (!this.isRolling) {
      var e = wx.createAnimation({
        transformOrigin: "50% 75%",
        duration: 100,
        timingFunction: "ease",
        delay: 0
      });
      e.rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(-5).step().rotate(5).step().rotate(0).step(),
        this.setData({
          animationData: e.export()
        }), t.innerAudioContext.play(), this.isRolling = !0, setTimeout(function () {
          this.setData({
            isShow: !0
          }), this.isRolling = !1;
        }.bind(this), 4e3);
    }
  },
  showDetail: function () {
    t.labelId = Math.floor(Math.random() * t.data[t.roleId].labelArr.length), t.isFromHistory = !1,
      wx.navigateTo({
        url: "/pages/detail/detail"
      });
  },
  onShareAppMessage: function () {
    return {
      title: t.shareTitle,
      imageUrl: t.shareImage
    };
  }
});