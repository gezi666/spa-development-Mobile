/**
 * 存放处理公共事情的js 2017/7/25.
 */

import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
let common={};
/*
*给html设置font-size
* */
window.onload = function(){
  let uiWidth = 750;
  document.documentElement.style.fontSize =
      document.documentElement.clientWidth * 100/uiWidth  + 'px';
};
/**
 *  使用axios进行配置，ajax请求
 * */
//axios.defaults.baseURL = 'http://ip:port/';
axios.defaults.baseURL = 'http://mock.eolinker.com/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.timeout = 30000;
/**
 * params 请求参数
 * onCallBack 成功之后的回调函数
 */
Vue.prototype.$http = {
    Post: function (params,onCallBack) {
        httpSend('post',params,onCallBack);
    },
    Get : function (params,onCallBack) {
        httpSend('get',params,onCallBack);
    }
};
function httpSend(type,params,onCallBack) {
    let param = '';
    let url = params;
    if(type=='post'){
        param = qs.stringify(params.data);
        url = params.url;
    }
    axios({
        method: type,
        url: url,
        data:param
    }).then(function (response) {
        /* code==0表示成功  */
        if(response.data.code=="0"){
            onCallBack(response.data);
        }else{

        }
    }).catch(function(error){
        throw new Error('网络异常');
    });
}
export default common;

