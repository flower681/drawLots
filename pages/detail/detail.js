function t(t, e, a) {
  return e in t ? Object.defineProperty(t, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = a, t;
}

var e, a = getApp();

Page((e = {
  data: {
    isShowSave: !0,
    isShowDetail: !1
  },
  onLoad: function (t) {
    this.setData({
      type: a.data[a.roleId].type,
      isFromHistory: a.isFromHistory
    }), this.setData(a.data[a.roleId].labelArr[a.labelId]);
    var e = 52;
    if (this.data.content1) {
      var n = 740 / this.data.content1.length;
      n < e && (e = n);
    }
    if (this.data.content2) {
      var i = 740 / this.data.content2.length;
      i < e && (e = i);
    }
    this.setData({
      contentFontSize: e
    });
  },
  onReady: function () {
    var t = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1e3,
      timingFunction: "linear",
      delay: 0
    });
    t.scale(1.1, 1.1).step().scale(1, 1).step(), this.setData({
      animationData: t.export()
    }), setInterval(function () {
      t.scale(1.1, 1.1).step().scale(1, 1).step(), this.setData({
        animationData: t.export()
      });
    }.bind(this), 2e3);
  },
  onShow: function () {
    "showDetail" == this.shareType && (new Date().valueOf() - this.shareTime > 3e3 ? (this.setData({
      isShowDetail: !0
    }), setTimeout(function () {
      wx.pageScrollTo({
        scrollTop: 400,
        duration: 300
      }, 300);
    })) : wx.showToast({
      title: "分享失败",
      icon: "none"
    }), this.shareType = "normal");
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  fufei: function () {
    // t.labelId = Math.floor(Math.random() * t.data[t.roleId].labelArr.length), t.isFromHistory = !1,
      wx.navigateTo({
      url: "/pages/fufei/fufei"
      });
  },
  onShareAppMessage: function () { },
  save: function () {
    var t = {
      roleId: a.roleId,
      labelId: a.labelId,
      roleStr: this.data.type,
      labelIdStr: this.data.id,
      time: new Date().toLocaleString()
    }, e = [], n = wx.getStorageSync("labelDataArr");
    n && (e = JSON.parse(n)), e.push(t), wx.setStorageSync("labelDataArr", JSON.stringify(e)),
      wx.showToast({
        title: "保存成功"
      }), this.setData({
        isShowSave: !1
      });
  }
}, t(e, "onShareAppMessage", function () {
  return {
    title: a.shareTitle,
    imageUrl: a.shareImage
  };
}), t(e, "backRoll", function () {
  wx.navigateBack({});
}), t(e, "test", function () {
  console.log("test"), wx.pageScrollTo({
    scrollTop: 100,
    duration: 300
  });
}), t(e, "shareDetail", function () {
  this.shareType = "showDetail", this.shareTime = new Date().valueOf();
}), e));