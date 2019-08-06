;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function onLoad() {
    var _this = this;

    console.log(11111);

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = function (res) {
        _this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: function success(res) {
          app.globalData.userInfo = res.userInfo;

          _this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function getUserInfo(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});

/***/ })
],[[1,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJnZXRBcHAiLCJQYWdlIiwiZGF0YSIsIm1vdHRvIiwidXNlckluZm8iLCJoYXNVc2VySW5mbyIsImNhbklVc2UiLCJ3eCIsImJpbmRWaWV3VGFwIiwibmF2aWdhdGVUbyIsInVybCIsIm9uTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWxEYXRhIiwic2V0RGF0YSIsInVzZXJJbmZvUmVhZHlDYWxsYmFjayIsInJlcyIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsImUiLCJkZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsTUFBTSxFQUFsQjtBQUVBQyxJQUFJLENBQUM7QUFDSEMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxhQURIO0FBRUpDLFlBQVEsRUFBRSxFQUZOO0FBR0pDLGVBQVcsRUFBRSxLQUhUO0FBSUpDLFdBQU8sRUFBRUMsRUFBRSxDQUFDRCxPQUFILENBQVcsOEJBQVg7QUFKTCxHQURIO0FBT0g7QUFDQUUsYUFBVyxFQUFFLHVCQUFXO0FBQ3RCRCxNQUFFLENBQUNFLFVBQUgsQ0FBYztBQUNaQyxTQUFHLEVBQUU7QUFETyxLQUFkO0FBR0QsR0FaRTtBQWFIQyxRQUFNLEVBQUUsa0JBQVk7QUFBQTs7QUFDbEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7O0FBQ0EsUUFBSWQsR0FBRyxDQUFDZSxVQUFKLENBQWVWLFFBQW5CLEVBQTZCO0FBQzNCLFdBQUtXLE9BQUwsQ0FBYTtBQUNYWCxnQkFBUSxFQUFFTCxHQUFHLENBQUNlLFVBQUosQ0FBZVYsUUFEZDtBQUVYQyxtQkFBVyxFQUFFO0FBRkYsT0FBYjtBQUlELEtBTEQsTUFLTyxJQUFJLEtBQUtILElBQUwsQ0FBVUksT0FBZCxFQUFzQjtBQUMzQjtBQUNBO0FBQ0FQLFNBQUcsQ0FBQ2lCLHFCQUFKLEdBQTRCLFVBQUFDLEdBQUcsRUFBSTtBQUNqQyxhQUFJLENBQUNGLE9BQUwsQ0FBYTtBQUNYWCxrQkFBUSxFQUFFYSxHQUFHLENBQUNiLFFBREg7QUFFWEMscUJBQVcsRUFBRTtBQUZGLFNBQWI7QUFJRCxPQUxEO0FBTUQsS0FUTSxNQVNBO0FBQ0w7QUFDQUUsUUFBRSxDQUFDVyxXQUFILENBQWU7QUFDYkMsZUFBTyxFQUFFLGlCQUFBRixHQUFHLEVBQUk7QUFDZGxCLGFBQUcsQ0FBQ2UsVUFBSixDQUFlVixRQUFmLEdBQTBCYSxHQUFHLENBQUNiLFFBQTlCOztBQUNBLGVBQUksQ0FBQ1csT0FBTCxDQUFhO0FBQ1hYLG9CQUFRLEVBQUVhLEdBQUcsQ0FBQ2IsUUFESDtBQUVYQyx1QkFBVyxFQUFFO0FBRkYsV0FBYjtBQUlEO0FBUFksT0FBZjtBQVNEO0FBQ0YsR0F6Q0U7QUEwQ0hhLGFBQVcsRUFBRSxxQkFBU0UsQ0FBVCxFQUFZO0FBQ3ZCUixXQUFPLENBQUNDLEdBQVIsQ0FBWU8sQ0FBWjtBQUNBckIsT0FBRyxDQUFDZSxVQUFKLENBQWVWLFFBQWYsR0FBMEJnQixDQUFDLENBQUNDLE1BQUYsQ0FBU2pCLFFBQW5DO0FBQ0EsU0FBS1csT0FBTCxDQUFhO0FBQ1hYLGNBQVEsRUFBRWdCLENBQUMsQ0FBQ0MsTUFBRixDQUFTakIsUUFEUjtBQUVYQyxpQkFBVyxFQUFFO0FBRkYsS0FBYjtBQUlEO0FBakRFLENBQUQsQ0FBSixDIiwiZmlsZSI6InBhZ2VzL2luZGV4L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcCgpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICdIZWxsbyBXb3JsZCcsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJylcbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXA6IGZ1bmN0aW9uKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKDExMTExKVxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKXtcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIGdldFVzZXJJbmZvOiBmdW5jdGlvbihlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=