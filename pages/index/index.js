var app=getApp();  

Page({
    onLoad(query) {
      // 页面加载
      app.editTabBar();
      console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    },
    data: {
      tabbar:{},
      indicatorDots: true,
      autoplay: true,
      vertical: false,
      interval: 3000,
      circular: false,
      atlas:{
        mode:'scaleToFill',
        text:'scaleToFill：不保持纵横比缩放图片，使图片完全适应',
      },
      src:[
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568885840050&di=3dc6aa73a65034771d181e11f5088043&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0152615ad4197ea801204029be17a0.png%401280w_1l_2o_100sh.png',
        'https://gw.alipayobjects.com/zos/skylark-tools/public/files/1c9568aa1b4b84d5dfc32384f3ed4985.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568885756170&di=a3d3f49f98acb036fe149f357cd2c3d5&imgtype=0&src=http%3A%2F%2Fimg.technews.tw%2Fwp-content%2Fuploads%2F2015%2F02%2F20150227125451.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568885900305&di=ad43696f4e9d3d061804739e2d4da69f&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D4871e13614950a7b75354cc43aea13e4%2F9825bc315c6034a85aa60281c21349540923766d.jpg'
      ]
    },
    onSubmit(e) {
      my.alert({
        content: `数据：${JSON.stringify(e.detail.value)}`,
      });
    },
    onShareAppMessage() {
      // 返回自定义分享信息
      return {
        title: 'My App',
        desc: 'My App description',
        path: 'pages/index/index',
      };
    },
    imageError(e) {
      console.log('image 发生 error 事件，携带值为', e.detail.errMsg);
    },
    onTap(e) {
      console.log('image 发生 tap 事件', e);
    },
    imageLoad(e) {
      console.log('image 加载成功', e);
    },

    onReset() {
    },
    onReady() {
      // 页面加载完成
    },
    onShow() {
      // 页面显示
    },
    onHide() {
      // 页面隐藏
    },
    onUnload() {
      // 页面被关闭
    },
    onTitleClick() {
      // 标题被点击
    },
    onPullDownRefresh() {
      // 页面被下拉
    },
    onReachBottom() {
      // 页面被拉到底部
    },
});
