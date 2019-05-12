var e = require("data.js"), t = require("/utils/util.js");

App({
  isTipsShow: !0,
  shareTitle: "心诚抽签，心诚则灵",
  shareImage: "/images/share.jpg",
  data: e,
  roleId: 0,
  labelId: 0,
  isFromHistory: !1,
  onLaunch: function () {
    t.shake(function () {
      var e = getCurrentPages(), t = e[e.length - 1];
      t && t.roll && t.roll();
    }), this.innerAudioContext = wx.createInnerAudioContext(), this.innerAudioContext.src = "https://6761-gamter233-58279d-1258573299.tcb.qcloud.la/roll3.mp3?sign=e70def8c8b0c20b4d88f3099a4ca57ac&t=1548666468",
      this.innerAudioContext.onPlay(function () { }), this.innerAudioContext.onError(function (e) {
        console.log(e.errMsg), console.log(e.errCode);
      });
  }
});