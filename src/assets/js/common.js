/**
 * 存放处理公共事情的js 2017/7/25.
 */

let common={};
/*
*给html设置font-size
* */
window.onload = function(){
  let uiWidth = 750;
  document.documentElement.style.fontSize =
      document.documentElement.clientWidth * 100/uiWidth  + 'px';
};
global.setUserInfo = function (user) {
    sessionStorage.setItem('KEY_USER',JSON.stringify(user));
};
global.getUserInfo = function () {
    return JSON.parse(sessionStorage.getItem('KEY_USER'));
};
/***
 * 格式化时间
 * @param fmt yyyy(年)，MM(月)，dd(日)，hh(时)，mm(分)，ss(秒)，S(毫秒)，q(季度)
 * @returns {String}  fmt格式的时间字符串
 * @constructor
 */
Date.prototype.Format2String = function (fmt) {
    if(!this) return null;
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
/***
 * 格式化时间
 * @param fmt yyyy(年)，MM(月)，dd(日)，hh(时)，mm(分)，ss(秒)，S(毫秒)，q(季度)
 * @returns {String}  fmt格式的时间字符串
 * @constructor
 */
String.prototype.Format2String = function (fmt) {
    if(this == '') return null;
    var reg = new RegExp("^[0-9]*$");
    var _this = this;
    if(this.length==8){
        _this = this.substring(0,4)+'/'+this.substring(4,6)+'/'+this.substring(6,8);
    }
    if(reg.test(_this)){ // 如果全部是数字
        return new Date(_this).Format2String(fmt);
    }
    var result = new Date(_this.replace(/-/g,"/"));
    if(result.toString()=='Invalid Date'){
        console.log('时间格式不正确，请使用yyyy-MM-dd hh:MM:ss 或者 yyyy/MM/dd hh:MM:ss');
        return null;
    }
    return result.Format2String(fmt);
};




