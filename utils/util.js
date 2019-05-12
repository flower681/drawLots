module.exports = {
  shake: function (a) {
    var e = 0, t = 0, s = 0;
    wx.onAccelerometerChange(function (n) {
      if (e) {
        var o = Math.abs(n.x - e), r = Math.abs(n.y - t), c = Math.abs(n.z - s);
        (o > .85 || r > .85 || c > .85) && a();
      }
      e = n.x, t = n.y, s = n.z;
    });
  }
};