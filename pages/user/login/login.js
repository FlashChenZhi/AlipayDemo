var navBar=getApp();

Page({
  data:{
    tabbar:{},
    userName:'张三',
    psw:'123456',
    inputFocus:true
  },
  onLoad(){
     navBar.editTabBar();
  },
  onShow(){
    
  },
  onItemFocus(){
    this.setData({
      inputFocus:false
    })
  },
  onItemInput(e){
    this.setData({
      [e.target.field]:e.detail.value
    })
  },
  onClear(e){
    this.setData({
      [e.target.dataset.field]:''
    })
  },
  onItemBlur(){
    
  },
  onExtraTap(){

  }
})