import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from 'components/main/main';
import FooterTab from 'components/tab/footerTab';
import Login from 'pages/login/login';
import Home from 'pages/home/home';

import Page2 from 'pages/page2/page2'
import Page3 from 'pages/page3/page3'
import Page4 from 'pages/page4/page4'
import AnotherPage from 'components/anotherPage/anotherPage'
import AnotherPage2 from 'components/anotherPage2/anotherPage2'


Router.prototype.goBack = function () {
    this.isBack = true;
    window.history.go(-1);
};
export default new Router({
  routes: [
      {

          path:'/',
          redirect:'/login'
      },
      {
          path: '/login',
          component:Login
      },
      {
          path: '/home',
          name: 'home',
          component: Main,
          children: [
             {
                path: '/',
                components: {
                   body: Home,
                   footer: FooterTab
                }
             },
             {
                 path: 'anotherPage',
                 components: {
                     body: AnotherPage
                 }
             },
             {
                 path: 'anotherPage2',
                 components: {
                      body: AnotherPage2
                 }
             }
          ]
      },
      {
          path: '/page2',
          name: 'page2',
          component: Main,
          children: [
              {
                  path: '/',
                  components: {
                      body: Page2,
                      footer: FooterTab
                  }
              }
          ]
      },
      {
          path: '/page3',
          name: 'page3',
          component: Main,
          children: [
              {
                  path: '/',
                  components: {
                      body: Page3,
                      footer: FooterTab
                  }
              }
          ]
      },
      {
          path: '/page4',
          name: 'page4',
          component: Main,
          children: [
              {
                  path: '/',
                  components: {
                      body: Page4,
                      footer: FooterTab
                  }
              }
          ]
      },
  ]
})
