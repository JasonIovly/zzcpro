// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


import 'vue-fabric/dist/vue-fabric.min.css';
import { Fabric } from 'vue-fabric';
Vue.use(Fabric);

Vue.use(Buefy)
Vue.use(ElementUI)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
