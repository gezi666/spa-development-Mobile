import Vue from 'vue'
import Router from 'vue-router'
import Page1 from 'pages/page1/page1'
import Page2 from 'pages/page2/page2'
import Page3 from 'pages/page3/page3'
import AnotherPage from 'components/anotherPage/anotherPage'
import AnotherPage2 from 'components/anotherPage2/anotherPage2'
import AnotherPage3 from 'components/anotherPage3/anotherPage3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/page1'
    },
    {
      path: '/page1',
      component: Page1,
      children:[
        {
          path:'anotherPage',
          component:AnotherPage,
          children:[
            {
              path:'anotherPage3',
              component:AnotherPage3
            }
          ]
        },
        {
          path:'anotherPage2',
          component:AnotherPage2
        }
      ]
    },
    {
      path: '/page2',
      component: Page2
    },
    {
      path: '/page3',
      component: Page3
    }
  ]
})
