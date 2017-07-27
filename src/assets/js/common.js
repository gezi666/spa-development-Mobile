/**
 * 存放处理公共事情的js 2017/7/25.
 */

let common={};
/* 给html设置font-size */
window.onload = function(){
  let uiWidth = 750;
  document.documentElement.style.fontSize = document.documentElement.clientWidth * window.devicePixelRatio * 100/uiWidth  + 'px';
};


export default common;

