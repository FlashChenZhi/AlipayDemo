var navBar=getApp();

Page({
  data:{
    tabbar:{},
  },
  onLoad(){
     navBar.editTabBar();
  },
  onShow(){
    
  },
  onSubmit(){
      my.redirectTo({
      url: '../login/login'
    })
  }

})