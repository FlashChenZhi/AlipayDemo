App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  editTabBar: function () {
    var e = this.globalData.tabbar, a = getCurrentPages(), t = a[a.length - 1], s = t.route;
    console.log(t)
    console.log(s)
    0 != s.indexOf("/") && (s = "/" + s);
    for (var n in e.items) e.items[n].selected = !1, e.items[n].pagePath == s && (e.items[n].selected = !0);
    t.setData({
      tabbar: e
    });
  },
  globalData: {
    userInfo: null,
    //配置tabbar
    tabbar: {
    textColor: "#333",
    selectedColor: "#d0501f",
    backgroundColor: "#ffffff",
    borderStyle: "#d5d5d5",
    items: [
      {
        pagePath: "../index/index",
        name: "首页展示",
        icon:"icon/home_off.png",
        activeIcon:"icon/home_on.png",
        selected:1
      },
      {
        pagePath: "../catalog/catalog",
        name: "商品分类",
        icon:"icon/catalog_off.png",
        activeIcon:"icon/catalog_on.png",
        selected:2
      },
      {
        pagePath: "../order/order",
        name: "订单管理",
        icon: "icon/shopcart_off.png",
        activeIcon: "icon/shopcart_on.png",
        selected:3
      },
      {
        pagePath: "../store/store",
        name: "门店信息",
        icon: "icon/member_off.png",
        activeIcon: "icon/member_on.png",
        selected:4
      },
      {
        pagePath: "../user/login/login",
        name: "关于我们",
        icon: "icon/user_off.png",
        activeIcon: "icon/user_on.png",
        selected:5
      }
    ],
      position: "bottom"
    }
  }
});

