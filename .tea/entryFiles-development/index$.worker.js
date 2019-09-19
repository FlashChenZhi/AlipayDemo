if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../node_modules/mini-antui/es/input-item/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/list/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/notice/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../node_modules/mini-antui/es/picker-item/index?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../pages/index/index?hash=19811e3c554c79cfec275617d941847d38ee6618');
require('../../pages/user/login/login?hash=db38e660cb46797c8c28df8357a93e649f450f8c');
require('../../pages/user/register/register?hash=19811e3c554c79cfec275617d941847d38ee6618');
require('../../pages/user/resetPassword/resetPassword?hash=87559a332aab7f417ff6dbb5bb0992e621ff2706');
require('../../pages/bankcard/bankcard?hash=f5707950dc063c5fb6ec7bf6f5090c5581da9c7e');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}