import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
/* 公用js */
import common from '@/assets/js/common';
import '@/assets/css/index.css';

Vue.config.productionTip = false;
/* 使用axios进行配置，ajax请求 */
axios.defaults.baseURL = 'http://ip:port/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.timeout = 30000;
Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
