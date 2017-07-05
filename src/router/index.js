import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TemplateList from '@/components/template.list/TemplateList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/template',
      name: 'TemplateList',
      component: TemplateList
    }
  ],
  mode: 'history'
})
