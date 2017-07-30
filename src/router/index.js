import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import TemplateList from '@/components/template.list/TemplateList'
import PublishVue from '@/components/publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/template',
      name: 'TemplateList',
      component: TemplateList
    }, 
    {
    path: '/publish',
    name: 'Publish',
    component: PublishVue
    }

  ],
  mode: 'history'
})
