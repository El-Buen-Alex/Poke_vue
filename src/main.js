import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import {routes} from './routes';



Vue.use(VueRouter)

Vue.use(VueAxios, axios);

Vue.config.productionTip = false


const router = new VueRouter({
  mode:'history',
  routes:routes
});

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

 new Vue({
  el:'#app',
  router:router,
  render: h=>h(App)
})