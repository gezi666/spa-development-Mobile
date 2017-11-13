import Vue from 'vue';
import App from './App';
import router from './router';
import common from '@/assets/js/common';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import '@/assets/css/index.css';

Vue.use(MintUI);
Vue.config.productionTip = false;
Vue.prototype.slideName = 'slide-left';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
