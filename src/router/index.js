import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/main-page'
import mainPageLeadin from '@/components/main-page-leadin'
import mainPageSex from '@/components/main-page-sex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: mainPage,
      children: [
        { path: '', component: mainPageLeadin },
        { path: 'sex', component: mainPageSex }
      ]
    }
  ]
})
