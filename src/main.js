// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import draggable from 'vuedraggable'
import 'font-awesome/css/font-awesome.css'

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAcDhwjyjsETijLpGp_SNhDVCuHuJkh638',
      // v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input
    }
  });

  Vue.use(draggable)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueGoogleMaps,
  template: '<App/>',
  components: { App }
})
